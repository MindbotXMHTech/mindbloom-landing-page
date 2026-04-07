import { Link } from "react-router-dom";
import { svgs } from "../../constants/svgs";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";

const concernTags = [
  "การงาน",
  "การเรียน",
  "ความคิด",
  "ความสัมพันธ์",
  "อารมณ์",
  "การเงิน",
  "เพื่อน",
  "พฤติกรรม",
  "ซึมเศร้า",
  "ครอบครัว",
  "สุขภาพ",
  "เรื่องเพศ",
  "การดูแลตัวเอง",
  "อื่นๆ",
];

const consultChannels = [
  {
    id: "onsite",
    icon: svgs.pinBlack,
    title: "เข้ารับบริการที่คลินิก",
    detail:
      "พบนักจิตวิทยาที่มายด์บลูม \n MRT สถานีบางขุนนนท์ ทางออก 4 (มีที่จอดรถบริการ)",
  },
  {
    id: "online",
    icon: svgs.videoBlack,
    title: "รับบริการแบบออนไลน์",
    detail:
      "พูดคุยกับนักจิตวิทยาผ่าน Zoom Meeting\nสามารถเข้ารับบริการได้จากสถานที่\nที่เป็นส่วนตัวและเหมาะสมต่อการสนทนา",
  },
];

const ourServiceOptions = [
  {
    id: "personal",
    targetId: "personal",
    icon: svgs.personBlack,
    title: "บริการสำหรับบุคคล (Individual / Clinic)",
    detail: [
      "พื้นที่ปลอดภัยสำหรับการดูแลด้านจิตใจ ให้บริการจิตบำบัด ให้คำปรึกษา การทดสอบทางจิตวิทยา",
    ],
  },
  {
    id: "cooperate",
    targetId: "organization",
    icon: svgs.groupBlack,
    title: "บริการสำหรับองค์กร (Corporate)",
    detail: [
      "ให้บริการให้คำปรึกษารายบุคคล จัดอบรมและเวิร์คชอปด้านสุขภาพจิต ความเครียดจากการทำงาน ภาวะหมดไฟ การสื่อสาร การปฐมพยาบาลทางใจ การเพิ่ม soft skill ที่สำคัญกับการทำงาน",
    ],
  },
];

