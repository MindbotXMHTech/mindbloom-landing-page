import {
  workshopCategoriesFallback,
  workshopProgramsFallback,
  type PublicWorkshopCategory,
  type PublicWorkshopProgram,
} from "../constants/workshopData";

type WorkshopCategoryRow = {
  id: string;
  slug: string;
  title_th: string;
  title_en: string;
  subtitle_th: string;
  subtitle_en: string;
  sort_order: number;
};

type WorkshopProgramRow = {
  id: string;
  category_id: string;
  slug: string;
  title_th: string;
  title_en: string;
  summary_th: string;
  summary_en: string;
  content_th: string;
  content_en: string;
  gallery_image_urls: string[] | null;
  gallery_style: "square" | "landscape";
  show_cta: boolean;
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
    .map((item) => item.trim())
    .filter(Boolean);
}

function toPublicWorkshopCategory(row: WorkshopCategoryRow): PublicWorkshopCategory {
  return {
    id: row.id,
    slug: row.slug,
    title: {
      th: row.title_th,
      en: row.title_en,
    },
    subtitle: {
      th: row.subtitle_th,
      en: row.subtitle_en,
    },
  };
}

function toPublicWorkshopProgram(
  row: WorkshopProgramRow,
  categorySlug: string,
): PublicWorkshopProgram {
  const contentTh = splitParagraphs(row.content_th);
  const contentEn = splitParagraphs(row.content_en);

  return {
    id: row.id,
    slug: row.slug,
    categorySlug,
    title: {
      th: row.title_th,
      en: row.title_en,
    },
    summary: {
      th: row.summary_th,
      en: row.summary_en,
    },
    content: Array.from({ length: Math.max(contentTh.length, contentEn.length, 1) }, (_, index) => ({
      th: contentTh[index] ?? contentTh[0] ?? row.content_th,
      en: contentEn[index] ?? contentEn[0] ?? row.content_en,
    })),
    galleryImages: row.gallery_image_urls?.filter(Boolean) ?? [],
    galleryStyle: row.gallery_style,
    showCta: row.show_cta,
  };
}

async function fetchPublicWorkshopCategories() {
  if (!hasSupabaseConfig()) {
    return [];
  }

  const query = new URLSearchParams({
    select: "id,slug,title_th,title_en,subtitle_th,subtitle_en,sort_order",
    active: "eq.true",
    order: "sort_order.asc",
  });

  const response = await fetch(`${SUPABASE_URL}/rest/v1/workshop_categories?${query.toString()}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load workshop categories");
  }

  return (await response.json()) as WorkshopCategoryRow[];
}

async function fetchPublicWorkshopPrograms() {
  if (!hasSupabaseConfig()) {
    return [];
  }

  const query = new URLSearchParams({
    select:
      "id,category_id,slug,title_th,title_en,summary_th,summary_en,content_th,content_en,gallery_image_urls,gallery_style,show_cta,sort_order",
    active: "eq.true",
    order: "sort_order.asc",
  });

  const response = await fetch(`${SUPABASE_URL}/rest/v1/workshop_programs?${query.toString()}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load workshop programs");
  }

  return (await response.json()) as WorkshopProgramRow[];
}

export async function loadPublicWorkshopCategories() {
  try {
    const rows = await fetchPublicWorkshopCategories();
    return rows.length > 0 ? rows.map(toPublicWorkshopCategory) : workshopCategoriesFallback;
  } catch {
    return workshopCategoriesFallback;
  }
}

export async function loadPublicWorkshopPrograms() {
  try {
    const [categoryRows, programRows] = await Promise.all([
      fetchPublicWorkshopCategories(),
      fetchPublicWorkshopPrograms(),
    ]);

    if (categoryRows.length > 0 && programRows.length > 0) {
      const categorySlugMap = new Map(categoryRows.map((row) => [row.id, row.slug] as const));
      return programRows
        .filter((row) => categorySlugMap.has(row.category_id))
        .map((row) => toPublicWorkshopProgram(row, categorySlugMap.get(row.category_id) ?? ""));
    }

    return workshopProgramsFallback;
  } catch {
    return workshopProgramsFallback;
  }
}
