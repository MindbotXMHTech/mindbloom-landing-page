import { motion, type Variants } from "framer-motion";

function HomePage() {
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
    <div className="w-full  flex flex-col items-center mt-14.75">
      <section className="flex flex-col items-center justify-start gap-4 l:max-w-1/2 h-[80vh] ">
        <h1 className="rf-h1 font-normal">พื้นที่ปลอดภัยสำหรับดูแลจิตใจ</h1>
        <h1 className="text-xl text-center font-bold">ผ่านวิดีโอคอล</h1>

        <motion.div
          className="w-full mx-auto flex flex-col"
          variants={bubbleListVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.div
            variants={bubbleItemVariants}
            className="bg-white px-6 py-2 rounded-3xl w-fit shadow-[0px_0px_20px_0px_rgba(255,255,255,1)] my-6 min-w-60.5 self-start translate-x-22.25"
          >
            <p className="text-center text-neutral-grey">
              <span className="font-semibold">โดย นักจิตวิทยา</span>
              <br />
              มากประสบการณ์
            </p>
          </motion.div>

          <motion.div
            variants={bubbleItemVariants}
            className="bg-white px-6 py-2 rounded-3xl w-fit shadow-[0px_0px_20px_0px_rgba(255,255,255,1)] my-6 min-w-60.5 self-end"
          >
            <p className="text-center text-neutral-grey">
              <span className="font-semibold">ให้บริการตามมาตรฐาน</span>
              <br />
              และจรรยาบรรณวิชาชีพ
            </p>
          </motion.div>

          <motion.div
            variants={bubbleItemVariants}
            className="bg-white px-6 py-2 rounded-3xl w-fit shadow-[0px_0px_20px_0px_rgba(255,255,255,1)] my-6 min-w-60.5 self-start"
          >
            <p className="text-center text-neutral-grey font-semibold">
              <span className="font-normal">ให้บริการทั้งแบบ</span>
              <br />
              พบหน้าที่คลินิก และแบบออนไลน์
            </p>
          </motion.div>

          <motion.div
            variants={bubbleItemVariants}
            className="bg-white px-6 py-2 rounded-3xl w-fit shadow-[0px_0px_20px_0px_rgba(255,255,255,1)] my-6 min-w-60.5 self-end -translate-x-22.25"
          >
            <p className="text-center text-neutral-grey font-semibold">
              <span className="font-normal">
                คัดเลือกนักจิตวิทยาที่เหมาะสมกับ
              </span>
              <br />
              ความต้องการและประเด็นของคุณ
            </p>
          </motion.div>
        </motion.div>
      </section>
      <section className="flex flex-col items-center justify-start gap-12 mt-14.75 h-[80vh] max-w-203.25">
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
          <p className="rf-title">เราเชื่อว่า</p>
          <p className="rf-body text-center text-neutral-grey">
            ทุกคนมีความสวยงามและมีคุณค่าในตัวเอง พร้อมที่จะเติบโตและเบ่งบาน
            (Blossom)
            เพียงแค่บางช่วงเวลาอาจต้องการการดูแลและสิ่งแวดล้อมที่ปลอดภัยเป็นพิเศษ
          </p>

          <div className="bg-white px-6 py-2 flex justify-center items-center rounded-3xl">
            <p className="rf-body font-bold">ปัญหาที่เราดูแล</p>
          </div>
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
          className="flex flex-col items-center gap-6 mt-27.5"
        >
          <p className="rf-title">คุณค่าของเรา</p>
          <p className="text-body text-center text-neutral-grey">
            MindBloom คือพันธมิตรด้านสุขภาพจิต <br />
            ที่ช่วยสร้างสิ่งแวดล้อมทางใจที่ปลอดภัย
            <br />
            เพื่อให้บุคลากรทำงานและใช้ชีวิตได้อย่างยั่งยืน
          </p>
          <div className="bg-white px-6 py-2 flex justify-center items-center rounded-3xl">
            <p className="rf-body font-bold">นักจิตวิทยา</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;
