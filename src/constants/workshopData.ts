import type { LocalizedText } from "../i18n/types";
import ws1 from "../assets/images/ws1.png";
import ws2 from "../assets/images/ws2.png";
import ws3 from "../assets/images/ws3.png";
import ws4 from "../assets/images/ws4.png";
import ws5 from "../assets/images/ws5.png";
import ws6 from "../assets/images/ws6.png";
import ws7 from "../assets/images/ws7.png";
import ws8 from "../assets/images/ws8.png";
import ws9 from "../assets/images/ws9.png";
import ws10 from "../assets/images/ws10.png";
import ws11 from "../assets/images/ws11.png";
import ws12 from "../assets/images/ws12.png";
import ws13 from "../assets/images/ws13.png";
import ws14 from "../assets/images/ws14.png";
import ws15 from "../assets/images/ws15.png";
import ws16 from "../assets/images/ws16.png";
import ws17 from "../assets/images/ws17.png";
import ws18 from "../assets/images/ws18.png";
import ws19 from "../assets/images/ws19.png";
import ws20 from "../assets/images/ws20.png";
import ws21 from "../assets/images/ws21.png";

export type PublicWorkshopCategory = {
  id: string;
  slug: string;
  title: LocalizedText;
  subtitle: LocalizedText;
};

export type PublicWorkshopProgram = {
  id: string;
  slug: string;
  categorySlug: string;
  title: LocalizedText;
  summary: LocalizedText;
  content: LocalizedText[];
  galleryImages: string[];
  galleryStyle: "square" | "landscape";
  showCta: boolean;
};

export const workshopPageSubtitle = {
  th: "พื้นที่เล็ก ๆ ที่ให้คุณกลับมาโอบกอดตัวเอง",
  en: "A gentle space for reconnecting with yourself",
} as const;

export const workshopCtaLabel = {
  th: "นัดหมาย/สอบถามข้อมูลเพิ่มเติม",
  en: "Book / Contact for details",
} as const;

export const workshopCategoriesFallback: PublicWorkshopCategory[] = [
  {
    id: "preventive-awareness",
    slug: "preventive-and-awareness",
    title: {
      th: "Preventive & Awareness",
      en: "Preventive & Awareness",
    },
    subtitle: {
      th: "สร้างความตระหนักรู้ และป้องกันก่อนจะสาย",
      en: "Build awareness and support prevention early",
    },
  },
  {
    id: "team-leadership",
    slug: "team-and-leadership",
    title: {
      th: "Team & Leadership",
      en: "Team & Leadership",
    },
    subtitle: {
      th: "เสริมพลังทีม และพัฒนาภาวะผู้นำที่ใส่ใจ",
      en: "Strengthen teams and nurture caring leadership",
    },
  },
  {
    id: "self-awareness-growth",
    slug: "self-awareness-and-personal-growth",
    title: {
      th: "Self-Awareness & Personal Growth",
      en: "Self-Awareness & Personal Growth",
    },
    subtitle: {
      th: "ค้นพบตัวเอง พร้อมเติบโตจากข้างใน",
      en: "Discover yourself and grow from within",
    },
  },
];

