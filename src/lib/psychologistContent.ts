import { images } from "../constants/images";
import type { LocalizedText } from "../i18n/types";

export type PsychologistTopicKey =
  | "relationships"
  | "adjustment"
  | "emotions"
  | "behavior"
  | "thinking"
  | "personality"
  | "stress"
  | "depression"
  | "work";

export const psychologistTopicLabels: Record<PsychologistTopicKey, LocalizedText> = {
  relationships: { th: "ความสัมพันธ์", en: "Relationships" },
  adjustment: { th: "การปรับตัว", en: "Adjustment" },
  emotions: { th: "อารมณ์", en: "Emotions" },
  behavior: { th: "พฤติกรรม", en: "Behavior" },
  thinking: { th: "ปัญหาความคิด", en: "Thought patterns" },
  personality: { th: "บุคลิกภาพ", en: "Personality" },
  stress: { th: "ความเครียด", en: "Stress" },
  depression: { th: "ซึมเศร้า", en: "Depression" },
  work: { th: "การงาน", en: "Work" },
};

type PsychologistRow = {
  id: string;
  slug: string;
  name_th: string;
  name_en: string;
  nickname_th: string;
  nickname_en: string;
  license_no: string;
  photo_url: string;
  approach_th: string;
  approach_en: string;
  value_th: string;
  value_en: string;
  quote_th: string;
  quote_en: string;
  topics: string[];
  active: boolean;
  sort_order: number;
};

export type PublicPsychologist = {
  id: string;
  photo: string;
  name: LocalizedText;
  nickname: LocalizedText;
  license: LocalizedText;
  approach: LocalizedText;
  value: LocalizedText;
  quote: LocalizedText;
  topics: PsychologistTopicKey[];
  active: boolean;
  sortOrder: number;
};

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL?.replace(/\/+$/, "") ?? "";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? "";

export const fallbackPsychologists: PublicPsychologist[] = [
  {
    id: "1",
    photo: images.psycho1,
    name: { th: "พณิดา โยมะบุตร", en: "Panida Yomabut" },
    nickname: { th: "ดาว", en: "Dao" },
    license: { th: "จค. 462", en: "Lic. No. 462" },
    approach: { th: "จิตวิทยาแบบผสมผสาน", en: "Integrative Therapy" },
    value: { th: "ความสงบภายในใจ", en: "Peace of Mind" },
    quote: {
      th: "เราทุกคนมีศักยภาพในการก้าวข้าม ผ่านช่วงเวลายากลำบากได้มากกว่าที่เราคิด",
      en: "We all have more potential to move through difficult times than we often realize.",
    },
    topics: ["relationships", "adjustment", "emotions", "behavior", "thinking", "personality"],
    active: true,
    sortOrder: 0,
  },
  {
    id: "2",
    photo: images.psycho2,
    name: { th: "อนุตตรา รานี", en: "Anuttra Ranee" },
    nickname: { th: "ชีเกนส์", en: "Chigains" },
    license: { th: "จค. 1385", en: "Lic. No. 1385" },
    approach: { th: "Satir Model และ CBT", en: "Satir Model & CBT" },
    value: { th: "พื้นที่ปลอดภัยทางอารมณ์", en: "Emotional Safe Space" },
    quote: {
      th: "เราทุกคนมีศักยภาพในการก้าวข้าม ผ่านช่วงเวลายากลำบากได้มากกว่าที่เราคิด",
      en: "We all have more potential to move through difficult times than we often realize.",
    },
    topics: ["relationships", "adjustment", "emotions", "stress", "depression", "work"],
    active: true,
    sortOrder: 1,
  },
  {
    id: "3",
    photo: images.psycho3,
    name: { th: "สุจิตรภัค ศรีสุพรรณราช", en: "Suchitraphak Srisupanrat" },
    nickname: { th: "กานพลู", en: "Karnplu" },
    license: { th: "จค. 1400", en: "Lic. No. 1400" },
    approach: { th: "การบำบัดแบบประคับประคอง", en: "Supportive Psychotherapy" },
    value: { th: "คุณค่าและอัตลักษณ์ของผู้รับบริการ", en: "Case's Value and Identity" },
    quote: {
      th: "ดอกไม้ทุกดอกมีความสวยงาม เพียงแค่รอเวลาและสิ่งแวดล้อมที่เหมาะสมในการผลิบาน",
      en: "Every flower has its own beauty, waiting for the right time and environment to bloom.",
    },
    topics: ["relationships", "adjustment", "emotions", "stress", "work"],
    active: true,
    sortOrder: 2,
  },
  {
    id: "4",
    photo: images.psycho4,
    name: { th: "จิตติ กันกำธรวงศ์", en: "Jitti Kunkamthonwong" },
    nickname: { th: "ฉิ่น", en: "Chin" },
    license: { th: "จค. 1562", en: "Lic. No. 1562" },
    approach: { th: "แนวทางมนุษยนิยม", en: "Humanistic Approach" },
    value: { th: "ความมุ่งมั่น", en: "Determination" },
    quote: {
      th: "ขอแค่เราไม่ยอมแพ้ เราก็ยังลุกขึ้นมาลองใหม่ได้เสมอ",
      en: "As long as we do not give up, we can always stand up and try again.",
    },
    topics: ["relationships", "adjustment", "emotions", "stress", "depression", "work"],
    active: true,
    sortOrder: 3,
  },
];