const serviceCards = [
  {
    id: "card-1",
    icon: svgs.consult1,
    titleTh: "จิตบำบัด ให้คำปรึกษารายบุคคล",
    titleEn: "(Individual Psychotherapy/ Counselling)",
    details: [
      "การพูดคุยแบบตัวต่อตัวกับนักจิตวิทยา",
      "เพื่อทำความเข้าใจความคิด อารมณ์ และพฤติกรรมของตนเองอย่างลึกซึ้ง",
      "พร้อมเรียนรู้วิธีดูแลใจและรับมือกับปัญหาในชีวิตได้อย่างเหมาะสม",
    ],
    infoHeading: "ให้บริการโดย",
    infoLines: [
      "นักจิตวิทยาคลินิก",
      "ผู้ได้รับการรับรองเป็นผู้ประกอบโรคศิลปะ",
      "สาขาจิตวิทยาคลินิก",
    ],
    noteLines: ["มีประสบการณ์ในการให้คำปรึกษา", "และบำบัดทางจิตวิทยา"],
    durationLines: ["60 นาที"],
    priceLines: ["2,000"],
    extra: "เพิ่มเวลา 30 นาที/1,000 บาท",
  },
  {
    id: "card-2",
    icon: svgs.consult2,
    titleTh: "การบำบัดคู่/ครอบครัว ",
    titleEn: "(Couple/Family Therapy)",
    details: [
      "การบำบัด/ให้คำปรึกษาที่ช่วยให้คนในความสัมพันธ์เข้าใจกันมากขึ้น สื่อสารดีขึ้น และจัดการความขัดแย้งอย่างสร้างสรรค์ เพื่อความสัมพันธ์ที่มั่นคงและอบอุ่นขึ้น",
    ],
    infoHeading: "ให้บริการโดย",
    infoLines: [
      "นักจิตวิทยาคลินิก",
      "ผู้ได้รับการรับรองเป็นผู้ประกอบโรคศิลปะ",
      "สาขาจิตวิทยาคลินิก",
    ],
    noteLines: [
      "มีประสบการณ์ในการให้คำปรึกษา",
      "แบบคู่ ครอบครัว",
      "เพื่อทางออกร่วมกันในความสัมพันธ์",
    ],
    durationLines: ["90 นาที"],
    priceLines: ["3,500"],
    extra: "เพิ่มเวลา 30 นาที/1,166 บาท",
  },
  {
    id: "card-3",
    icon: svgs.consult3,
    titleTh: "การตรวจประเมินทางจิตวิทยา",
    titleEn: "(Psychological Assessment)",
    details: [
      "กระบวนการใช้แบบทดสอบและการสัมภาษณ์เพื่อทำความเข้าใจสภาพจิตใจ บุคลิกภาพ และการทำงานของความคิดอย่างเป็นระบบ เพื่อนำไปวางแผนการดูแลหรือพัฒนาต่อไป (ติดต่อมายด์บลูมเพื่อสอบถามค่าบริการ)",
      "",
    ],
    infoHeading: "เงื่อนไข",
    infoLines: [
      "ประเมินโดยนักจิตวิทยาคลินิก",
      "ผู้ได้รับการรับรองเป็นผู้ประกอบโรคศิลปะ",
      "สาขาจิตวิทยาคลินิก",
    ],
    noteLines: [
      "โดยต้องได้รับเอกสารส่งตัว/",
      "ใบแพทย์สั่งประเมินเท่านั้น",
      "แจ้งผลประเมินแก่ต้นสังกัด/หน่วยงานส่งตัว",
    ],
    durationLines: ["60-120 นาที"],
    priceLines: ["3,250 -", "4,550"],
    extra: "",
  },
];

const companyService = [
  {
    id: "เพิ่ม Productivity",
    icon: svgs.ideaLightGreen,
    title: "เพิ่มพลังในการทำงานอย่างยั่งยืน",
    detail:
      "เมื่อใจได้รับการดูแลอย่างอ่อนโยน พนักงานจะทำงานได้อย่างมีสมาธิ มีพลัง และเติบโตอย่างเป็นธรรมชาติ",
  },
  {
    id: "รักษา Talent",
    icon: svgs.peopleGreen,
    title: "สร้างความผูกพันที่ดีในองค์กร",
    detail:
      "การใส่ใจ Well-being ช่วยให้คนรู้สึกมีคุณค่า เชื่อมโยงกันมากขึ้น และอยากอยู่เติบโตไปด้วยกัน",
  },
  {
    id: "เสริม Employer Brand",
    icon: svgs.starGreen,
    title: "เสริมภาพลักษณ์องค์กรที่ใส่ใจผู้คน",
    detail:
      "องค์กรที่ดูแลใจคน สะท้อนความอบอุ่นและความเข้าใจ สร้างความน่าเชื่อถือและความไว้ใจ",
  },
];

const importantDetails = [
  {
    id: 1,
    title: "76% ของพนักงานกำลังเผชิญความเครียด",
    description:
      "โอกาสขององค์กรในการสร้างพื้นที่ที่ช่วยให้คนทำงานได้อย่างสมดุลและยั่งยืน",
    source: "Gallup, 2023",
  },
  {
    id: 2,
    title: "Engagement เพิ่มขึ้นได้ถึง 2 เท่า",
    description:
      "เมื่อพนักงานรู้สึกได้รับการดูแลและเข้าใจ พลังในการทำงานก็เติบโตตามไปด้วย",
    source: "Deloitte, 2023",
  },
  {
    id: 3,
    title: "$1 Trillion คือศักยภาพที่รอการฟื้นคืน",
    description:
      "การดูแลสุขภาพใจช่วยเปลี่ยนต้นทุนที่มองไม่เห็น ให้กลายเป็นพลังขององค์กร",
    source: "WHO, 2023",
  },
  {
    id: 4,
    title: "ทุก 1 การลงทุน สร้างผลลัพธ์กลับมา 4 เท่า",
    description:
      "Mental Health ไม่ใช่ค่าใช้จ่าย แต่คือการลงทุนเพื่อการเติบโตอย่างยั่งยืน",
    source: "WHO, 2021",
  },
];

