import { images } from "./images";
import type { LocalizedText } from "../i18n/types";

type ActivityDetail = {
  id: string;
  title: LocalizedText;
  image: string[];
  content: LocalizedText[];
  youtubeId?: string;
  date?: LocalizedText;
  text?: LocalizedText;
  mainImage: string;
};

export const activityData: ActivityDetail[] = [
  {
    id: "1",
    title: { th: "MindBloom Gallery", en: "MindBloom Gallery" },
    mainImage: images.gal5,
    image: [
      images.gal1,
      images.gal2,
      images.gal3,
      images.gal4,
      images.gal5,
      images.gal6,
      images.gal7,
      images.gal8,
      images.gal9,
      images.gal10,
      images.gal11,
      images.gal12,
      images.gal13,
      images.gal14,
      images.gal15,
    ],
    content: [
      {
        th: "นิทรรศการผลงานจากผู้ที่มีประสบการณ์ด้านสุขภาพจิต ที่ชวนให้สังคมมองโรคทางใจด้วยความเข้าใจ พร้อมกิจกรรมเวิร์กชอปและการสนับสนุนผลงานตลอด 3 สัปดาห์",
        en: "An exhibition of work by people with lived mental health experiences, inviting society to see emotional struggles with greater understanding, alongside workshops and ongoing support for the artworks over three weeks.",
      },
    ],
    date: { th: "วันที่ 12 มกราคม 2025", en: "January 12, 2025" },
    text: {
      th: "นิทรรศการผลงานจากผู้ที่มีประสบการณ์ด้านสุขภาพจิต",
      en: "An exhibition featuring works by people with lived mental health experience",
    },
  },
  {
    id: "2",
    title: {
      th: "Mindbloom Opening and Exhibition",
      en: "Mindbloom Opening and Exhibition",
    },
    mainImage: images.act1,
    image: [
      images.act1,
      images.act2,
      images.act3,
      images.act4,
      images.act5,
      images.act6,
    ],
    content: [
      {
        th: "ขอบคุณที่มาสร้างความอบอุ่นให้สวนดอกไม้แห่งนี้ด้วยกัน",
        en: "Thank you for helping fill this flower garden with warmth together.",
      },
    ],
    date: { th: "วันที่ 26 มกราคม 2025", en: "January 26, 2025" },
    text: {
      th: "ขอบคุณที่มาสร้างความอบอุ่นให้สวนดอกไม้แห่งนี้ด้วยกัน",
      en: "Thank you for helping create warmth in this flower garden together.",
    },
  },
  {
    id: "3",
    title: {
      th: "To the unknown เดือนแห่งความรัก",
      en: "To the Unknown: Month of Love",
    },
    mainImage: images.un4,
    image: [
      images.un1,
      images.un2,
      images.un3,
      images.un4,
      images.un5,
      images.un6,
      images.un7,
      images.un8,
    ],
    content: [
      {
        th: "พร้อมเปิดรับบริจาคหนังสือและจัดเวิร์กชอปดูแลใจ เพื่อส่งต่อความรักและกำลังใจ",
        en: "Featuring a book donation drive and mental wellbeing workshops to pass on love and encouragement.",
      },
    ],
    date: { th: "วันที่ 26 มกราคม 2025", en: "January 26, 2025" },
    text: {
      th: "MindBloom พาทุกคนไปรู้จักอีกมุมของชีวิต ณ ทัณฑสถานหญิงกลาง",
      en: "MindBloom invited everyone to witness another side of life at the Central Women's Correctional Institution.",
    },
  },
];
