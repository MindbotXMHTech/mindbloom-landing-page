import { useState, useMemo } from "react";
import { images } from "../../constants/images";
import { motion, AnimatePresence } from "framer-motion";

const psychologists = [
  {
    id: 1,
    photo: images.psycho1,
    name: "พณิดา โยมะบุตร",
    nickname: "ดาว",
    license: "จค. 462",
    approach: "จิตวิทยาแบบผสมผสาน",
    value: "Peace of Mind",
    topics: [
      "ความสัมพันธ์",
      "การปรับตัว",
      "อารมณ์",
      "พฤติกรรม",
      "ปัญหาความคิด",
      "บุคลิกภาพ",
    ],
    quote:
      "เราทุกคนมีศักยภาพในการก้าวข้าม ผ่านช่วงเวลายากลำบากได้มากกว่าที่เราคิด",
  },
  {
    id: 2,
    photo: images.psycho2,
    name: "อนุตตรา รานี",
    nickname: "ชีเกนส์",
    license: "จค. 1385",
    approach: "Satir Model & CBT",
    value: "Emotional Safe Space",
    topics: [
      "ความสัมพันธ์",
      "การปรับตัว",
      "อารมณ์",
      "ความเครียด",
      "ซึมเศร้า",
      "การงาน",
    ],
    quote:
      "เราทุกคนมีศักยภาพในการก้าวข้าม ผ่านช่วงเวลายากลำบากได้มากกว่าที่เราคิด",
  },
  {
    id: 3,
    photo: images.psycho3,
    name: "สุจิตรภัค ศรีสุพรรณราช",
    nickname: "กานพลู",
    license: "จค. 1400",
    approach: "Supportive Psychotherapy",
    value: "Case's Value and Identity",
    topics: ["ความสัมพันธ์", "การปรับตัว", "อารมณ์", "ความเครียด", "การงาน"],
    quote:
      "ดอกไม้ทุกดอกมีความสวยงาม เพียงแค่รอเวลาและสิ่งแวดล้อมที่เหมาะสมในการผลิบาน",
  },
  {
    id: 4,
    photo: images.psycho4,
    name: "จิตติ กันกำธรวงศ์",
    nickname: "ฉิ่น",
    license: "จค. 1562",
    approach: "Humanistic Approach",
    value: "Determination",
    topics: [
      "ความสัมพันธ์",
      "การปรับตัว",
      "อารมณ์",
      "ความเครียด",
      "ซึมเศร้า",
      "การงาน",
    ],
    quote: "ขอแค่เราไม่ยอมแพ้ เราก็ยังลุกขึ้นมาลองใหม่ได้เสมอ",
  },
];

const allTopics = Array.from(new Set(psychologists.flatMap((p) => p.topics)));

function PhycologistPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic],
    );
  };

  const filtered = useMemo(() => {
    return psychologists.filter((psy) => {
      const q = searchText.toLowerCase();
      const matchesSearch =
        psy.name.toLowerCase().includes(q) ||
        psy.nickname.toLowerCase().includes(q);
      const matchesTopics =
        selectedTopics.length === 0 ||
        selectedTopics.some((t) => psy.topics.includes(t));
      return matchesSearch && matchesTopics;
    });
  }, [searchText, selectedTopics]);

  return (
    <div className="my-14.75 w-full l:max-w-298 px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <div className="flex flex-col items-center justify-start w-full gap-6 sm:gap-8 md:gap-9.5 max-w-215">
        <h4 className="rf-h4">นักจิตวิทยา</h4>
        <span className="rf-body font-normal text-neutral-grey text-center max-w-272">
          ผู้ให้บริการของมายด์บลูมคลินิกเป็นนักจิตวิทยาคลินิกผู้มีใบอนุญาตประกอบโรคศิลปะสาขาจิตวิทยาคลินิก
          โดยทำงานอยู่ภายใต้ มายด์บลูมคลินิก ใบอนุญาตเลขที่ 10109003467
          ตามพระราชบัญญัติสถานพยาบาล พ.ศ. 2541
          ทำให้นักจิตวิทยาคลินิกของเรามีทักษะทั้งในด้านการประเมินภาวะทางจิตใจ
          การทำความเข้าใจผู้รับบริการ
          และการดูแลจิตใจตามกระบวนการบำบัดทางจิตวิทยาคลินิก ภายใต้มาตรฐาน
          และจริยธรรมวิชาชีพอย่างเคร่งครัด
        </span>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="bg-main-pink px-6 py-4 flex justify-center items-center rounded-2xl w-full max-w-103.25 shadow-lg self-start"
        >
          <span className="rf-body text-white text-center">
            พร้อมจะรับฟังคุณด้วยความเข้าใจ <br />
            และอยู่เคียงข้างคุณในทุกการเปลี่ยนแปลง
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
          className="bg-[#EBCDC9] px-6 py-4 flex justify-center items-center rounded-2xl w-full max-w-103.25 shadow-lg self-end"
        >
          <span className="rf-body text-white text-center">
            ไม่เพียงแต่เป็นผู้รับฟัง แต่จะช่วยให้คุณเติบโตขึ้นได้ <br />
            จากทรัพยากรที่มีอยู่ในตัวของคุณ
            <br />
            นำทีมโดยนักจิตวิทยาคลินิกที่มีประสบการณ์
            <br />
            ด้านการดูแลสุขภาพใจมาแล้วกว่า 15 ปี
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="bg-main-pink px-6 py-4 flex justify-center items-center rounded-2xl w-full max-w-103.25 shadow-lg self-start"
        >
          <span className="rf-body text-white text-center">
            แนวคิดการบำบัดที่มายด์บลูมใช้ <br /> Integrative therapy CBT <br />
            Mindfulness Positive psychology
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" as const }}
          className="bg-[#EBCDC9] px-6 py-4 flex justify-center items-center rounded-2xl w-full max-w-103.25 shadow-lg self-end"
        >
          <span className="rf-body text-white text-center">
            โปรแกรมของเราสามารถปรับแต่งได้อย่างเต็มที่เพื่อแก้ไข <br />
            ปัญหาเฉพาะด้านของลูกค้าแต่ละราย
          </span>
        </motion.div>
      </div>

      <section className="flex flex-col items-center mt-10 gap-6 w-full">
        <p className="text-[32px] text-neutral-black">
          รายชื่อนักจิตวิทยาคลินิก
        </p>

        {/* Search & Filter */}
        <div className="flex flex-col items-start gap-3 w-full max-w-2xl self-start">
          <div className="flex gap-3">
            <div className="flex items-center gap-2 border border-[#E5DACF] rounded-full px-4 py-2 bg-white flex-1">
              <svg
                className="w-4 h-4 text-neutral-grey shrink-0"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
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
                placeholder="ค้นหาชื่อนักจิตวิทยา"
                className="outline-none bg-transparent rf-small text-neutral-grey w-full"
              />
            </div>
            <button
              type="button"
              onClick={() => setFilterOpen((o) => !o)}
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
              หัวข้อปรึกษา
              {selectedTopics.length > 0 && (
                <span className="bg-white text-[#CACFC3] rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                  {selectedTopics.length}
                </span>
              )}
            </button>
          </div>

          {/* Filter panel */}
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
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 10 6"
                    fill="currentColor"
                  >
                    <path d="M0 6L5 0L10 6H0Z" />
                  </svg>
                  หัวข้อปรึกษา
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
                    ทั้งหมด
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
                      {topic}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 m:grid-cols-2 gap-4 w-full items-start justify-items-center m:justify-items-stretch">
          {filtered.map((psy, index) => (
            <motion.article
              key={psy.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative flex flex-col overflow-hidden rounded-3xl gap-3 max-w-124.75 h-134.75 p-4 border border-[#C6D5C4] bg-white"
            >
              {/* Full-card background image */}
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
              <div className="relative flex flex-col gap-4 z-10">
                {/* Top: photo + name */}
                <div className="gap-4 items-end grid grid-cols-2">
                  <img
                    src={psy.photo}
                    alt={psy.name}
                    className="w-55.5 h-55.5 object-cover object-top rounded-2xl shrink-0"
                  />
                  <div className="flex flex-col gap-1 pt-1">
                    <span className="rf-body font-bold text-main-pink">
                      นักจิตวิทยาคลินิก
                    </span>
                    <p className="text-xl font-normal text-neutral-black leading-tight">
                      {psy.name}
                    </p>
                  </div>
                </div>

                {/* Middle: 2-col info */}
                <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="rf-body font-bold text-main-pink">
                        นักจิตวิทยาคลินิก
                      </p>
                      <p className="rf-body text-neutral-grey">
                        {psy.nickname}
                      </p>
                    </div>
                    <div>
                      <p className="rf-body font-bold text-main-pink">
                        ใบประกอบโรคศิลปะ
                      </p>
                      <p className="rf-body text-neutral-grey">{psy.license}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <p className="rf-body font-bold text-main-pink">
                        แนวทางการบำบัด
                      </p>
                      <p className="rf-body text-neutral-grey">
                        {psy.approach}
                      </p>
                    </div>
                    <div>
                      <p className="rf-body font-bold text-main-pink">
                        คุณค่าที่ให้ความสำคัญ
                      </p>
                      <p className="rf-body text-neutral-grey">{psy.value}</p>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div>
                  <p className="rf-body font-bold text-main-pink mb-1.5">
                    ปัญหาที่สนใจ
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {psy.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full bg-[#C6D5C4] px-3 py-1 text-[14px] text-white"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="rf-small text-[#4D738F] font-normal text-center leading-snug">
                  "{psy.quote}"
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
