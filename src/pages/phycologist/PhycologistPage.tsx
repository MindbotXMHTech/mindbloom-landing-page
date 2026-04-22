import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../../i18n/LanguageProvider";
import { images } from "../../constants/images";
import { getLocalizedText } from "../../i18n/utils";
import {
  fallbackPsychologists,
  loadPublicPsychologists,
  psychologistTopicLabels,
  type PublicPsychologist,
  type PsychologistTopicKey,
} from "../../lib/psychologistContent";

function PhycologistPage() {
  const { language, t } = useLanguage();
  const [searchText, setSearchText] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<PsychologistTopicKey[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [psychologists, setPsychologists] = useState<PublicPsychologist[]>(fallbackPsychologists);

  useEffect(() => {
    let active = true;

    const loadPsychologists = async () => {
      const nextPsychologists = await loadPublicPsychologists();

      if (active) {
        setPsychologists(nextPsychologists);
      }
    };

    void loadPsychologists();

    return () => {
      active = false;
    };
  }, []);

  const allTopics = useMemo(
    () => Array.from(new Set(psychologists.flatMap((psychologist) => psychologist.topics))),
    [psychologists],
  );

  const toggleTopic = (topic: PsychologistTopicKey) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((item) => item !== topic) : [...prev, topic],
    );
  };

  const filtered = useMemo(() => {
    return psychologists.filter((psychologist) => {
      const q = searchText.toLowerCase();
      const matchesSearch =
        getLocalizedText(psychologist.name, language).toLowerCase().includes(q) ||
        getLocalizedText(psychologist.nickname, language).toLowerCase().includes(q);
      const matchesTopics =
        selectedTopics.length === 0 ||
        selectedTopics.some((topic) => psychologist.topics.includes(topic));

      return matchesSearch && matchesTopics;
    });
  }, [language, psychologists, searchText, selectedTopics]);

  return (
    <div className="mb-14.75 md:my-14.75 w-full l:max-w-298 px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <div className="flex flex-col items-center justify-start w-full gap-6 sm:gap-8 md:gap-9.5 max-w-215">
        <h4 className="rf-h4">{t({ th: "นักจิตวิทยา", en: "Psychologists" })}</h4>
        <span className="rf-body font-normal text-neutral-grey text-center max-w-272">
          {t({
            th: "ผู้ให้บริการของมายด์บลูมคลินิกเป็นนักจิตวิทยาคลินิกผู้มีใบอนุญาตประกอบโรคศิลปะสาขาจิตวิทยาคลินิก โดยทำงานอยู่ภายใต้ มายด์บลูมคลินิก ใบอนุญาตเลขที่ 10109003467 ตามพระราชบัญญัติสถานพยาบาล พ.ศ. 2541 ทำให้นักจิตวิทยาคลินิกของเรามีทักษะทั้งในด้านการประเมินภาวะทางจิตใจ การทำความเข้าใจผู้รับบริการ และการดูแลจิตใจตามกระบวนการบำบัดทางจิตวิทยาคลินิก ภายใต้มาตรฐานและจริยธรรมวิชาชีพอย่างเคร่งครัด",
            en: "MindBloom Clinic's providers are licensed clinical psychologists practicing under MindBloom Clinic, license no. 10109003467, in accordance with the Medical Facility Act B.E. 2541. Our psychologists are skilled in psychological assessment, understanding each client, and providing care through clinical psychology processes under strict professional standards and ethics.",
          })}
        </span>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="bg-main-pink px-6 py-4 flex justify-center items-center rounded-2xl w-full max-w-103.25 shadow-lg self-start"
        >
          <span className="rf-body text-white text-center whitespace-pre-line">
            {t({
              th: "พร้อมจะรับฟังคุณด้วยความเข้าใจ \nและอยู่เคียงข้างคุณในทุกการเปลี่ยนแปลง",
              en: "Ready to listen with understanding\nand stay beside you through every change",
            })}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
          className="bg-[#EBCDC9] px-6 py-4 flex justify-center items-center rounded-2xl w-full max-w-103.25 shadow-lg self-end"
        >
          <span className="rf-body text-white text-center whitespace-pre-line">
            {t({
              th: "ไม่เพียงแต่เป็นผู้รับฟัง แต่จะช่วยให้คุณเติบโตขึ้นได้\nจากทรัพยากรที่มีอยู่ในตัวของคุณ\nนำทีมโดยนักจิตวิทยาคลินิกที่มีประสบการณ์\nด้านการดูแลสุขภาพใจมาแล้วกว่า 15 ปี",
              en: "Not only here to listen, but also to help you grow\nthrough the strengths already within you.\nLed by clinical psychologists with over 15 years\nof experience in mental health care.",
            })}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="bg-main-pink px-6 py-4 flex justify-center items-center rounded-2xl w-full max-w-103.25 shadow-lg self-start"
        >
          <span className="rf-body text-white text-center whitespace-pre-line">
            {t({
              th: "แนวคิดการบำบัดที่มายด์บลูมใช้\nIntegrative therapy CBT\nMindfulness Positive psychology",
              en: "Approaches used at MindBloom\nIntegrative Therapy, CBT,\nMindfulness, and Positive Psychology",
            })}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
          className="bg-[#EBCDC9] px-6 py-4 flex justify-center items-center rounded-2xl w-full max-w-103.25 shadow-lg self-end"
        >
          <span className="rf-body text-white text-center whitespace-pre-line">
            {t({
              th: "โปรแกรมของเราสามารถปรับแต่งได้อย่างเต็มที่เพื่อแก้ไข\nปัญหาเฉพาะด้านของลูกค้าแต่ละราย",
              en: "Our programs can be tailored\nto each client's unique concerns.",
            })}
          </span>
        </motion.div>
      </div>

      <section className="flex flex-col items-center mt-10 gap-6 w-full">
        <p className="text-[32px] text-neutral-black">
          {t({ th: "รายชื่อนักจิตวิทยาคลินิก", en: "Clinical Psychologists" })}
        </p>

        <div className="flex flex-col items-start gap-3 w-full max-w-2xl self-start">
          <div className="flex gap-3">
            <div className="flex items-center gap-2 border border-[#E5DACF] rounded-full px-4 py-2 bg-white flex-1">
              <svg
                className="w-4 h-4 text-neutral-grey shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path
                  d="M20 20L16.5 16.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={t({
                  th: "ค้นหาชื่อนักจิตวิทยา",
                  en: "Search psychologist name",
                })}
                className="outline-none bg-transparent rf-small text-neutral-grey w-full"
              />
            </div>
            <button
              type="button"
              onClick={() => setFilterOpen((open) => !open)}
              className={`flex items-center gap-2 border rounded-full px-4 py-2 rf-small transition-colors ${
                filterOpen || selectedTopics.length > 0
                  ? "border-[#CACFC3] bg-[#CACFC3] text-white"
                  : "border-[#E5DACF] bg-white text-neutral-grey"
              }`}
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6H20M7 12H17M10 18H14"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
              {t({ th: "หัวข้อปรึกษา", en: "Topics" })}
              {selectedTopics.length > 0 && (
                <span className="bg-white text-[#CACFC3] rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                  {selectedTopics.length}
                </span>
              )}
            </button>
          </div>

          <AnimatePresence>
            {filterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="border border-[#E5DACF] rounded-2xl bg-white p-4 flex flex-col gap-3"
              >
                <p className="rf-small font-semibold text-neutral-grey flex items-center gap-2">
                  <svg className="w-3 h-3" viewBox="0 0 10 6" fill="currentColor">
                    <path d="M0 6L5 0L10 6H0Z" />
                  </svg>
                  {t({ th: "หัวข้อปรึกษา", en: "Topics" })}
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedTopics([])}
                    className={`rounded-full px-4 py-1.5 rf-small transition-colors ${
                      selectedTopics.length === 0
                        ? "bg-[#CACFC3] text-white"
                        : "border border-[#E5DACF] text-neutral-grey"
                    }`}
                  >
                    {t({ th: "ทั้งหมด", en: "All" })}
                  </button>
                  {allTopics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => toggleTopic(topic)}
                      className={`rounded-full px-4 py-1.5 rf-small transition-colors ${
                        selectedTopics.includes(topic)
                          ? "bg-[#CACFC3] text-white"
                          : "border border-[#E5DACF] text-neutral-grey"
                      }`}
                    >
                      {getLocalizedText(psychologistTopicLabels[topic], language)}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full items-start justify-items-center lg:justify-items-stretch">
          {filtered.map((psychologist, index) => (
            <motion.article
              key={psychologist.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative flex h-auto min-h-[34.75rem] flex-col gap-3 overflow-hidden rounded-3xl border border-[#C6D5C4] bg-white p-4 max-w-124.75"
            >
              <img
                src={images.psychoBg}
                alt=""
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "fill",
                  display: "block",
                }}
              />
              <div className="relative z-10 flex flex-col gap-4">
                <div className="gap-4 items-end grid grid-cols-2">
                  <img
                    src={psychologist.photo}
                    alt={getLocalizedText(psychologist.name, language)}
                    className="mx-auto h-44 w-44 rounded-2xl object-cover object-top shrink-0 s:mx-0 s:h-55.5 s:w-55.5"
                  />
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="rf-body font-bold text-main-pink">
                      {t({ th: "นักจิตวิทยาคลินิก", en: "Clinical Psychologist" })}
                    </span>
                    <p className="text-xl font-normal leading-tight break-words text-neutral-black">
                      {getLocalizedText(psychologist.name, language)}
                    </p>
                  </div>
                </div>

                <div className="grid gap-x-4 gap-y-4 grid-cols-2">
                  <div className="flex flex-col gap-2 text-left">
                    <div>
                      <p className="rf-body font-bold text-main-pink">
                        {t({ th: "ชื่อเล่น", en: "Nickname" })}
                      </p>
                      <p className="rf-body text-neutral-grey">
                        {getLocalizedText(psychologist.nickname, language)}
                      </p>
                    </div>
                    <div>
                      <p className="rf-body font-bold text-main-pink">
                        {t({ th: "ใบประกอบโรคศิลปะ", en: "Professional License" })}
                      </p>
                      <p className="rf-body text-neutral-grey">
                        {getLocalizedText(psychologist.license, language)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-left">
                    <div>
                      <p className="rf-body font-bold text-main-pink">
                        {t({ th: "แนวทางการบำบัด", en: "Therapeutic Approach" })}
                      </p>
                      <p className="rf-body break-words text-neutral-grey">
                        {getLocalizedText(psychologist.approach, language)}
                      </p>
                    </div>
                    <div>
                      <p className="rf-body font-bold text-main-pink">
                        {t({ th: "คุณค่าที่ให้ความสำคัญ", en: "Core Value" })}
                      </p>
                      <p className="rf-body break-words text-neutral-grey">
                        {getLocalizedText(psychologist.value, language)}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-1.5 rf-body font-bold text-main-pink text-left">
                    {t({ th: "ประเด็นที่สนใจ", en: "Areas of Focus" })}
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-start">
                    {psychologist.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-[#C6D5C4] px-3 py-1 text-[14px] text-white"
                      >
                        {getLocalizedText(psychologistTopicLabels[topic], language)}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="rf-small break-words pb-2 text-center font-normal leading-snug text-[#4D738F]">
                  "{getLocalizedText(psychologist.quote, language)}"
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PhycologistPage;
