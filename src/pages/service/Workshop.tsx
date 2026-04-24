import { motion } from "framer-motion";

import ws1 from "../../assets/images/ws1.png";
import ws2 from "../../assets/images/ws2.png";
import ws3 from "../../assets/images/ws3.png";
import ws4 from "../../assets/images/ws4.png";
import ws5 from "../../assets/images/ws5.png";
import ws6 from "../../assets/images/ws6.png";
import ws7 from "../../assets/images/ws7.png";
import ws8 from "../../assets/images/ws8.png";
import ws9 from "../../assets/images/ws9.png";
import ws10 from "../../assets/images/ws10.png";
import ws11 from "../../assets/images/ws11.png";
import ws12 from "../../assets/images/ws12.png";
import ws13 from "../../assets/images/ws13.png";
import ws14 from "../../assets/images/ws14.png";
import ws15 from "../../assets/images/ws15.png";
import ws16 from "../../assets/images/ws16.png";
import ws17 from "../../assets/images/ws17.png";
import ws18 from "../../assets/images/ws18.png";
import ws19 from "../../assets/images/ws19.png";
import ws20 from "../../assets/images/ws20.png";
import ws21 from "../../assets/images/ws21.png";
import { Link } from "react-router-dom";
import { useLanguage } from "../../i18n/LanguageProvider";

const ctaLabel = {
  th: "นัดหมาย/สอบถามข้อมูลเพิ่มเติม",
  en: "Book / Contact for details",
} as const;

