import { svgs } from "./svgs";
import type { LocalizedText } from "../i18n/types";

export type PublicServiceCard = {
  id: string;
  slug: string;
  iconKey: string;
  icon: string;
  titlePrimary: LocalizedText;
  titleSecondary: LocalizedText;
  details: LocalizedText[];
  infoHeading: LocalizedText;
  infoLines: LocalizedText[];
  noteLines: LocalizedText[];
  durationLines: LocalizedText[];
  priceLines: string[];
  extra: LocalizedText;
};

export const serviceCardIconMap = {
  consult1: svgs.consult1,
  consult2: svgs.consult2,
  consult3: svgs.consult3,
} as const;

export const serviceCardsFallback: PublicServiceCard[] = [
  {
    id: "card-1",
    slug: "individual-psychotherapy-counselling",
    iconKey: "consult1",
    icon: serviceCardIconMap.consult1,
    titlePrimary: {
      th: "จิตบำบัด ให้คำปรึกษารายบุคคล",
      en: "Individual Psychotherapy / Counselling",
    },
    titleSecondary: {
      th: "(Individual Psychotherapy/ Counselling)",
      en: "One-on-one psychological support",
    },
    details: [
      {
        th: "การพูดคุยแบบตัวต่อตัวกับนักจิตวิทยา",
        en: "One-on-one conversations with a psychologist",
      },
      {
        th: "เพื่อทำความเข้าใจความคิด อารมณ์ และพฤติกรรมของตนเองอย่างลึกซึ้ง",
        en: "to better understand your thoughts, emotions, and behaviors in depth",
      },
      {
        th: "พร้อมเรียนรู้วิธีดูแลใจและรับมือกับปัญหาในชีวิตได้อย่างเหมาะสม",
        en: "while learning healthier ways to care for yourself and cope with life challenges",
      },
    ],
    infoHeading: { th: "ให้บริการโดย", en: "Provided by" },
    infoLines: [
      { th: "นักจิตวิทยาคลินิก", en: "Clinical psychologists" },
      {
        th: "ผู้ได้รับการรับรองเป็นผู้ประกอบโรคศิลปะ",
        en: "licensed health professionals",
      },
      { th: "สาขาจิตวิทยาคลินิก", en: "in clinical psychology" },
    ],
    noteLines: [
      {
        th: "มีประสบการณ์ในการให้คำปรึกษา",
        en: "Experienced in counselling",
      },
      {
        th: "และบำบัดทางจิตวิทยา",
        en: "and psychological therapy",
      },
    ],
    durationLines: [{ th: "60 นาที", en: "60 mins" }],
    priceLines: ["2,000"],
    extra: {
      th: "เพิ่มเวลา 30 นาที/1,000 บาท",
      en: "Add 30 mins / 1,000 THB",
    },
  },
  {
    id: "card-2",
    slug: "couple-family-therapy",
    iconKey: "consult2",
    icon: serviceCardIconMap.consult2,
    titlePrimary: {
      th: "การบำบัดคู่/ครอบครัว",
      en: "Couple / Family Therapy",
    },
    titleSecondary: {
      th: "(Couple/Family Therapy)",
      en: "Relationship-focused sessions",
    },
    details: [
      {
        th: "การบำบัด/ให้คำปรึกษาที่ช่วยให้คนในความสัมพันธ์เข้าใจกันมากขึ้น สื่อสารดีขึ้น และจัดการความขัดแย้งอย่างสร้างสรรค์ เพื่อความสัมพันธ์ที่มั่นคงและอบอุ่นขึ้น",
        en: "Therapy and counselling that help people in relationships understand one another better, communicate more effectively, and navigate conflict constructively for a more secure and caring relationship.",
      },
    ],
    infoHeading: { th: "ให้บริการโดย", en: "Provided by" },
    infoLines: [
      { th: "นักจิตวิทยาคลินิก", en: "Clinical psychologists" },
      {
        th: "ผู้ได้รับการรับรองเป็นผู้ประกอบโรคศิลปะ",
        en: "licensed health professionals",
      },
      { th: "สาขาจิตวิทยาคลินิก", en: "in clinical psychology" },
    ],
    noteLines: [
      {
        th: "มีประสบการณ์ในการให้คำปรึกษา",
        en: "Experienced in counselling",
      },
      { th: "แบบคู่ ครอบครัว", en: "for couples and families" },
      {
        th: "เพื่อทางออกร่วมกันในความสัมพันธ์",
        en: "to support shared solutions in relationships",
      },
    ],
    durationLines: [{ th: "90 นาที", en: "90 mins" }],
    priceLines: ["3,500"],
    extra: {
      th: "เพิ่มเวลา 30 นาที/1,166 บาท",
      en: "Add 30 mins / 1,166 THB",
    },
  },
  {
    id: "card-3",
    slug: "psychological-assessment",
    iconKey: "consult3",
    icon: serviceCardIconMap.consult3,
    titlePrimary: {
      th: "การตรวจประเมินทางจิตวิทยา",
      en: "Psychological Assessment",
    },
    titleSecondary: {
      th: "(Psychological Assessment)",
      en: "Structured psychological evaluation",
    },
    details: [
      {
        th: "กระบวนการใช้แบบทดสอบและการสัมภาษณ์เพื่อทำความเข้าใจสภาพจิตใจ บุคลิกภาพ และการทำงานของความคิดอย่างเป็นระบบ เพื่อนำไปวางแผนการดูแลหรือพัฒนาต่อไป (ติดต่อมายด์บลูมเพื่อสอบถามค่าบริการ)",
        en: "A structured process using tests and interviews to understand mental health, personality, and cognitive functioning in order to guide future care or development planning. Please contact MindBloom for pricing details.",
      },
    ],
    infoHeading: { th: "เงื่อนไข", en: "Conditions" },
    infoLines: [
      {
        th: "ประเมินโดยนักจิตวิทยาคลินิก",
        en: "Assessed by clinical psychologists",
      },
      {
        th: "ผู้ได้รับการรับรองเป็นผู้ประกอบโรคศิลปะ",
        en: "who are licensed health professionals",
      },
      { th: "สาขาจิตวิทยาคลินิก", en: "in clinical psychology" },
    ],
    noteLines: [
      {
        th: "โดยต้องได้รับเอกสารส่งตัว/",
        en: "Requires referral documents",
      },
      {
        th: "ใบแพทย์สั่งประเมินเท่านั้น",
        en: "or a physician's order for assessment",
      },
      {
        th: "แจ้งผลประเมินแก่ต้นสังกัด/หน่วยงานส่งตัว",
        en: "Results can be reported to the referring organization",
      },
    ],
    durationLines: [{ th: "60-120 นาที", en: "60-120 mins" }],
    priceLines: ["3,250 -", "4,550"],
    extra: { th: "", en: "" },
  },
];
