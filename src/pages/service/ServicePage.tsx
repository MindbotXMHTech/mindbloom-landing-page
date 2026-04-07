import { Link } from "react-router-dom";
import { svgs } from "../../constants/svgs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../i18n/LanguageProvider";
import type { LocalizedText } from "../../i18n/types";

type ClinicServiceBlock = {
  heading?: LocalizedText;
  paragraphs?: LocalizedText[];
  tags?: string[];
};

type ClinicServiceSection = {
  id: string;
  title: LocalizedText;
  summary: LocalizedText[];
  tags: string[];
  extraBlocks?: ClinicServiceBlock[];
  ctaLabel?: LocalizedText;
};

const concernTags: LocalizedText[] = [
  { th: "การงาน", en: "Work" },
  { th: "การเรียน", en: "Study" },
  { th: "ความคิด", en: "Thoughts" },
  { th: "ความสัมพันธ์", en: "Relationships" },
  { th: "อารมณ์", en: "Emotions" },
  { th: "การเงิน", en: "Finances" },
  { th: "เพื่อน", en: "Friends" },
  { th: "พฤติกรรม", en: "Behavior" },
  { th: "ซึมเศร้า", en: "Depression" },
  { th: "ครอบครัว", en: "Family" },
  { th: "สุขภาพ", en: "Health" },
  { th: "เรื่องเพศ", en: "Sexuality" },
  { th: "การดูแลตัวเอง", en: "Self-care" },
  { th: "อื่นๆ", en: "Others" },
];

const consultChannels = [
  {
    id: "onsite",
    icon: svgs.pinBlack,
    title: {
      th: "เข้ารับบริการที่คลินิก",
      en: "Visit the clinic in person",
    },
    detail: {
      th: "พบนักจิตวิทยาที่มายด์บลูม\nMRT สถานีบางขุนนนท์ ทางออก 4 (มีที่จอดรถบริการ)",
      en: "Meet a psychologist at MindBloom\nMRT Bang Khun Non Station, Exit 4 (parking available)",
    },
  },
  {
    id: "online",
    icon: svgs.videoBlack,
    title: {
      th: "รับบริการแบบออนไลน์",
      en: "Online sessions",
    },
    detail: {
      th: "พูดคุยกับนักจิตวิทยาผ่าน Zoom Meeting\nสามารถเข้ารับบริการได้จากสถานที่\nที่เป็นส่วนตัวและเหมาะสมต่อการสนทนา",
      en: "Talk with a psychologist via Zoom Meeting\nfrom a private and comfortable place\nthat feels suitable for conversation",
    },
  },
] as const;

const ourServiceOptions = [
  {
    id: "personal",
    targetId: "personal",
    icon: svgs.personBlack,
    title: {
      th: "บริการสำหรับบุคคล (Individual / Clinic)",
      en: "Services for Individuals (Individual / Clinic)",
    },
    detail: [
      {
        th: "พื้นที่ปลอดภัยสำหรับการดูแลด้านจิตใจ ให้บริการจิตบำบัด ให้คำปรึกษา การทดสอบทางจิตวิทยา",
        en: "A safe space for mental care, offering psychotherapy, counselling, and psychological assessment.",
      },
    ],
  },
  {
    id: "cooperate",
    targetId: "organization",
    icon: svgs.groupBlack,
    title: {
      th: "บริการสำหรับองค์กร (Corporate)",
      en: "Services for Organizations (Corporate)",
    },
    detail: [
      {
        th: "ให้บริการให้คำปรึกษารายบุคคล จัดอบรมและเวิร์คชอปด้านสุขภาพจิต ความเครียดจากการทำงาน ภาวะหมดไฟ การสื่อสาร การปฐมพยาบาลทางใจ การเพิ่ม soft skill ที่สำคัญกับการทำงาน",
        en: "We provide individual counselling, training, and workshops on mental health, workplace stress, burnout, communication, psychological first aid, and essential soft skills for work.",
      },
    ],
  },
] as const;

