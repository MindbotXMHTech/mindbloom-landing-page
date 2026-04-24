import { activityData, type ActivityDetail } from "../constants/activityData";
import type { LocalizedText } from "../i18n/types";

export type PublicActivity = ActivityDetail;

type ActivityRow = {
  id: string;
  slug: string;
  title_th: string;
  title_en: string;
  summary_th: string;
  summary_en: string;
  content_th: string;
  content_en: string;
  cover_image_url: string;
  gallery_image_urls: string[] | null;
  youtube_url: string | null;
  event_date: string | null;
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

  const thaiDate = new Intl.DateTimeFormat("th-TH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);

  return {
    th: `วันที่ ${thaiDate}`,
    en: new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date),
  };
}

function buildContent(
  contentValue: string,
  summaryValue: string,
  fallbackValue: string,
) {
  const paragraphs = splitParagraphs(contentValue || summaryValue || fallbackValue);

  return paragraphs.length > 0 ? paragraphs : [fallbackValue];
}

function toPublicActivity(row: ActivityRow): PublicActivity {
  const contentTh = buildContent(row.content_th, row.summary_th, row.title_th);
  const contentEn = buildContent(row.content_en, row.summary_en, row.title_en);
  const maxLength = Math.max(contentTh.length, contentEn.length, 1);
  const galleryImages = row.gallery_image_urls?.filter(
    (value): value is string => typeof value === "string" && value.trim().length > 0,
  );

  return {
    id: row.id,
    slug: row.slug,
    title: {
      th: row.title_th,
      en: row.title_en,
    },
    mainImage: row.cover_image_url,
    image: galleryImages && galleryImages.length > 0
      ? galleryImages
      : [row.cover_image_url],
    content: Array.from({ length: maxLength }, (_, index) => ({
      th: contentTh[index] ?? contentTh[0] ?? row.summary_th ?? row.title_th,
      en: contentEn[index] ?? contentEn[0] ?? row.summary_en ?? row.title_en,
    })),
    youtubeId: row.youtube_url || undefined,
    date: buildDate(row.event_date ?? row.published_at),
    text:
      row.summary_th || row.summary_en
        ? {
            th: row.summary_th || row.title_th,
            en: row.summary_en || row.title_en,
          }
        : undefined,
  };
}

async function fetchPublishedActivityRows() {
  if (!hasSupabaseConfig()) {
    return [];
  }

  const query = new URLSearchParams({
    select:
      "id,slug,title_th,title_en,summary_th,summary_en,content_th,content_en,cover_image_url,gallery_image_urls,youtube_url,event_date,published_at,sort_order",
    status: "eq.published",
    order: "sort_order.asc",
  });
  query.append("order", "published_at.desc");

  const response = await fetch(`${SUPABASE_URL}/rest/v1/activities?${query.toString()}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load activities");
  }

  return (await response.json()) as ActivityRow[];
}

function fallbackActivities() {
  return activityData;
}

export async function loadPublicActivities() {
  try {
    const rows = await fetchPublishedActivityRows();
    return rows.length > 0 ? rows.map(toPublicActivity) : fallbackActivities();
  } catch {
    return fallbackActivities();
  }
}

export async function loadPublicActivity(idOrSlug: string) {
  try {
    const rows = await fetchPublishedActivityRows();

    if (rows.length > 0) {
      const found = rows.find((row) => row.id === idOrSlug || row.slug === idOrSlug);
      return found ? toPublicActivity(found) : null;
    }
  } catch {
    // fall back below
  }

  return fallbackActivities().find(
    (item) => item.id === idOrSlug || item.slug === idOrSlug,
  ) ?? null;
}