function hasSupabaseConfig() {
  return SUPABASE_URL.length > 0 && SUPABASE_ANON_KEY.length > 0;
}

function normalizeLicenseNumber(value: string) {
  return value.replace(/^จค\.\s*/i, "").replace(/[^0-9]/g, "").trim();
}

function formatLicenseNumber(value: string, language: "th" | "en") {
  const cleaned = normalizeLicenseNumber(value);
  if (!cleaned) {
    return "";
  }

  return language === "th" ? `จค. ${cleaned}` : `Lic. No. ${cleaned}`;
}

function isPsychologistTopicKey(value: string): value is PsychologistTopicKey {
  return value in psychologistTopicLabels;
}

function resolvePhotoUrl(row: PsychologistRow) {
  if (row.photo_url.startsWith("http://") || row.photo_url.startsWith("https://")) {
    return row.photo_url;
  }

  const fallback = fallbackPsychologists.find(
    (psychologist) => psychologist.sortOrder === row.sort_order,
  );
  if (fallback) {
    return fallback.photo;
  }

  return row.photo_url;
}

function toPublicPsychologist(row: PsychologistRow): PublicPsychologist {
  return {
    id: row.id,
    photo: resolvePhotoUrl(row),
    name: {
      th: row.name_th,
      en: row.name_en,
    },
    nickname: {
      th: row.nickname_th,
      en: row.nickname_en,
    },
    license: {
      th: formatLicenseNumber(row.license_no, "th"),
      en: formatLicenseNumber(row.license_no, "en"),
    },
    approach: {
      th: row.approach_th,
      en: row.approach_en,
    },
    value: {
      th: row.value_th,
      en: row.value_en,
    },
    quote: {
      th: row.quote_th,
      en: row.quote_en,
    },
    topics: row.topics.filter(isPsychologistTopicKey),
    active: row.active,
    sortOrder: row.sort_order,
  };
}

async function fetchPsychologistRows() {
  if (!hasSupabaseConfig()) {
    return [];
  }

  const query = new URLSearchParams({
    select:
      "id,slug,name_th,name_en,nickname_th,nickname_en,license_no,photo_url,approach_th,approach_en,value_th,value_en,quote_th,quote_en,topics,active,sort_order",
    active: "eq.true",
    order: "sort_order.asc",
  });

  const response = await fetch(`${SUPABASE_URL}/rest/v1/psychologists?${query.toString()}`, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to load psychologists");
  }

  return (await response.json()) as PsychologistRow[];
}

export async function loadPublicPsychologists() {
  try {
    const rows = await fetchPsychologistRows();
    if (rows.length > 0) {
      return rows.map(toPublicPsychologist);
    }
  } catch {
    // fall back to bundled content below
  }

  return fallbackPsychologists;
}