const serviceCards = [
  {
    id: "card-1",
    icon: svgs.consult1,
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
    durationLines: {
      th: ["60 นาที"],
      en: ["60 mins"],
    },
    priceLines: ["2,000"],
    extra: {
      th: "เพิ่มเวลา 30 นาที/1,000 บาท",
      en: "Add 30 mins / 1,000 THB",
    },
  },
  {
    id: "card-2",
    icon: svgs.consult2,
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
    durationLines: {
      th: ["90 นาที"],
      en: ["90 mins"],
    },
    priceLines: ["3,500"],
    extra: {
      th: "เพิ่มเวลา 30 นาที/1,166 บาท",
      en: "Add 30 mins / 1,166 THB",
    },
  },
  {
    id: "card-3",
    icon: svgs.consult3,
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
    durationLines: {
      th: ["60-120 นาที"],
      en: ["60-120 mins"],
    },
    priceLines: ["3,250 -", "4,550"],
    extra: {
      th: "",
      en: "",
    },
  },
] as const;

const companyService = [
  {
    id: "productivity",
    icon: svgs.ideaLightGreen,
    title: {
      th: "เพิ่มพลังในการทำงานอย่างยั่งยืน",
      en: "Sustainably improve workplace energy",
    },
    detail: {
      th: "เมื่อใจได้รับการดูแลอย่างอ่อนโยน พนักงานจะทำงานได้อย่างมีสมาธิ มีพลัง และเติบโตอย่างเป็นธรรมชาติ",
      en: "When people feel emotionally cared for, they can work with greater focus, energy, and natural growth.",
    },
  },
  {
    id: "talent",
    icon: svgs.peopleGreen,
    title: {
      th: "สร้างความผูกพันที่ดีในองค์กร",
      en: "Build stronger organizational connection",
    },
    detail: {
      th: "การใส่ใจ Well-being ช่วยให้คนรู้สึกมีคุณค่า เชื่อมโยงกันมากขึ้น และอยากอยู่เติบโตไปด้วยกัน",
      en: "Prioritizing wellbeing helps people feel valued, more connected, and more motivated to grow together.",
    },
  },
  {
    id: "brand",
    icon: svgs.starGreen,
    title: {
      th: "เสริมภาพลักษณ์องค์กรที่ใส่ใจผู้คน",
      en: "Strengthen a people-centered employer brand",
    },
    detail: {
      th: "องค์กรที่ดูแลใจคน สะท้อนความอบอุ่นและความเข้าใจ สร้างความน่าเชื่อถือและความไว้ใจ",
      en: "Organizations that care for people reflect warmth and empathy, building credibility and trust.",
    },
  },
] as const;

const importantDetails = [
  {
    id: 1,
    title: {
      th: "76% ของพนักงานกำลังเผชิญความเครียด",
      en: "76% of employees are experiencing stress",
    },
    description: {
      th: "โอกาสขององค์กรในการสร้างพื้นที่ที่ช่วยให้คนทำงานได้อย่างสมดุลและยั่งยืน",
      en: "An opportunity for organizations to create spaces that support balanced and sustainable work.",
    },
    source: "Gallup, 2023",
  },
  {
    id: 2,
    title: {
      th: "Engagement เพิ่มขึ้นได้ถึง 2 เท่า",
      en: "Engagement can increase up to 2x",
    },
    description: {
      th: "เมื่อพนักงานรู้สึกได้รับการดูแลและเข้าใจ พลังในการทำงานก็เติบโตตามไปด้วย",
      en: "When employees feel cared for and understood, their energy for work grows with them.",
    },
    source: "Deloitte, 2023",
  },
  {
    id: 3,
    title: {
      th: "$1 Trillion คือศักยภาพที่รอการฟื้นคืน",
      en: "$1 trillion in productivity can be recovered",
    },
    description: {
      th: "การดูแลสุขภาพใจช่วยเปลี่ยนต้นทุนที่มองไม่เห็น ให้กลายเป็นพลังขององค์กร",
      en: "Mental wellbeing support can turn hidden costs into organizational strength.",
    },
    source: "WHO, 2023",
  },
  {
    id: 4,
    title: {
      th: "ทุก 1 การลงทุน สร้างผลลัพธ์กลับมา 4 เท่า",
      en: "Every 1 investment can return 4x",
    },
    description: {
      th: "Mental Health ไม่ใช่ค่าใช้จ่าย แต่คือการลงทุนเพื่อการเติบโตอย่างยั่งยืน",
      en: "Mental health is not just a cost. It is an investment in sustainable growth.",
    },
    source: "WHO, 2021",
  },
] as const;

