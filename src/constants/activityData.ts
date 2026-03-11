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
    content: [
      "ขอบคุณที่มาสร้างความอบอุ่นให้สวนดอกไม้แห่งนี้ด้วยกัน",
    ],
    date: "วันที่ 26 มกราคม 2025",
    text: "ขอบคุณที่มาสร้างความอบอุ่นให้สวนดอกไม้แห่งนี้ด้วยกัน",
  },
];
