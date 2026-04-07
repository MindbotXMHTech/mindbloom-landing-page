import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { svgs } from "../../constants/svgs";
import { useLanguage } from "../../i18n/LanguageProvider";

const ContactButton = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(
    document.body.dataset.mobileMenuOpen === "true",
  );
  const { t } = useLanguage();

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
    <motion.a
      href="https://line.me/R/ti/p/@mindbloom"
      target="_blank"
      rel="noreferrer"
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.85 }}
      className="fixed bottom-8 right-10 m:right-30 z-20 flex items-center justify-center gap-2.5 rounded-full bg-white px-2 py-1 cursor-pointer"
    >
      <img
        src={svgs.contactIcon}
        alt={t({ th: "ติดต่อเรา", en: "Contact us" })}
        width={24}
        height={24}
      />
      <p className="rf-nav">{t({ th: "ติดต่อเรา", en: "Contact us" })}</p>
    </motion.a>
  );
};

export default ContactButton;