type ClinicServiceBlock = {
  heading?: string;
  paragraphs?: string[];
  tags?: string[];
};

type ClinicServiceSection = {
  id: string;
  title: string;
  summary: string[];
  tags: string[];
  extraBlocks?: ClinicServiceBlock[];
  showBadge?: boolean;
  ctaLabel?: string;
};

const clinicServiceSections: ClinicServiceSection[] = [
  {
    id: "assessment",
    title: "Mental Health Assessment",
    summary: [
      "Mental Health Screening",
      // "สุขภาพจิตมีบทบาทสำคัญอย่างยิ่งต่อประสิทธิภาพการทำงานโดยรวมและการทำงานร่วมกันเป็นทีม การดูแลสุขภาพจิตของพนักงานไม่เพียงแต่ช่วยให้องค์กรสามารถให้การสนับสนุนได้ทันท่วงที แต่ยังช่วยในการกำหนดนโยบายที่ส่งเสริมสภาพแวดล้อมการทำงานที่ดีต่อสุขภาพและมีประสิทธิภาพมากขึ้น",
      // "มายด์บลูม ให้บริการตรวจคัดกรองสุขภาพจิตที่สำคัญเบื้องต้นใน:",
      "สุขภาพจิตมีบทบาทสำคัญอย่างยิ่งต่อประสิทธิภาพการทำงานโดยรวมและการทำงานร่วมกันเป็นทีม การดูแลสุขภาพจิตของพนักงานไม่เพียงแต่ช่วยให้องค์กรสามารถให้การช่วยเหลือและสนับสนุนได้ทันท่วงที แต่ยังช่วยในการกำหนดนโยบายที่ส่งเสริมสภาพแวดล้อมการทำงานที่ดีต่อสุขภาพและมีประสิทธิภาพมากขึ้น",
      "มายด์บลูมให้บริการตรวจคัดกรองสุขภาพจิตที่สำคัญเบื้องต้นในประเด็นดังนี้",
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
        heading: "Psychological Assessment",
        paragraphs: [
          "การประเมินทางจิตวิทยาเป็นกระบวนการที่ใช้เครื่องมือเฉพาะทางจิตวิทยา เพื่อทำความเข้าใจสุขภาพจิต ความสามารถทางปัญญา บุคลิกภาพ ภาวะอารมณ์ของแต่ละบุคคล",
          "มายด์บลูมให้บริการตรวจประเมินทางจิตวิทยาที่สำคัญต่อการทำงานในประเด็นดังนี้",
        ],
        tags: [
          "Resilience Quotient",
          "Cognitive Emotion Regulation Styles",
          "Personality Trait",
        ],
      },
    ],
    showBadge: true,
  },
  {
    id: "counselling",
    title: "Mental Health Counselling",
    summary: [
      "",
      "การให้คำปรึกษาด้านสุขภาพจิตช่วยให้พนักงานจัดการกับความเครียด ปัญหาทางอารมณ์ และความกดดันทางจิตใจที่เกี่ยวข้องกับการทำงานและชีวิตประจำวัน ให้บริการโดยนักจิตวิทยาคลินิกที่ยึดถือมาตรฐานทางวิชาชีพรวมถึงเรื่องการรักษาความลับและความเป็นส่วนตัว",
      "ประเด็นในการพูดคุย เช่น ",
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
          "เมื่อความตึงเครียดและความกดดันในใจคลี่คลายลง บุคคลจะมีสมดุลการทำงาน ยืดหยุ่นในการปรับตัวแก้ปัญหา และนำไปสู่การทำงานอย่างมีประสิทธิภาพอย่างยั่งยืน",
        ],
      },
    ],
  },
  {
    id: "workshop",
    title: "MindBloom Wellbeing Workshop",
    summary: [
      "",
      "เวิร์กชอปโดยนักจิตวิทยาคลินิกที่บูรณาการหลักจิตวิทยา จิตวิทยาเชิงบวกและศิลปะ ออกแบบให้เหมาะสมกับความต้องการของแต่ละองค์กร แบ่งออกเป็นสามหมวดหมู่หลัก แต่ละหมวดออกแบบมาเพื่อสนับสนุนด้านต่างๆ ของสุขภาวะทางจิต การทำงานร่วมกันอย่างมีความสุข และสมดุลชีวิตที่ลงตัว",
    ],
    tags: [
      "Team & Leadership",
      "Preventive & Awareness",
      "Self-Awareness & Personal Growth",
    ],
    ctaLabel: "ดูรายละเอียด",
  },
];

