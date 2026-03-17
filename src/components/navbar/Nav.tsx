import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { svgs } from "../../constants/svgs";

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
  { to: "/", label: "หน้าหลัก", end: true },
  { to: "/service", label: "บริการของเรา", end: false },
  { to: "/phycologist", label: "นักจิตวิทยา", end: false },
  { to: "/activity", label: "กิจกรรม", end: false },
  { to: "/blog", label: "บทความ", end: false },
  { to: "/about", label: "เกี่ยวกับเรา", end: false },
] as const;

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <div
      className={`relative w-full px-6 mx-auto py-6 flex items-center justify-between  ${
        isMobileMenuOpen ? "z-9998" : "z-50"
      }`}
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
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={linkClassName}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <button
        type="button"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
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
        <div className="m:hidden fixed inset-0 z-9999 bg-black/30 px-6 py-6">
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
                aria-label="Close menu"
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
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={mobileLinkClassName}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

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
