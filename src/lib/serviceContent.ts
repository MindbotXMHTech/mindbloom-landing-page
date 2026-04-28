import {
  serviceCardIconMap,
  serviceCardsFallback,
  type PublicServiceCard,
} from "../constants/serviceCardsData";

type ServiceCardRow = {
  id: string;
  slug: string;
  icon_key: keyof typeof serviceCardIconMap;
  icon_image_url: string;
  title_primary_th: string;
  title_primary_en: string;
  title_secondary_th: string;
  title_secondary_en: string;
  details_th: string;
  details_en: string;
  info_heading_th: string;
  info_heading_en: string;
  info_lines_th: string;
  info_lines_en: string;
  note_lines_th: string;
  note_lines_en: string;
  duration_th: string;
  duration_en: string;
  price_lines: string[] | null;
  extra_th: string;
  extra_en: string;
  sort_order: number;
};

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.replace(/\/+$/, "") ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

function hasSupabaseConfig() {
  return SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0;
}

function splitLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizePriceLines(priceLines: string[] | null) {
  const cleaned = (priceLines ?? [])
    .map((line) => line.trim())
    .filter(Boolean);

  if (cleaned.length === 0) {
    return [];
  }

  if (cleaned.length > 1) {
    return cleaned;
  }

  const joined = cleaned[0].replace(/\s+/g, " ").trim();
  const rangeMatch = joined.match(/^(.*?)\s*-\s*(.*?)$/);

  if (rangeMatch) {
    const from = rangeMatch[1]?.trim() ?? "";
    const to = rangeMatch[2]?.trim() ?? "";
    return to ? [`${from} -`, to] : [from];
  }

  return [joined];
}

function toPublicServiceCard(row: ServiceCardRow): PublicServiceCard {
  const detailTh = splitLines(row.details_th);
  const detailEn = splitLines(row.details_en);
  const infoTh = splitLines(row.info_lines_th);
  const infoEn = splitLines(row.info_lines_en);
  const noteTh = splitLines(row.note_lines_th);
  const noteEn = splitLines(row.note_lines_en);
  const durationTh = splitLines(row.duration_th);
  const durationEn = splitLines(row.duration_en);

  return {
    id: row.id,
    slug: row.slug,
    iconKey: row.icon_key,
    icon: row.icon_image_url || serviceCardIconMap[row.icon_key] || serviceCardIconMap.consult1,
    titlePrimary: {
      th: row.title_primary_th,
      en: row.title_primary_en,
    },
    titleSecondary: {
      th: row.title_secondary_th,
      en: row.title_secondary_en,
    },
    details: Array.from({ length: Math.max(detailTh.length, detailEn.length, 1) }, (_, index) => ({
      th: detailTh[index] ?? detailTh[0] ?? row.details_th,
      en: detailEn[index] ?? detailEn[0] ?? row.details_en,
    })),
    infoHeading: {
      th: row.info_heading_th,
      en: row.info_heading_en,
    },
    infoLines: Array.from({ length: Math.max(infoTh.length, infoEn.length, 1) }, (_, index) => ({
      th: infoTh[index] ?? infoTh[0] ?? row.info_lines_th,
      en: infoEn[index] ?? infoEn[0] ?? row.info_lines_en,
    })),
    noteLines: Array.from({ length: Math.max(noteTh.length, noteEn.length, 1) }, (_, index) => ({
      th: noteTh[index] ?? noteTh[0] ?? row.note_lines_th,
      en: noteEn[index] ?? noteEn[0] ?? row.note_lines_en,
    })),
    durationLines: Array.from(
      { length: Math.max(durationTh.length, durationEn.length, 1) },
      (_, index) => ({
        th: durationTh[index] ?? durationTh[0] ?? row.duration_th,
        en: durationEn[index] ?? durationEn[0] ?? row.duration_en,
      }),
    ),
    priceLines: normalizePriceLines(row.price_lines),
    extra: {
      th: row.extra_th,
      en: row.extra_en,
    },
  };
}

async function fetchPublicServiceCards() {
  if (!hasSupabaseConfig()) {
    return [];
  }

  const query = new URLSearchParams({
    select:
      "id,slug,icon_key,icon_image_url,title_primary_th,title_primary_en,title_secondary_th,title_secondary_en,details_th,details_en,info_heading_th,info_heading_en,info_lines_th,info_lines_en,note_lines_th,note_lines_en,duration_th,duration_en,price_lines,extra_th,extra_en,sort_order",
    active: "eq.true",
    order: "sort_order.asc",
  });

  const response = await fetch(`${SUPABASE_URL}/rest/v1/service_cards?${query.toString()}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load service cards");
  }

  return (await response.json()) as ServiceCardRow[];
}

export async function loadPublicServiceCards() {
  try {
    const rows = await fetchPublicServiceCards();
    return rows.length > 0 ? rows.map(toPublicServiceCard) : serviceCardsFallback;
  } catch {
    return serviceCardsFallback;
  }
}
