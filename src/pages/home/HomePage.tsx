import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageProvider";

const copy = {
  heroTitle: {
    th: "พื้นที่ปลอดภัยสำหรับดูแลจิตใจ",
    en: "A safe space for mental wellbeing",
  },
  heroSubtitle: {
    th: "ให้บริการแบบ onsite และ online ผ่านวิดิโอคอล",
    en: "Onsite and online sessions available via video call",
  },
  bubbleOne: {
    top: { th: "โดย นักจิตวิทยาคลินิก", en: "With experienced" },
    bottom: { th: "มากประสบการณ์", en: "clinical psychologists" },
  },
  bubbleTwo: {
    top: { th: "ให้บริการตามมาตรฐาน", en: "Care delivered with" },
    bottom: { th: "และจรรยาบรรณวิชาชีพ", en: "professional standards and ethics" },
  },
  bubbleThree: {
    top: { th: "ให้บริการทั้งแบบ", en: "Available both" },
    bottom: { th: "พบหน้าที่คลินิก และแบบออนไลน์", en: "in-clinic and online" },
  },
  bubbleFour: {
    top: {
      th: "คัดเลือกนักจิตวิทยาที่เหมาะสมกับ",
      en: "Matched with a psychologist suited to",
    },
    bottom: { th: "ความต้องการและประเด็นของคุณ", en: "your needs and concerns" },
  },
  beliefTitle: { th: "เราเชื่อว่า", en: "We believe" },
  beliefBody: {
    th: "ทุกคนมีความสวยงามและมีคุณค่าในตัวเอง พร้อมที่จะเติบโตและเบ่งบาน (Blossom) เพียงแค่บางช่วงเวลาอาจต้องการการดูแลและสิ่งแวดล้อมที่ปลอดภัยเป็นพิเศษ",
    en: "Everyone holds beauty and worth within themselves, with the potential to grow and blossom. At certain times, all we may need is extra care and a safer environment to do so.",
  },
  beliefCta: { th: "ปัญหาที่เราดูแล", en: "What We Support" },
  valueTitle: { th: "คุณค่าของเรา", en: "Our Values" },
  valueBody: {
    th: "มายด์บลูม คือพื้นที่ปลอดภัยที่ให้การดูแลด้านสุขภาพจิต เราให้ความสำคัญกับการสร้างสิ่งแวดล้อมทางใจที่ปลอดภัย เพื่อให้บุคคลก้าวข้ามผ่านบางช่วงเวลาได้อย่างมั่นคง\nมายด์บลูม เชื่อว่าการดูแลจิตใจคือการเดินทางแห่งการค้นพบตนเอง การยอมรับตนเอง และการดูแลสุขภาวะโดยรวมให้สมดุล",
    en: "MindBloom is a safe space for mental health care. We focus on creating emotionally safe environments so people can move through difficult seasons with greater stability.\nMindBloom believes caring for the mind is a journey of self-discovery, self-acceptance, and a more balanced overall wellbeing.",
  },
  valueCta: { th: "นักจิตวิทยา", en: "Psychologists" },
} as const;

function HomePage() {
  const { t } = useLanguage();
  const bubbleListVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const bubbleItemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };
  return (
    <div className="w-full flex flex-col items-center mt-14.75 px-4">
      <section className="flex flex-col items-center justify-start gap-4 l:max-w-1/2 lg:h-[80vh]">
        <h1 className="rf-h1 font-normal text-center">
          {t(copy.heroTitle)}
        </h1>
        <h1 className="text-base m:text-xl text-center font-semibold m:font-bold">
          {t(copy.heroSubtitle)}
        </h1>

        <motion.div
          className="w-full mx-auto flex flex-col"
          variants={bubbleListVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div
            variants={bubbleItemVariants}
            className="bg-white px-6 py-2 rounded-3xl w-fit shadow-[0px_0px_20px_0px_rgba(255,255,255,1)] my-6 min-w-60.5 self-start m:translate-x-22.25"
          >
            <p className="text-center text-neutral-grey">
              <span className="font-semibold">{t(copy.bubbleOne.top)}</span>
              <br />
              {t(copy.bubbleOne.bottom)}
            </p>
          </motion.div>

          <motion.div
            variants={bubbleItemVariants}
            className="bg-white px-6 py-2 rounded-3xl w-fit shadow-[0px_0px_20px_0px_rgba(255,255,255,1)] my-6 min-w-60.5 self-end"
          >
            <p className="text-center text-neutral-grey">
              <span className="font-semibold">{t(copy.bubbleTwo.top)}</span>
              <br />
              {t(copy.bubbleTwo.bottom)}
            </p>
          </motion.div>

          <motion.div
            variants={bubbleItemVariants}
            className="bg-white px-6 py-2 rounded-3xl w-fit shadow-[0px_0px_20px_0px_rgba(255,255,255,1)] my-6 min-w-60.5 self-start"
          >
            <p className="text-center text-neutral-grey font-semibold">
              <span className="font-normal">{t(copy.bubbleThree.top)}</span>
              <br />
              {t(copy.bubbleThree.bottom)}
            </p>
          </motion.div>

          <motion.div
            variants={bubbleItemVariants}
            className="bg-white px-6 py-2 rounded-3xl w-fit shadow-[0px_0px_20px_0px_rgba(255,255,255,1)] my-6 min-w-60.5 self-end m:-translate-x-22.25"
          >
            <p className="text-center text-neutral-grey font-semibold">
              <span className="font-normal">{t(copy.bubbleFour.top)}</span>
              <br />
              {t(copy.bubbleFour.bottom)}
            </p>
          </motion.div>
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-start gap-12 mt-14.75 lg:h-[80vh] max-w-203.25 mb-12 lg:mb-0">
        <motion.div
          initial={{ opacity: 1, y: 34, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            ease: "easeOut" as const,
          }}
          className="flex flex-col items-center gap-6"
        >
          <p className="rf-title">{t(copy.beliefTitle)}</p>
          <p className="rf-body text-center text-neutral-grey">
            {t(copy.beliefBody)}
          </p>

          <Link
            to={"/service"}
            className="bg-white px-6 py-2 flex justify-center items-center rounded-3xl"
          >
            <p className="rf-body font-bold">{t(copy.beliefCta)}</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 34, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut" as const,
          }}
          className="flex flex-col items-center gap-6 mt-2 lg:mt-27.5"
        >
          <p className="rf-title">{t(copy.valueTitle)}</p>
          <p className="text-body text-center text-neutral-grey">
            {t(copy.valueBody).split("\n").map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <Link
            to={"/psychologist"}
            className="bg-white px-6 py-2 flex justify-center items-center rounded-3xl"
          >
            <p className="rf-body font-bold">{t(copy.valueCta)}</p>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
