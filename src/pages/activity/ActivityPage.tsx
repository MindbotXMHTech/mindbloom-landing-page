import CustomButton from "../../components/button/CustomButton";
import { images } from "../../constants/images";
import { motion } from "framer-motion";

function ActivityPage() {
  return (
    <div className="mt-14.75 w-full l:max-w-212.5 px-4 sm:px-6 md:px-8 flex flex-col items-center">
      <h4 className="rf-h4">กิจกรรม</h4>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.5,
          ease: "easeOut" as const,
        }}
        className="flex flex-col mt-9.5 items-center justify-start gap-4"
      >
        <div className="w-125 h-83.5">
          <img
            src={images.act1}
            alt="mindbloom opening"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="rf-title font-bold text-center">
          Mindbloom Opening and Exhibition
          ขอบคุณที่มาสร้างความอบอุ่นให้สวนดอกไม้แห่งนี้ด้วยกัน
        </p>
        <CustomButton title="ดูกิจกรรม" onClick={() => {}} />
      </motion.div>
    </div>
  );
}

export default ActivityPage;
