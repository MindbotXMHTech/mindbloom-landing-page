import { svgs } from "../../constants/svgs";
import { motion } from "framer-motion";

const ContactButton = () => {
  return (
    <motion.button
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.85 }}
      className="fixed bottom-8 right-30 bg-white px-2 py-1 rounded-full flex justify-center items-center gap-2.5 cursor-pointer"
    >
      <a
        href="https://line.me/R/ti/p/@mindbloom"
        target="_blank"
        rel="noreferrer"
        className="flex justify-start items-center gap-2"
      >
        <img src={svgs.contactIcon} alt="contact us" width={24} height={24} />
        <p className="rf-nav">ติดต่อเรา</p>
      </a>
    </motion.button>
  );
};

export default ContactButton;
