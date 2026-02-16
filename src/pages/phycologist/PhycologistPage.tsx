import { images } from "../../constants/images";
import { motion } from "framer-motion";

function PhycologistPage() {
  return (
    <div className="mt-14.75 w-full l:max-w-212.5 px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <div className="flex flex-col items-center justify-start w-full gap-6 sm:gap-8 md:gap-9.5">
        <h4 className="rf-h4">นักจิตวิทยา</h4>
        <span className="rf-title font-normal text-neutral-grey text-center max-w-272">
          ผู้ให้บริการของนายด์บลูมเป็นผู้ประกอบ โรศ.ศิลปะ สาขาจิตวิทยาคลินิก
          ตามพระราชบัญญัติการประกอบโรคศิลปะ พ.ศ 23336 จึงมีทักษะต่าง ๆ
          ทั้งด้านการประเมินภาวะทางจิตใจการทำความเข้าใจผู้รับบริการและดูแลจิตใจตาม
          กระบวนการมาบำบัดทางจิตจิตวิทยาคลินิคภายใต้ มาตรฐานและอริยธรรรรมวิชาชีพ
          อย่างเคร่งครัด
        </span>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            ease: "easeOut" as const,
          }}
          className="bg-main-pink px-6 py-4 flex justify-center items-center rounded-[40px] w-full max-w-109.5 shadow-lg"
        >
          <span className="rf-title text-white text-center">
            พร้อมจะรับฟังคุณด้วยความเข้าใจ
            และอยู่เคียงข้างคุณในทุกการเปลี่ยนแปลง
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeOut" as const,
          }}
          className="bg-main-pink px-6 py-4 flex justify-center items-center rounded-[40px] w-full max-w-133.5 shadow-lg"
        >
          <span className="rf-title text-white text-center">
            ไม่เพียงแต่เป็นผู้รับฟัง แต่จะช่วยให้คุณเดิบโตขึ้นได้ <br />
            จากทรัพยากรที่มีอยู่ในตัวของคุณ
            <br />
            นำทีมโดยนักจัดวิทยาคลินิทที่มีประสบการณ์
            <br />
            ด้านการดูแลสุขภาพใจมาแล้วกว่า 15 ปี
          </span>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-16 sm:mt-24 md:mt-37.25 mb-16 sm:mb-24 md:mb-30 gap-4 sm:gap-5 w-full max-w-216">
        <motion.div
          initial={{ opacity: 0.5, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            ease: "easeOut" as const,
          }}
          className="w-full max-w-104 aspect-square overflow-hidden rounded-3xl justify-self-center"
        >
          <img
            src={images.therapist1}
            alt="panida"
            className="block w-full h-full object-cover scale-110 origin-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            ease: "easeOut" as const,
          }}
          className="w-full max-w-104 aspect-square overflow-hidden rounded-3xl justify-self-center"
        >
          <img
            src={images.therapist2}
            alt="anuttara"
            className="block w-full h-full object-cover scale-110 origin-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: "easeOut" as const,
          }}
          className="w-full max-w-104 aspect-square overflow-hidden rounded-3xl justify-self-center"
        >
          <img
            src={images.therapist3}
            alt="sujikpuk"
            className="block w-full h-full object-cover scale-110 origin-center"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0.5, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
            ease: "easeOut" as const,
          }}
          className="w-full max-w-104 aspect-square overflow-hidden rounded-3xl justify-self-center"
        >
          <img
            src={images.therapist4}
            alt="jitti"
            className="block w-full h-full object-cover scale-110 origin-center"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default PhycologistPage;
