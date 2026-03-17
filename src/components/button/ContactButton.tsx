import { useEffect, useState } from "react";
import { svgs } from "../../constants/svgs";
import { motion } from "framer-motion";

const ContactButton = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(
    document.body.dataset.mobileMenuOpen === "true",
  );

  useEffect(() => {
    const handleMobileMenuToggle = (event: Event) => {
      const customEvent = event as CustomEvent<{ isOpen: boolean }>;
      setIsMobileMenuOpen(Boolean(customEvent.detail?.isOpen));
    };

    window.addEventListener("mobile-menu-toggle", handleMobileMenuToggle);

    return () => {
      window.removeEventListener("mobile-menu-toggle", handleMobileMenuToggle);
    };
  }, []);

  if (isMobileMenuOpen) {
    return null;
  }

  return (
    <motion.button
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.85 }}
      className="fixed bottom-8 right-10 m:right-30 z-20 bg-white px-2 py-1 rounded-full flex justify-center items-center gap-2.5 cursor-pointer"
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
