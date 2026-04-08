import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { svgs } from "../../constants/svgs";
import { useLanguage } from "../../i18n/LanguageProvider";

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    "transition-colors duration-200 px-4 py-2",
    isActive
      ? "text-neutral-black font-semibold"
      : "text-neutral-grey font-normal hover:text-neutral-black",
  ].join(" ");

const mobileLinkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    "w-full rounded-2xl px-5 py-4 text-left text-lg transition-colors duration-200",
    isActive
      ? "bg-[#F4EEE8] text-neutral-black font-semibold"
      : "text-neutral-grey font-normal hover:bg-[#F9F5F1] hover:text-neutral-black",
  ].join(" ");

const navItems = [
  { to: "/", label: { th: "หน้าหลัก", en: "Home" }, end: true },
  { to: "/service", label: { th: "บริการของเรา", en: "Services" }, end: false },
  {
    to: "/psychologist",
    label: { th: "นักจิตวิทยา", en: "Psychologists" },
    end: false,
  },
  { to: "/activity", label: { th: "กิจกรรม", en: "Activities" }, end: false },
  { to: "/blog", label: { th: "บทความ", en: "Blog" }, end: false },
  {
    href: "https://psycho-scope.com",
    label: { th: "Psycho-scope", en: "Psycho-scope" },
  },
  { to: "/about", label: { th: "เกี่ยวกับเรา", en: "About Us" }, end: false },
] as const;

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    document.body.dataset.mobileMenuOpen = isMobileMenuOpen ? "true" : "false";
    window.dispatchEvent(
      new CustomEvent("mobile-menu-toggle", {
        detail: { isOpen: isMobileMenuOpen },
      }),
    );

    return () => {
      document.body.style.overflow = "";
      document.body.dataset.mobileMenuOpen = "false";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 769px)");

    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMobileMenuOpen(false);
      }
    };

    desktopMediaQuery.addEventListener("change", handleDesktopChange);

    return () => {
      desktopMediaQuery.removeEventListener("change", handleDesktopChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full px-6 py-5 flex items-center justify-between transition-colors duration-300 ${
        isScrolled && !isMobileMenuOpen ? " backdrop-blur-md" : ""
      } ${isMobileMenuOpen ? "z-[9998]" : "z-50"}`}
    >
      <img
        src={svgs.logoMindbloom}
        alt="mindbloom"
        width={65}
        height={34}
        className="object-cover"
      />

      <div className="hidden m:flex flex-1 items-center justify-center gap-5 text-base">
        {navItems.map((item) => (
          "to" in item ? (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkClassName}
            >
              {t(item.label)}
            </NavLink>
          ) : (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200 px-4 py-2 text-neutral-grey font-normal hover:text-neutral-black"
            >
              {t(item.label)}
            </a>
          )
        ))}
      </div>

      <div className="hidden m:flex items-center gap-3">
        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={
            language === "th"
              ? "Switch website language to English"
              : "เปลี่ยนภาษาเว็บไซต์เป็นภาษาไทย"
          }
          className="inline-flex items-center rounded-full border border-[#E5DACF] bg-white px-3 py-2 text-sm font-semibold text-neutral-black shadow-sm transition-colors hover:bg-[#F9F5F1]"
        >
          {language === "th" ? "EN" : "TH"}
        </button>
      </div>

      <button
        type="button"
        aria-label={
          isMobileMenuOpen
            ? t({ th: "ปิดเมนู", en: "Close menu" })
            : t({ th: "เปิดเมนู", en: "Open menu" })
        }
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((open) => !open)}
        className="m:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5DACF] bg-white text-neutral-black shadow-sm transition-colors hover:bg-[#F9F5F1]"
      >
        {isMobileMenuOpen ? (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {isMobileMenuOpen && (
        <div className="m:hidden fixed inset-0 z-[9999] bg-[rgba(34,27,20,0.24)] backdrop-blur-sm px-6 py-6">
          <div className="ml-auto flex h-full w-full max-w-90 flex-col rounded-4xl bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between">
              <img
                src={svgs.logoMindbloom}
                alt="mindbloom"
                width={65}
                height={34}
                className="object-cover"
              />
              <button
                type="button"
                aria-label={t({ th: "ปิดเมนู", en: "Close menu" })}
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E5DACF] bg-white text-neutral-black transition-colors hover:bg-[#F9F5F1]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-8 flex flex-1 flex-col gap-2">
              {navItems.map((item) => (
                "to" in item ? (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={mobileLinkClassName}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.label)}
                  </NavLink>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full rounded-2xl px-5 py-4 text-left text-lg transition-colors duration-200 text-neutral-grey font-normal hover:bg-[#F9F5F1] hover:text-neutral-black"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(item.label)}
                  </a>
                )
              ))}
            </div>

            <button
              type="button"
              onClick={toggleLanguage}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-[#E5DACF] px-5 py-3 text-base font-semibold text-neutral-black transition-colors hover:bg-[#F9F5F1]"
            >
              {t({
                th: `ภาษา: ${language === "th" ? "ไทย" : "English"}`,
                en: `Language: ${language === "th" ? "Thai" : "English"}`,
              })}
            </button>

            {/* <p className="mt-6 px-5 text-sm text-neutral-grey">
              {pathname === "/"
                ? "Mindbloom Wellness"
                : "Navigate to explore more"}
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
