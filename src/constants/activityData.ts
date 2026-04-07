import { images } from "./images";

type ActivityDetail = {
  id: string;
  title: string;
  image: string[];
  content: string[];
  youtubeId?: string;
  date?: string;
  text?: string;
  mainImage: string;
};

export const activityData: ActivityDetail[] = [
  {
    id: "1",
    title: "MindBloom Gallery",
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
      "นิทรรศการผลงานจากผู้ที่มีประสบการณ์ด้านสุขภาพจิต ที่ชวนให้สังคมมองโรคทางใจด้วยความเข้าใจ พร้อมกิจกรรมเวิร์กชอปและการสนับสนุนผลงานตลอด 3 สัปดาห์",
    ],
    date: "วันที่ 12 มกราคม 2025",
    text: "นิทรรศการผลงานจากผู้ที่มีประสบการณ์ด้านสุขภาพจิต",
  },
  {
    id: "2",
    title: "Mindbloom Opening and Exhibition",
    mainImage: images.act1,
    image: [
      images.act1,
      images.act2,
      images.act3,
      images.act4,
      images.act5,
      images.act6,
    ],
    content: ["ขอบคุณที่มาสร้างความอบอุ่นให้สวนดอกไม้แห่งนี้ด้วยกัน"],
    date: "วันที่ 26 มกราคม 2025",
    text: "ขอบคุณที่มาสร้างความอบอุ่นให้สวนดอกไม้แห่งนี้ด้วยกัน",
  },
  {
    id: "3",
    title: "To the unknown  ในเดือนแห่งความรัก มายด์บลูม",
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
      "พร้อมเปิดรับบริจาคหนังสือและจัดเวิร์กชอปดูแลใจ เพื่อส่งต่อความรักและกำลังใจ",
    ],
    date: "วันที่ 26 มกราคม 2025",
    text: "พาทุกคนไปทำความรู้จักอีกมุมหนึ่งของชีวิต ณ ทัณฑสถานหญิงกลาง",
  },
];