function ServicePage() {
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
    <div className="w-full max-w-5xl px-4 s:px-6 m:px-8 pb-24 flex flex-col items-center">
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
                {service.title}
              </p>
              {service.detail.length === 1 ? (
                <p className="rf-small text-neutral-grey">
                  {service.detail[0]}
                </p>
              ) : (
                <div className="rf-small text-neutral-grey">
                  <p>{service.detail[0]}</p>
                  <ul className="mt-1 space-y-0.5 list-disc list-inside">
                    {service.detail.slice(1).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="mt-auto pt-4 flex justify-center">
                <a
                  href={`#${service.targetId}`}
                  className="rf-body text-neutral-black rounded-3xl px-4 py-2 border border-neutral-black w-fit"
                >
                  ดูรายละเอียด
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
          ให้คำปรึกษาในด้านต่าง ๆ
        </h1>

        <div className="mt-8 flex max-w-145 flex-wrap justify-center gap-2.5">
          {concernTags.map((tag) => (
            <span
              key={tag}
              className="rf-small rounded-2xl bg-[#CACFC3] px-4 py-2 leading-none text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mt-9.5 text-xl font-bold text-center">
          รูปแบบการบริการ
        </h2>
        <p className="mt-4 rf-body font-normal text-center text-neutral-black">
          มายด์บลูม <span className="rf-body font-bold">เปิดให้บริการ</span>
        </p>
        <div className="mt-4 flex flex-col items-center gap-1.5">
          <div className="flex w-full max-w-67.5 items-center justify-center gap-2 s:justify-start">
            <img src={svgs.calendarBlack} alt="calendar" className="h-4 w-4" />
            <p className="rf-body text-center text-neutral-black s:text-left">
              วันจันทร์-ศุกร์ เวลา 17.00-20.00 น.
            </p>
          </div>

          <div className="flex w-full max-w-67.5 items-center justify-center gap-2 s:justify-start">
            <img src={svgs.calendarBlack} alt="calendar" className="h-4 w-4" />
            <p className="rf-body text-center text-neutral-black s:text-left">
              วันเสาร์-อาทิตย์ เวลา 10.00-20.00 น.
            </p>
          </div>
        </div>

        <div className="my-6 h-px w-full bg-[#dbc8b9]" />

        <p className=" rf-body text-center font-bold text-neutral-grey">
          ให้บริการตามระบบนัดหมายล่วงหน้า
        </p>
        <p className="rf-body text-center text-neutral-grey">
          โดยท่านสามารถเลือกรูปแบบ
        </p>
        <p className="rf-body text-center text-neutral-grey">
          การเข้ารับบริการได้ 2 รูปแบบ ในอัตราค่าบริการเดียวกัน
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
                {channel.title}
              </p>
              <p className="mt-2 whitespace-pre-line rf-small text-neutral-grey">
                {channel.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <section className="mt-9.5 w-full flex flex-col items-center">
        <h2 className="text-xl font-bold text-neutral-black text-center">
          บริการของมายด์บลูม
        </h2>
        <p className="mt-6 rf-small text-center text-neutral-grey">
          คลินิกมายด์บลูมให้บริการ{" "}
          <span className="font-bold rf-body">การให้คำปรึกษาด้านสุขภาพจิต</span>{" "}
          และ
          <span className="font-bold rf-body"> การตรวจประเมินทางจิตวิทยา</span>
        </p>
        <p className="rf-small text-center text-neutral-grey">
          โดยนักจิตวิทยาคลินิก ผู้ได้รับอนุญาตเป็นผู้ประกอบโรคศิลปะ
          สาขาจิตวิทยาคลินิก
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
                {card.titleTh}
                <br />
                <span className="text-center text-[16px] font-semibold leading-tight text-[#55748f]">
                  {card.titleEn}
                </span>
              </h3>

              <p className="mt-6 text-center text-[16px] font-bold text-neutral-grey">
                รายละเอียด
              </p>
              <div className="mt-4 min-h-20 text-center rf-body text-neutral-grey l:min-h-44">
                {card.details.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <p className="mt-6 text-center text-[16px] font-bold text-neutral-grey">
                {card.infoHeading}
              </p>
              <div className="mt-4 min-h-23 text-center rf-body text-neutral-grey">
                {card.infoLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="mt-6 min-h-16 text-center rf-body text-neutral-grey">
                {card.noteLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <div className="relative mt-6 h-28 w-full text-[#e5aba4]">
                <div className="absolute top-0 left-6 max-w-32.5 s:max-w-41.25">
                  <p className="text-[40px] s:text-[32px] font-bold leading-tight wrap-break-word">
                    {card.durationLines[0]}
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
                  <p className="leading-none text-base">บาท</p>
                </div>
              </div>

              <p className="mt-4 h-11 text-center text-[14px] font-semibold text-[#e2a39d]">
                {card.extra}
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
                  นัดหมาย/สอบถามข้อมูลเพิ่มเติม
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <div className="bg-[#C7A491] w-full h-px my-9.5" />

      <section className="mt-9.5 w-full" id="organization">
        <p className="rf-title text-center font-bold">
          เราช่วยองค์กรของคุณได้อย่างไร?
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
                {com.title}
              </p>
              <p className="whitespace-pre-line rf-small text-neutral-grey">
                {com.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mt-9.5 w-full flex flex-col items-center gap-6">
        <p className="rf-title text-center">
          ทำไม Mental Wellbeing ถึงสำคัญกับธุรกิจ
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
                {item.title}
              </p>
              <p className="rf-body font-light text-white">
                {item.description}
              </p>
              <p className="font-light rf-body text-white">
                Source: {item.source}
              </p>
            </motion.article>
          ))}
        </div>
        <p className="font-light rf-body text-neutral-black text-center">
          <strong>
            เมื่อคนในองค์กรรู้สึกดี องค์กรก็เติบโตได้ดีตามไปด้วย 🌱
          </strong>{" "}
          <br />
          ทั้งในด้าน Productivity ความผูกพัน และบรรยากาศการทำงานที่เอื้อต่อกัน
        </p>
      </section>

      <section className="mt-9.5 w-full flex flex-col items-center gap-6">
        <p className="rf-title text-center font-bold">บริการสำหรับองค์กร</p>
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
                      {section.title}
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
                              {paragraph}
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
                                {block.heading}
                              </h4>
                            ) : null}

                            <div className="space-y-1.5">
                              {block.paragraphs?.map(
                                (paragraph, paragraphIndex) => (
                                  <p
                                    key={`${section.id}-block-${blockIndex}-paragraph-${paragraphIndex}`}
                                    className="rf-body text-neutral-grey"
                                  >
                                    {paragraph}
                                  </p>
                                ),
                              )}
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
                              {section.ctaLabel}
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
