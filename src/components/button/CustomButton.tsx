import { motion } from "framer-motion";

interface ButtonType {
  title: string;
  onClick: () => void;
  className?: string;
}

const CustomButton = ({ title, onClick, className }: ButtonType) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.85 }}
      className={`bg-white px-4 py-2 rounded-full shadow-lg cursor-pointer ${className}`}
      onClick={onClick}
    >
      <p className="rf-nav">{title}</p>
    </motion.button>
  );
};

export default CustomButton;