const clinicServiceSections: ClinicServiceSection[] = [
  {
    id: "assessment",
    title: {
      th: "Mental Health Assessment",
      en: "Mental Health Assessment",
    },
    summary: [
      {
        th: "Mental Health Screening",
        en: "Mental Health Screening",
      },
      {
        th: "สุขภาพจิตมีบทบาทสำคัญอย่างยิ่งต่อประสิทธิภาพการทำงานโดยรวมและการทำงานร่วมกันเป็นทีม การดูแลสุขภาพจิตของพนักงานไม่เพียงแต่ช่วยให้องค์กรสามารถให้การช่วยเหลือและสนับสนุนได้ทันท่วงที แต่ยังช่วยในการกำหนดนโยบายที่ส่งเสริมสภาพแวดล้อมการทำงานที่ดีต่อสุขภาพและมีประสิทธิภาพมากขึ้น",
        en: "Mental health plays a critical role in overall performance and teamwork. Supporting employee mental health helps organizations provide timely care while also shaping healthier and more effective workplace policies.",
      },
      {
        th: "มายด์บลูมให้บริการตรวจคัดกรองสุขภาพจิตที่สำคัญเบื้องต้นในประเด็นดังนี้",
        en: "MindBloom provides preliminary screening in the following key areas:",
      },
    ],
    tags: [
      "Mental Health Indicator",
      "Anxiety Level",
      "Burnout",
      "Stress Level",
      "Depression Level",
    ],
    extraBlocks: [
      {
        heading: {
          th: "Psychological Assessment",
          en: "Psychological Assessment",
        },
        paragraphs: [
          {
            th: "การประเมินทางจิตวิทยาเป็นกระบวนการที่ใช้เครื่องมือเฉพาะทางจิตวิทยา เพื่อทำความเข้าใจสุขภาพจิต ความสามารถทางปัญญา บุคลิกภาพ ภาวะอารมณ์ของแต่ละบุคคล",
            en: "Psychological assessment uses specialized tools to better understand each person's mental health, cognitive abilities, personality, and emotional state.",
          },
          {
            th: "มายด์บลูมให้บริการตรวจประเมินทางจิตวิทยาที่สำคัญต่อการทำงานในประเด็นดังนี้",
            en: "MindBloom also offers workplace-relevant psychological assessments in the following areas:",
          },
        ],
        tags: [
          "Resilience Quotient",
          "Cognitive Emotion Regulation Styles",
          "Personality Trait",
        ],
      },
    ],
  },
  {
    id: "counselling",
    title: {
      th: "Mental Health Counselling",
      en: "Mental Health Counselling",
    },
    summary: [
      { th: "", en: "" },
      {
        th: "การให้คำปรึกษาด้านสุขภาพจิตช่วยให้พนักงานจัดการกับความเครียด ปัญหาทางอารมณ์ และความกดดันทางจิตใจที่เกี่ยวข้องกับการทำงานและชีวิตประจำวัน ให้บริการโดยนักจิตวิทยาคลินิกที่ยึดถือมาตรฐานทางวิชาชีพรวมถึงเรื่องการรักษาความลับและความเป็นส่วนตัว",
        en: "Mental health counselling helps employees navigate stress, emotional difficulties, and psychological pressure connected to both work and daily life. Sessions are provided by clinical psychologists who follow professional standards, confidentiality, and privacy practices.",
      },
      {
        th: "ประเด็นในการพูดคุย เช่น",
        en: "Topics may include:",
      },
    ],
    tags: [
      "Burnout",
      "Anxiety",
      "Work life balance",
      "Emotional regulation",
      "Interpersonal difficulties",
    ],
    extraBlocks: [
      {
        paragraphs: [
          {
            th: "เมื่อความตึงเครียดและความกดดันในใจคลี่คลายลง บุคคลจะมีสมดุลการทำงาน ยืดหยุ่นในการปรับตัวแก้ปัญหา และนำไปสู่การทำงานอย่างมีประสิทธิภาพอย่างยั่งยืน",
            en: "When internal pressure begins to ease, people can regain balance at work, adapt more flexibly, and solve problems more effectively over time.",
          },
        ],
      },
    ],
  },
  {
    id: "workshop",
    title: {
      th: "MindBloom Wellbeing Workshop",
      en: "MindBloom Wellbeing Workshop",
    },
    summary: [
      { th: "", en: "" },
      {
        th: "เวิร์กชอปโดยนักจิตวิทยาคลินิกที่บูรณาการหลักจิตวิทยา จิตวิทยาเชิงบวกและศิลปะ ออกแบบให้เหมาะสมกับความต้องการของแต่ละองค์กร แบ่งออกเป็นสามหมวดหมู่หลัก แต่ละหมวดออกแบบมาเพื่อสนับสนุนด้านต่างๆ ของสุขภาวะทางจิต การทำงานร่วมกันอย่างมีความสุข และสมดุลชีวิตที่ลงตัว",
        en: "Workshops led by clinical psychologists that combine psychology, positive psychology, and art. Each workshop is tailored to the needs of each organization and grouped into three main categories supporting mental wellbeing, healthy collaboration, and balanced living.",
      },
    ],
    tags: [
      "Team & Leadership",
      "Preventive & Awareness",
      "Self-Awareness & Personal Growth",
    ],
    ctaLabel: {
      th: "ดูรายละเอียด",
      en: "View details",
    },
  },
];