const Workshop = () => {
  const { t } = useLanguage();

  return (
    <div className="mt-14.75 w-full max-w-216 px-4 sm:px-6 md:px-8 mx-auto mb-20 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.5,
          ease: "easeOut" as const,
        }}
        className="flex items-center gap-1 md:gap-4 justify-center mb-4"
      >
        <Link to={"/service"}>
          <p className="rf-body text-neutral-black">
            {t({ th: "บริการของเรา", en: "Services" })}
          </p>
        </Link>
        <p className="rf-body text-neutral-grey">
          / Mindbloom Wellbeing Workshop
        </p>
      </motion.div>

      <section className="flex flex-col items-center w-full">
        <p className="rf-title my-4">Mindbloom Wellbeing Workshop</p>
        <p className="rf-body text-neutral-grey font-normal">
          {t({
            th: "พื้นที่เล็ก ๆ ที่ให้คุณกลับมาโอบกอดตัวเอง",
            en: "A gentle space for reconnecting with yourself",
          })}
        </p>

        {/* Preventive & Awareness */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col gap-4 items-center my-8 w-full"
        >
          <p className="text-xl font-bold">Preventive & Awareness</p>
          <p className="rf-body font-normal text-neutral-grey">
            {t({
              th: "สร้างความตระหนักรู้ และป้องกันก่อนจะสาย",
              en: "Build awareness and support prevention early",
            })}
          </p>
        </motion.div>

        {/* Psychological First Aid (PFA) */}
        <div className="w-full flex flex-col gap-4">
          <p className="text-base font-bold">Psychological First Aid (PFA)</p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "เรียนรู้หลักการให้ความช่วยเหลือเบื้องต้นทางจิตใจในภาวะวิกฤติ เพื่อเสริมทักษะการดูแลใจตนเองและผู้อื่นในช่วงวิกฤตทางใจ",
              en: "Learn the principles of psychological first aid in times of crisis, with practical ways to care for yourself and others during emotionally difficult moments.",
            })}
          </p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "เรียนรู้หลักการ PFA ที่นำไปใช้ได้จริง ช่วยป้องกันปัญหาสุขภาพจิต รักษาศักยภาพบุคลากร และสร้างบรรยากาศปลอดภัยทางใจในองค์กร พร้อมทักษะรับมือความเครียดอย่างเหมาะสม โดยนักจิตวิทยาคลินิกผู้เชี่ยวชาญด้านสุขภาพจิต",
              en: "This workshop offers practical PFA skills that help prevent mental health difficulties, sustain team capacity, and build psychologically safe workplaces, guided by clinical psychologists with mental health expertise.",
            })}
          </p>
          <div className="grid grid-cols-1 m:grid-cols-3 gap-6">
            {[ws1, ws2, ws3, ws4, ws5, ws6].map((src, i) => (
              <motion.img
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                key={i}
                src={src}
                alt=""
                className="w-full aspect-square object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Stress Management */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="w-full flex flex-col gap-4 mt-8"
        >
          <p className="text-base font-bold">Stress Management</p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "เรียนรู้และฝึกทักษะการจัดการความเครียดและอารมณ์แง่ลบที่รบกวนศักยภาพในการทำงานและการใช้ชีวิต โดยออกแบบและดำเนินกิจกรรมโดยนักจิตวิทยาคลินิก",
              en: "Learn and practice skills for managing stress and difficult emotions that affect work performance and daily life, through activities designed and facilitated by clinical psychologists.",
            })}
          </p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "เวิร์กชอปนี้มุ่งเสริมสร้างความยืดหยุ่นทางจิตใจ (Resilience) และสุขภาวะที่ยั่งยืน ผ่านทักษะการจัดการความเครียดตามหลักจิตวิทยา ไม่เพียงช่วยบรรเทาความเครียดในระยะสั้น แต่ยังช่วยเสริมสร้างศักยภาพภายใน เพื่อให้ผู้เข้าร่วมสามารถรับมือกับแรงกดดันและความท้าทายได้อย่างมีประสิทธิภาพ ทั้งในบริบทของการทำงานและชีวิตประจำวัน",
              en: "This workshop strengthens resilience and sustainable wellbeing through evidence-based stress management skills. It supports not only short-term relief, but also long-term inner capacity for handling pressure and challenges effectively at work and in life.",
            })}
          </p>
          <div className="grid grid-cols-1 m:grid-cols-3 gap-2">
            {[ws13, ws14, ws15].map((src, i) => (
              <motion.img
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                key={i}
                src={src}
                alt=""
                className="w-full aspect-video object-cover rounded-lg h-65.5"
              />
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, delay: 0.15, ease: "easeOut" }}
              href="https://line.me/R/ti/p/@mindbloom"
              target="_blank"
              rel="noreferrer"
              className="rf-body rounded-full bg-white border border-[#4D738F] px-6 py-2 font-bold text-[#4D738F]"
            >
              {t(ctaLabel)}
            </motion.a>
          </div>
        </motion.div>

        <div className="w-full h-px bg-[#C7A491] my-8" />

        {/* Team & Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            ease: "easeOut" as const,
          }}
          className="flex flex-col gap-4 items-center my-8 w-full"
        >
          <p className="text-xl font-bold">Team & Leadership</p>
          <p className="rf-body font-normal text-neutral-grey">
            {t({
              th: "เสริมพลังทีม และพัฒนาภาวะผู้นำที่ใส่ใจ",
              en: "Strengthen teams and nurture caring leadership",
            })}
          </p>
        </motion.div>

        {/* Creative work for team communication */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="w-full flex flex-col gap-4 mt-8"
        >
          <p className="text-base font-bold">
            Creative work for team communication
          </p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "มุ่งเน้นการทำความเข้าใจ ทั้งความเหมือนและความแตกต่างของแต่ละบุคคล เพื่อส่งเสริมการสื่อสารที่ตั้งอยู่บนความเข้าใจและความเห็นอกเห็นใจกัน",
              en: "Focused on understanding both similarities and differences between people in order to encourage communication grounded in empathy and mutual understanding.",
            })}
          </p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "กระบวนการที่ออกแบบอย่างสร้างสรรค์นี้ช่วยพัฒนาการสื่อสารเชิงบวกในทีม โดยกระตุ้นทั้งมิติของความคิดและอารมณ์ ภายใต้การดูแลของนักจิตวิทยาคลินิก เพื่อเสริมสร้างความเข้าใจระหว่างกัน ลดความขัดแย้ง และสร้างพลังบวกในการทำงานร่วมกันอย่างมีประสิทธิภาพและกลมกลืน",
              en: "This creatively designed process supports more positive team communication by engaging both thinking and emotional awareness, under the guidance of clinical psychologists, to reduce conflict and strengthen collaborative energy.",
            })}
          </p>
          <div className="grid grid-cols-1 m:grid-cols-3 gap-6">
            {[ws7, ws8, ws9].map((src, i) => (
              <motion.img
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                key={i}
                src={src}
                alt=""
                className="w-full aspect-video object-cover rounded-lg h-60.5"
              />
            ))}
          </div>
        </motion.div>

        {/* Communication skill */}
        <div className="w-full flex flex-col gap-4 mt-8">
          <p className="text-base font-bold">Communication skill</p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "เวิร์กช็อปเพื่อพัฒนาทักษะการสื่อสารอย่างมีประสิทธิภาพ",
              en: "A workshop for building effective communication skills",
            })}
          </p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "ผู้เข้าร่วมจะได้ฝึกทักษะการฟังและการสื่อสารอย่างชัดเจน พร้อมทั้งเรียนรู้การสื่อสารด้วยความเข้าใจ เห็นอกเห็นใจ และความคิดสร้างสรรค์ เวิร์กช็อปนี้ช่วยป้องกันความขัดแย้ง เสริมสร้างการทำงานร่วมกัน และสนับสนุนการทำงานเป็นทีมอย่างราบรื่น ภายใต้บรรยากาศที่ปลอดภัยทางจิตใจ (Psychological Safety) ในองค์กร",
              en: "Participants practice listening and communicating clearly while learning to communicate with empathy, understanding, and creativity. The workshop helps prevent conflict, strengthen collaboration, and support smoother teamwork within a psychologically safe environment.",
            })}
          </p>
          <div className="grid grid-cols-1 m:grid-cols-3 gap-6">
            {[ws10, ws11, ws12].map((src, i) => (
              <motion.img
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                key={i}
                src={src}
                alt=""
                className="w-full aspect-video object-cover rounded-lg h-65.5"
              />
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, delay: 0.15, ease: "easeOut" }}
              href="https://line.me/R/ti/p/@mindbloom"
              target="_blank"
              rel="noreferrer"
              className="rf-body rounded-full bg-white border border-[#4D738F] px-6 py-2 font-bold text-[#4D738F]"
            >
              {t(ctaLabel)}
            </motion.a>
          </div>
        </div>

        <div className="w-full h-px bg-[#C7A491] my-8" />

        {/* Self-Awareness & Personal Growth */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="flex flex-col gap-4 items-center my-8 w-full"
        >
          <p className="text-xl font-bold">Self-Awareness & Personal Growth</p>
          <p className="rf-body font-normal text-neutral-grey">
            {t({
              th: "ค้นพบตัวเอง พร้อมเติบโตจากข้างใน",
              en: "Discover yourself and grow from within",
            })}
          </p>
        </motion.div>

        {/* Art of me : self-awareness discovery */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="w-full flex flex-col gap-4 mt-8"
        >
          <p className="text-base font-bold">
            Art of me : self-awareness discovery
          </p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "กระบวนการที่ผสานจิตวิทยาและศิลปะ โดยมีนักจิตวิทยาคลินิกเป็นผู้นำทาง",
              en: "A process that blends psychology and art, guided by clinical psychologists.",
            })}
          </p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "เป็นเวิร์กช็อปที่จะชวนผู้เข้าร่วมให้ได้สำรวจโลกภายในของตนเอง พัฒนาความตระหนักรู้ทางอารมณ์ และค้นพบมิติที่ลึกซึ้งของการยอมรับตนเอง และกระบวนการที่อ่อนโยนนี้จะช่วยส่งเสริมสุขภาวะทางอารมณ์และการเติบโตจากภายใน ทำให้บุคคลสามารถใช้ชีวิตและเชื่อมโยงกับผู้อื่นได้อย่างสมดุลและเป็นธรรมชาติยิ่งขึ้น",
              en: "This workshop invites participants to explore their inner world, deepen emotional awareness, and discover more profound dimensions of self-acceptance. The gentle process supports emotional wellbeing and inner growth, helping people live and connect with others in a more balanced and natural way.",
            })}
          </p>
          <div className="grid grid-cols-1 m:grid-cols-3  gap-2">
            {[ws19, ws20, ws21].map((src, i) => (
              <motion.img
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                key={i}
                src={src}
                alt=""
                className="w-full aspect-video object-cover rounded-lg h-65.5"
              />
            ))}
          </div>
        </motion.div>

        {/* Mindful flower arrangements & Self exploration */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          className="w-full flex flex-col gap-4 mt-8"
        >
          <p className="text-base font-bold">
            Mindful flower arrangements & Self exploration
          </p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "ค้นพบตนเองผ่านการจัดดอกไม้ภายใต้กระบวนการทางจิตวิทยา",
              en: "Discover yourself through flower arrangement within a psychological process",
            })}
          </p>
          <p className="rf-body text-neutral-grey font-normal">
            {t({
              th: "ดอกไม้ไม่ได้เป็นเพียงความงดงาม แต่ยังเป็นสื่อกลางที่เชื่อมโยงสู่โลกภายใน ชวนให้ผู้เข้าร่วมได้สำรวจและทำความเข้าใจตนเองอย่างอ่อนโยน ผ่านกระบวนการจัดดอกไม้ที่ผสานทั้งความตั้งใจและความเป็นธรรมชาติ ซึ่งกิจกรรมนี้จะช่วยส่งเสริมความสมดุลทางอารมณ์ ลดความตึงเครียด และเปิดพื้นที่ให้เกิดการเรียนรู้และสะท้อนความเข้าใจตนเองอย่างลึกซึ้ง",
              en: "Flowers are not only beautiful. They can also become a bridge to the inner world, inviting participants to explore and understand themselves gently through a process that combines intention and natural flow. This activity supports emotional balance, reduces tension, and creates room for deep reflection and learning.",
            })}
          </p>
          <div className="grid grid-cols-1 m:grid-cols-3 gap-2">
            {[ws16, ws17, ws18].map((src, i) => (
              <motion.img
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                key={i}
                src={src}
                alt=""
                className="w-full aspect-video object-cover rounded-lg h-65.5"
              />
            ))}
          </div>
          <div className="flex justify-center mt-2">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, delay: 0.15, ease: "easeOut" }}
              href="https://line.me/R/ti/p/@mindbloom"
              target="_blank"
              rel="noreferrer"
              className="rf-body rounded-full bg-white border border-[#4D738F] px-6 py-2 font-bold text-[#4D738F]"
            >
              {t(ctaLabel)}
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Workshop;
