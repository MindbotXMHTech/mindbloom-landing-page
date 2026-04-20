import { BlogList as StaticBlogList } from "../constants/blogData";
import type { LocalizedText } from "../i18n/types";

export type PublicBlogPost = {
  id: string;
  title: LocalizedText;
  image: string;
  content: LocalizedText[];
  youtubeId?: string;
  date?: LocalizedText;
  slug: string;
};

type BlogPostRow = {
  id: string;
  slug: string;
  title_th: string;
  title_en: string;
  content_th: string;
  content_en: string;
  cover_image_url: string;
  youtube_url: string | null;
  published_at: string | null;
  sort_order: number;
};

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.replace(/\/+$/, "") ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

function hasSupabaseConfig() {
  return SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0;
}

function splitParagraphs(value: string) {
  return value
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function buildDate(value: string | null): LocalizedText | undefined {
  if (!value) {
    return undefined;
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return {
    th: new Intl.DateTimeFormat("th-TH", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date),
    en: new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date),
  };
}

function toPublicBlogPost(row: BlogPostRow): PublicBlogPost {
  const contentTh = splitParagraphs(row.content_th);
  const contentEn = splitParagraphs(row.content_en);
  const maxLength = Math.max(contentTh.length, contentEn.length, 1);

  return {
    id: row.id,
    slug: row.slug,
    title: {
      th: row.title_th,
      en: row.title_en,
    },
    image: row.cover_image_url,
    content: Array.from({ length: maxLength }, (_, index) => ({
      th: contentTh[index] ?? contentTh[0] ?? row.content_th,
      en: contentEn[index] ?? contentEn[0] ?? row.content_en,
    })),
    youtubeId: row.youtube_url || undefined,
    date: buildDate(row.published_at),
  };
}

async function fetchPublishedBlogRows() {
  if (!hasSupabaseConfig()) {
    return [];
  }

  const query = new URLSearchParams({
    select:
      "id,slug,title_th,title_en,content_th,content_en,cover_image_url,youtube_url,published_at,sort_order",
    status: "eq.published",
    order: "sort_order.asc",
  });
  query.append("order", "published_at.desc");

  const response = await fetch(`${SUPABASE_URL}/rest/v1/blog_posts?${query.toString()}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load blog posts");
  }

  return (await response.json()) as BlogPostRow[];
}

export async function loadPublicBlogPosts() {
  try {
    const rows = await fetchPublishedBlogRows();
    if (rows.length > 0) {
      return rows.map(toPublicBlogPost);
    }
  } catch {
    // Fall back to the hard-coded content below.
  }

  return StaticBlogList.map((item) => ({
    ...item,
    slug: item.id,
  }));
}

export async function loadPublicBlogPost(id: string) {
  try {
    const rows = await fetchPublishedBlogRows();
    const found = rows.find((row) => row.id === id || row.slug === id);
    if (found) {
      return toPublicBlogPost(found);
    }
  } catch {
    // Fall back to the hard-coded content below.
  }

  const staticPost = StaticBlogList.find((item) => item.id === id);
  if (!staticPost) {
    return null;
  }

  return {
    ...staticPost,
    slug: staticPost.id,
  };
}