function ServicePage() {
  const { t } = useLanguage();
  const [openClinicSections, setOpenClinicSections] = useState<string[]>([
    "assessment",
    "counselling",
    "workshop",
  ]);

  const toggleClinicSection = (sectionId: string) => {
    setOpenClinicSections((current) =>
      current.includes(sectionId)
        ? current.filter((id) => id !== sectionId)
        : [...current, sectionId],
    );
  };

  return (
    <div className="lg:mt-14.75 w-full max-w-5xl px-4 s:px-6 m:px-8 pb-24 flex flex-col items-center">
      <motion.section className="mb-9.5">
        <div className="mt-8 grid w-full max-w-2xl grid-cols-1 gap-4 m:grid-cols-2">
          {ourServiceOptions.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="rounded-3xl border border-[#E5DACF] bg-white p-6 flex flex-col gap-3 min-w-81.5"
            >
              <p className="rf-body flex items-center gap-2 font-semibold text-neutral-black">
                <img src={service.icon} alt="" className="h-6 w-6 shrink-0" />
                {t(service.title)}
              </p>
              <p className="rf-small text-neutral-grey">
                {service.detail.map((line) => t(line)).join(" ")}
              </p>
              <div className="mt-auto pt-4 flex justify-center">
                <a
                  href={`#${service.targetId}`}
                  className="rf-body text-neutral-black rounded-3xl px-4 py-2 border border-neutral-black w-fit"
                >
                  {t({ th: "ดูรายละเอียด", en: "View details" })}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.5,
          ease: "easeOut" as const,
        }}
        className="w-full max-w-212.5 flex flex-col items-center"
        id="personal"
      >
        <h1 className="rf-h4 text-center text-neutral-black">
          {t({ th: "ให้คำปรึกษาในด้านต่าง ๆ", en: "Support for a range of concerns" })}
        </h1>

        <div className="mt-8 flex max-w-145 flex-wrap justify-center gap-2.5">
          {concernTags.map((tag) => (
            <span
              key={tag.en}
              className="rf-small rounded-2xl bg-[#CACFC3] px-4 py-2 leading-none text-white"
            >
              {t(tag)}
            </span>
          ))}
        </div>

        <h2 className="mt-9.5 text-xl font-bold text-center">
          {t({ th: "รูปแบบการบริการ", en: "Service formats" })}
        </h2>
        <p className="mt-4 rf-body font-normal text-center text-neutral-black">
          {t({
            th: "มายด์บลูม เปิดให้บริการ",
            en: "MindBloom is open for appointments",
          })}
        </p>
        <div className="mt-4 flex flex-col items-center gap-1.5">
          <div className="flex w-full max-w-67.5 items-center justify-center gap-2 s:justify-start">
            <img src={svgs.calendarBlack} alt="calendar" className="h-4 w-4" />
            <p className="rf-body text-center text-neutral-black s:text-left">
              {t({
                th: "วันจันทร์-ศุกร์ เวลา 17.00-20.00 น.",
                en: "Monday-Friday, 5:00 PM-8:00 PM",
              })}
            </p>
          </div>

          <div className="flex w-full max-w-67.5 items-center justify-center gap-2 s:justify-start">
            <img src={svgs.calendarBlack} alt="calendar" className="h-4 w-4" />
            <p className="rf-body text-center text-neutral-black s:text-left">
              {t({
                th: "วันเสาร์-อาทิตย์ เวลา 10.00-20.00 น.",
                en: "Saturday-Sunday, 10:00 AM-8:00 PM",
              })}
            </p>
          </div>
        </div>

        <div className="my-6 h-px w-full bg-[#dbc8b9]" />

        <p className="rf-body text-center font-bold text-neutral-grey">
          {t({
            th: "ให้บริการตามระบบนัดหมายล่วงหน้า",
            en: "Sessions are available by appointment",
          })}
        </p>
        <p className="rf-body text-center text-neutral-grey">
          {t({
            th: "โดยท่านสามารถเลือกรูปแบบการเข้ารับบริการได้ 2 รูปแบบ ในอัตราค่าบริการเดียวกัน",
            en: "You can choose between two service formats at the same rate.",
          })}
        </p>

        <div className="mt-8 grid w-full max-w-162 grid-cols-1 gap-4 m:grid-cols-2">
          {consultChannels.map((channel, index) => (
            <motion.article
              key={channel.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="rounded-3xl border border-[#E5DACF] bg-white p-4 "
            >
              <p className="rf-body flex items-center gap-2 font-semibold text-neutral-black translate-x-2">
                <img src={channel.icon} alt="" className="h-6 w-6" />
                {t(channel.title)}
              </p>
              <p className="mt-2 whitespace-pre-line rf-small text-neutral-grey">
                {t(channel.detail)}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <section className="mt-9.5 w-full flex flex-col items-center">
        <h2 className="text-xl font-bold text-neutral-black text-center">
          {t({ th: "บริการของมายด์บลูม", en: "MindBloom services" })}
        </h2>
        <p className="mt-6 rf-small text-center text-neutral-grey">
          {t({
            th: "คลินิกมายด์บลูมให้บริการการให้คำปรึกษาด้านสุขภาพจิต และการตรวจประเมินทางจิตวิทยา",
            en: "MindBloom Clinic offers mental health counselling and psychological assessment services.",
          })}
        </p>
        <p className="rf-small text-center text-neutral-grey">
          {t({
            th: "โดยนักจิตวิทยาคลินิก ผู้ได้รับอนุญาตเป็นผู้ประกอบโรคศิลปะสาขาจิตวิทยาคลินิก",
            en: "All services are provided by licensed clinical psychologists.",
          })}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 l:grid-cols-3 items-center justify-items-center l:justify-items-stretch w-full">
          {serviceCards.map((card, index) => (
            <motion.article
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.25,
                ease: "easeOut" as const,
              }}
              key={card.id}
              className="flex h-full flex-col rounded-3xl border border-[#ebdfd5] bg-white p-6 min-w-69.25 w-full max-w-87.5"
            >
              <div className="flex justify-center">
                <img src={card.icon} alt="" className="h-32 w-auto" />
              </div>

              <h3 className="mt-6 min-h-18 text-center text-[20px] font-semibold leading-tight text-[#55748f] l:min-h-20">
                {t(card.titlePrimary)}
                <br />
                <span className="text-center text-[16px] font-semibold leading-tight text-[#55748f]">
                  {t(card.titleSecondary)}
                </span>
              </h3>

              <p className="mt-6 text-center text-[16px] font-bold text-neutral-grey">
                {t({ th: "รายละเอียด", en: "Details" })}
              </p>
              <div className="mt-4 min-h-20 text-center rf-body text-neutral-grey l:min-h-44">
                {card.details.map((line, lineIndex) => (
                  <p key={`${card.id}-detail-${lineIndex}`}>{t(line)}</p>
                ))}
              </div>

              <p className="mt-6 text-center text-[16px] font-bold text-neutral-grey">
                {t(card.infoHeading)}
              </p>
              <div className="mt-4 min-h-23 text-center rf-body text-neutral-grey">
                {card.infoLines.map((line, lineIndex) => (
                  <p key={`${card.id}-info-${lineIndex}`}>{t(line)}</p>
                ))}
              </div>

              <div className="mt-6 min-h-16 text-center rf-body text-neutral-grey">
                {card.noteLines.map((line, lineIndex) => (
                  <p key={`${card.id}-note-${lineIndex}`}>{t(line)}</p>
                ))}
              </div>

              <div className="relative mt-6 h-28 w-full text-[#e5aba4]">
                <div className="absolute top-0 left-6 max-w-32.5 s:max-w-41.25">
                  <p className="text-[40px] s:text-[32px] font-bold leading-tight wrap-break-word">
                    {t({
                      th: card.durationLines.th[0],
                      en: card.durationLines.en[0],
                    })}
                  </p>
                </div>
                <img
                  src={svgs.pinkLine}
                  width={108}
                  height={100}
                  className="absolute inset-0 m-auto"
                />
                <div className="absolute bottom-0 right-6 flex flex-col items-end">
                  {card.priceLines.map((line) => (
                    <p
                      key={line}
                      className="whitespace-nowrap text-[30px] s:text-[28px] leading-none"
                    >
                      {line}
                    </p>
                  ))}
                  <p className="leading-none text-base">
                    {t({ th: "บาท", en: "THB" })}
                  </p>
                </div>
              </div>

              <p className="mt-4 h-11 text-center text-[14px] font-semibold text-[#e2a39d]">
                {t(card.extra)}
              </p>

              <div className="mt-auto pt-3 flex justify-center">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2, delay: 0.15, ease: "easeOut" }}
                  href="https://line.me/R/ti/p/@mindbloom"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#6c8aa4] px-5 py-2 text-[16px] font-semibold text-[#6c8aa4]"
                >
                  {t({
                    th: "นัดหมาย/สอบถามข้อมูลเพิ่มเติม",
                    en: "Book / Contact for details",
                  })}
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="bg-[#C7A491] w-full h-px my-9.5" />

      <section className="mt-9.5 w-full" id="organization">
        <p className="rf-title text-center font-bold">
          {t({
            th: "เราช่วยองค์กรของคุณได้อย่างไร?",
            en: "How can we support your organization?",
          })}
        </p>
        <div className="grid grid-cols-1 s:grid-cols-2 m:grid-cols-3 gap-6 mt-6">
          {companyService.map((com, index) => (
            <motion.article
              key={com.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="rounded-3xl border border-[#E5DACF] bg-white p-4 flex flex-col items-center gap-4 text-center justify-center"
            >
              <img src={com.icon} alt="" className="h-32 w-32" />
              <p className="rf-body flex items-center gap-2 font-semibold text-neutral-black">
                {t(com.title)}
              </p>
              <p className="whitespace-pre-line rf-small text-neutral-grey">
                {t(com.detail)}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-9.5 w-full flex flex-col items-center gap-6">
        <p className="rf-title text-center">
          {t({
            th: "ทำไม Mental Wellbeing ถึงสำคัญกับธุรกิจ",
            en: "Why mental wellbeing matters for business",
          })}
        </p>
        <div className="grid grid-cols-1 m:grid-cols-2 items-center gap-6 max-w-225">
          {importantDetails.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className="rounded-3xl w-full min-h-28.75 bg-[#CACFC3] px-4 py-2 flex flex-col items-center gap-4 text-center justify-center"
            >
              <p className="flex items-center gap-2 font-bold text-white text-base">
                {t(item.title)}
              </p>
              <p className="rf-body font-light text-white">
                {t(item.description)}
              </p>
              <p className="font-light rf-body text-white">Source: {item.source}</p>
            </motion.article>
          ))}
        </div>
        <p className="font-light rf-body text-neutral-black text-center">
          <strong>
            {t({
              th: "เมื่อคนในองค์กรรู้สึกดี องค์กรก็เติบโตได้ดีตามไปด้วย",
              en: "When people in an organization feel well, the organization grows better too.",
            })}
          </strong>
          <br />
          {t({
            th: "ทั้งในด้าน Productivity ความผูกพัน และบรรยากาศการทำงานที่เอื้อต่อกัน",
            en: "Across productivity, engagement, and a more supportive workplace atmosphere.",
          })}
        </p>
      </section>

      <section className="mt-9.5 w-full flex flex-col items-center gap-6">
        <p className="rf-title text-center font-bold">
          {t({ th: "บริการสำหรับองค์กร", en: "Services for organizations" })}
        </p>
        <div className="w-full max-w-225 rounded-3xl px-4 py-6 s:px-6 m:px-10 m:py-8">
          {clinicServiceSections.map((section, index) => {
            const isOpen = openClinicSections.includes(section.id);

            return (
              <article
                key={section.id}
                className={`relative ${index > 0 ? "border-t border-[#E6D9CC] pt-6" : ""} ${
                  index < clinicServiceSections.length - 1 ? "pb-6" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleClinicSection(section.id)}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <div className="pr-4">
                    <h3 className="rf-body font-bold text-neutral-black">
                      {t(section.title)}
                    </h3>
                  </div>
                  <span
                    className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center text-neutral-grey transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 14L12 8L18 14"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 space-y-4 pr-2">
                        <div className="space-y-1.5">
                          {section.summary.map((paragraph, paragraphIndex) => (
                            <p
                              key={`${section.id}-summary-${paragraphIndex}`}
                              className={`${paragraphIndex === 0 ? "rf-body font-bold text-neutral-grey" : "rf-body text-neutral-grey"} `}
                            >
                              {t(paragraph)}
                            </p>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {section.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[#E5DACF] px-3 py-1.5 text-[13px] text-neutral-grey"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {section.extraBlocks?.map((block, blockIndex) => (
                          <div
                            key={`${section.id}-block-${blockIndex}`}
                            className="space-y-3"
                          >
                            {block.heading ? (
                              <h4 className="rf-body font-bold text-neutral-grey">
                                {t(block.heading)}
                              </h4>
                            ) : null}

                            <div className="space-y-1.5">
                              {block.paragraphs?.map((paragraph, paragraphIndex) => (
                                <p
                                  key={`${section.id}-block-${blockIndex}-paragraph-${paragraphIndex}`}
                                  className="rf-body text-neutral-grey"
                                >
                                  {t(paragraph)}
                                </p>
                              ))}
                            </div>

                            {block.tags?.length ? (
                              <div className="flex flex-wrap gap-2">
                                {block.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rf-small rounded-full bg-[#E5DACF] px-3 py-1.5 text-neutral-grey"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        ))}

                        {section.ctaLabel ? (
                          <div className="pt-2 flex justify-center">
                            <Link
                              to={"/service/workshop"}
                              className="rounded-full bg-white px-5 py-2 text-[15px] font-semibold text-neutral-grey shadow-[0_8px_20px_rgba(93,83,76,0.12)]"
                            >
                              {t(section.ctaLabel)}
                            </Link>
                          </div>
                        ) : null}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
          <div className="bg-[#E5DACF] w-full h-px my-9.5" />
        </div>
      </section>
    </div>
  );
}

export default ServicePage;