export const workshopProgramsFallback: PublicWorkshopProgram[] = [
  {
    id: "pfa",
    slug: "psychological-first-aid",
    categorySlug: "preventive-and-awareness",
    title: {
      th: "Psychological First Aid (PFA)",
      en: "Psychological First Aid (PFA)",
    },
    summary: {
      th: "เรียนรู้หลักการให้ความช่วยเหลือเบื้องต้นทางจิตใจในภาวะวิกฤติ เพื่อเสริมทักษะการดูแลใจตนเองและผู้อื่นในช่วงวิกฤตทางใจ",
      en: "Learn the principles of psychological first aid in times of crisis, with practical ways to care for yourself and others during emotionally difficult moments.",
    },
    content: [
      {
        th: "เรียนรู้หลักการ PFA ที่นำไปใช้ได้จริง ช่วยป้องกันปัญหาสุขภาพจิต รักษาศักยภาพบุคลากร และสร้างบรรยากาศปลอดภัยทางใจในองค์กร พร้อมทักษะรับมือความเครียดอย่างเหมาะสม โดยนักจิตวิทยาคลินิกผู้เชี่ยวชาญด้านสุขภาพจิต",
        en: "This workshop offers practical PFA skills that help prevent mental health difficulties, sustain team capacity, and build psychologically safe workplaces, guided by clinical psychologists with mental health expertise.",
      },
    ],
    galleryImages: [ws1, ws2, ws3, ws4, ws5, ws6],
    galleryStyle: "square",
    showCta: false,
  },
  {
    id: "stress-management",
    slug: "stress-management",
    categorySlug: "preventive-and-awareness",
    title: {
      th: "Stress Management",
      en: "Stress Management",
    },
    summary: {
      th: "เรียนรู้และฝึกทักษะการจัดการความเครียดและอารมณ์แง่ลบที่รบกวนศักยภาพในการทำงานและการใช้ชีวิต โดยออกแบบและดำเนินกิจกรรมโดยนักจิตวิทยาคลินิก",
      en: "Learn and practice skills for managing stress and difficult emotions that affect work performance and daily life, through activities designed and facilitated by clinical psychologists.",
    },
    content: [
      {
        th: "เวิร์กชอปนี้มุ่งเสริมสร้างความยืดหยุ่นทางจิตใจ (Resilience) และสุขภาวะที่ยั่งยืน ผ่านทักษะการจัดการความเครียดตามหลักจิตวิทยา ไม่เพียงช่วยบรรเทาความเครียดในระยะสั้น แต่ยังช่วยเสริมสร้างศักยภาพภายใน เพื่อให้ผู้เข้าร่วมสามารถรับมือกับแรงกดดันและความท้าทายได้อย่างมีประสิทธิภาพ ทั้งในบริบทของการทำงานและชีวิตประจำวัน",
        en: "This workshop strengthens resilience and sustainable wellbeing through evidence-based stress management skills. It supports not only short-term relief, but also long-term inner capacity for handling pressure and challenges effectively at work and in life.",
      },
    ],
    galleryImages: [ws13, ws14, ws15],
    galleryStyle: "landscape",
    showCta: true,
  },
  {
    id: "creative-team-communication",
    slug: "creative-work-for-team-communication",
    categorySlug: "team-and-leadership",
    title: {
      th: "Creative work for team communication",
      en: "Creative work for team communication",
    },
    summary: {
      th: "มุ่งเน้นการทำความเข้าใจ ทั้งความเหมือนและความแตกต่างของแต่ละบุคคล เพื่อส่งเสริมการสื่อสารที่ตั้งอยู่บนความเข้าใจและความเห็นอกเห็นใจกัน",
      en: "Focused on understanding both similarities and differences between people in order to encourage communication grounded in empathy and mutual understanding.",
    },
    content: [
      {
        th: "กระบวนการที่ออกแบบอย่างสร้างสรรค์นี้ช่วยพัฒนาการสื่อสารเชิงบวกในทีม โดยกระตุ้นทั้งมิติของความคิดและอารมณ์ ภายใต้การดูแลของนักจิตวิทยาคลินิก เพื่อเสริมสร้างความเข้าใจระหว่างกัน ลดความขัดแย้ง และสร้างพลังบวกในการทำงานร่วมกันอย่างมีประสิทธิภาพและกลมกลืน",
        en: "This creatively designed process supports more positive team communication by engaging both thinking and emotional awareness, under the guidance of clinical psychologists, to reduce conflict and strengthen collaborative energy.",
      },
    ],
    galleryImages: [ws7, ws8, ws9],
    galleryStyle: "landscape",
    showCta: false,
  },
  {
    id: "communication-skill",
    slug: "communication-skill",
    categorySlug: "team-and-leadership",
    title: {
      th: "Communication skill",
      en: "Communication skill",
    },
    summary: {
      th: "เวิร์กช็อปเพื่อพัฒนาทักษะการสื่อสารอย่างมีประสิทธิภาพ",
      en: "A workshop for building effective communication skills",
    },
    content: [
      {
        th: "ผู้เข้าร่วมจะได้ฝึกทักษะการฟังและการสื่อสารอย่างชัดเจน พร้อมทั้งเรียนรู้การสื่อสารด้วยความเข้าใจ เห็นอกเห็นใจ และความคิดสร้างสรรค์ เวิร์กช็อปนี้ช่วยป้องกันความขัดแย้ง เสริมสร้างการทำงานร่วมกัน และสนับสนุนการทำงานเป็นทีมอย่างราบรื่น ภายใต้บรรยากาศที่ปลอดภัยทางจิตใจ (Psychological Safety) ในองค์กร",
        en: "Participants practice listening and communicating clearly while learning to communicate with empathy, understanding, and creativity. The workshop helps prevent conflict, strengthen collaboration, and support smoother teamwork within a psychologically safe environment.",
      },
    ],
    galleryImages: [ws10, ws11, ws12],
    galleryStyle: "landscape",
    showCta: true,
  },
  {
    id: "art-of-me",
    slug: "art-of-me-self-awareness-discovery",
    categorySlug: "self-awareness-and-personal-growth",
    title: {
      th: "Art of me : self-awareness discovery",
      en: "Art of me : self-awareness discovery",
    },
    summary: {
      th: "กระบวนการที่ผสานจิตวิทยาและศิลปะ โดยมีนักจิตวิทยาคลินิกเป็นผู้นำทาง",
      en: "A process that blends psychology and art, guided by clinical psychologists.",
    },
    content: [
      {
        th: "เป็นเวิร์กช็อปที่จะชวนผู้เข้าร่วมให้ได้สำรวจโลกภายในของตนเอง พัฒนาความตระหนักรู้ทางอารมณ์ และค้นพบมิติที่ลึกซึ้งของการยอมรับตนเอง และกระบวนการที่อ่อนโยนนี้จะช่วยส่งเสริมสุขภาวะทางอารมณ์และการเติบโตจากภายใน ทำให้บุคคลสามารถใช้ชีวิตและเชื่อมโยงกับผู้อื่นได้อย่างสมดุลและเป็นธรรมชาติยิ่งขึ้น",
        en: "This workshop invites participants to explore their inner world, deepen emotional awareness, and discover more profound dimensions of self-acceptance. The gentle process supports emotional wellbeing and inner growth, helping people live and connect with others in a more balanced and natural way.",
      },
    ],
    galleryImages: [ws19, ws20, ws21],
    galleryStyle: "landscape",
    showCta: false,
  },
  {
    id: "mindful-flower-arrangements",
    slug: "mindful-flower-arrangements-and-self-exploration",
    categorySlug: "self-awareness-and-personal-growth",
    title: {
      th: "Mindful flower arrangements & Self exploration",
      en: "Mindful flower arrangements & Self exploration",
    },
    summary: {
      th: "ค้นพบตนเองผ่านการจัดดอกไม้ภายใต้กระบวนการทางจิตวิทยา",
      en: "Discover yourself through flower arrangement within a psychological process",
    },
    content: [
      {
        th: "ดอกไม้ไม่ได้เป็นเพียงความงดงาม แต่ยังเป็นสื่อกลางที่เชื่อมโยงสู่โลกภายใน ชวนให้ผู้เข้าร่วมได้สำรวจและทำความเข้าใจตนเองอย่างอ่อนโยน ผ่านกระบวนการจัดดอกไม้ที่ผสานทั้งความตั้งใจและความเป็นธรรมชาติ ซึ่งกิจกรรมนี้จะช่วยส่งเสริมความสมดุลทางอารมณ์ ลดความตึงเครียด และเปิดพื้นที่ให้เกิดการเรียนรู้และสะท้อนความเข้าใจตนเองอย่างลึกซึ้ง",
        en: "Flowers are not only beautiful. They can also become a bridge to the inner world, inviting participants to explore and understand themselves gently through a process that combines intention and natural flow. This activity supports emotional balance, reduces tension, and creates room for deep reflection and learning.",
      },
    ],
    galleryImages: [ws16, ws17, ws18],
    galleryStyle: "landscape",
    showCta: true,
  },
];
