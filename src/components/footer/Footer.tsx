import { Link } from "react-router-dom";
import { svgs } from "../../constants/svgs";
import footerTopRightDecor from "../../assets/images/footer/footer-top-right-decor.svg";
import footerBottomLeftDecor from "../../assets/images/footer/footer-bottom-left-decor.svg";
import footerBottomLeftCurve from "../../assets/images/footer/footer-bottom-left-curve.svg";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useLanguage } from "../../i18n/LanguageProvider";

const navLinks = [
  { to: "/", label: { th: "หน้าแรก", en: "Home" } },
  { to: "/service", label: { th: "บริการของเรา", en: "Services" } },
  { to: "/psychologist", label: { th: "นักจิตวิทยา", en: "Psychologists" } },
  { to: "/activity", label: { th: "กิจกรรม", en: "Activities" } },
  { to: "/blog", label: { th: "บทความ", en: "Blog" } },
  { to: "/about", label: { th: "เกี่ยวกับเรา", en: "About Us" } },
] as const;

const legalLinks = [
  {
    to: "/term-condition",
    label: { th: "ข้อกำหนดและเงื่อนไข", en: "Terms and Conditions" },
  },
  {
    to: "/policy",
    label: { th: "นโยบายความเป็นส่วนตัว", en: "Privacy Policy" },
  },
] as const;

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer
      className="relative w-full overflow-hidden px-6 py-12 text-neutral-black s:px-8 m:px-10 l:px-12 z-0"
      style={{
        background: "linear-gradient(180deg, #E5DACF 89.59%, #C7A491 166.54%)",
      }}
    >
      <img
        src={footerTopRightDecor}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-0 w-20 s:w-24 m:w-28"
      />
      <img
        src={footerBottomLeftDecor}
        alt=""
        aria-hidden
        className="pointer-events-none absolute left-0 bottom-0 z-0 w-16 s:w-20 m:w-24"
      />
      <img
        src={footerBottomLeftCurve}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 z-0 w-40 s:right-0 s:w-64 m:left-0 m:w-md opacity-70"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 s:gap-12">
        <img
          src={svgs.logoMindbloom}
          alt="mindbloom"
          width={65}
          height={34}
          className="object-contain"
        />

        <div className="flex flex-col gap-10 s:gap-12 m:grid m:grid-cols-[minmax(0,1.45fr)_minmax(0,0.8fr)_minmax(0,0.95fr)] m:items-start m:gap-12">
          <div className="flex flex-col gap-6 text-center s:max-w-176 s:items-center s:text-center m:max-w-110 m:items-start m:text-left">
            <p className="rf-title font-bold">
              {t({
                th: "บริษัท มายด์บอท จำกัด (สำนักงานใหญ่)",
                en: "Mindbot Co., Ltd. (Head Office)",
              })}
            </p>

            <div className="flex flex-col gap-5 text-neutral-black s:items-center m:items-start">
              <p className="rf-body leading-7 block s:hidden text-center m:text-left">
                {t({
                  th: "มายด์บลูม คลินิกการประกอบ โรคศิลปะสาขาจิตวิทยาคลินิก",
                  en: "MindBloom Clinic for the Practice of the Art of Healing in Clinical Psychology",
                })}
                <br />
                {t({
                  th: "ใบอนุญาตเลขที่ 10109003467",
                  en: "License No. 10109003467",
                })}
              </p>

              <p className="rf-body leading-7 hidden s:block m:hidden text-center whitespace-nowrap">
                {t({
                  th: "มายด์บลูม คลินิกการประกอบ โรคศิลปะสาขาจิตวิทยาคลินิก",
                  en: "MindBloom Clinic for the Practice of the Art of Healing in Clinical Psychology",
                })}
                <br />
                {t({
                  th: "ใบอนุญาตเลขที่ 10109003467",
                  en: "License No. 10109003467",
                })}
              </p>

              <p className="rf-body leading-7 hidden m:block text-left">
                {t({
                  th: "มายด์บลูม คลินิกการประกอบ",
                  en: "MindBloom Clinic for the Practice",
                })}
                <br />
                {t({
                  th: "โรคศิลปะสาขาจิตวิทยาคลินิก",
                  en: "of the Art of Healing in Clinical Psychology",
                })}
                <br />
                {t({
                  th: "ใบอนุญาตเลขที่ 10109003467",
                  en: "License No. 10109003467",
                })}
              </p>

              <p className="rf-body leading-7 block s:hidden text-center m:text-left">
                {t({
                  th: "292/5 ถ.จรัญสนิทวงศ์ แขวงศิริราช",
                  en: "292/5 Charan Sanitwong Rd., Siriraj",
                })}
                <br />
                {t({
                  th: "เขตบางกอกน้อย กรุงเทพฯ 10700",
                  en: "Bangkok Noi, Bangkok 10700",
                })}
              </p>

              <p className="rf-body leading-7 hidden s:block m:hidden text-center whitespace-nowrap">
                {t({
                  th: "292/5 ถ.จรัญสนิทวงศ์ แขวงศิริราช เขตบางกอกน้อย กรุงเทพฯ 10700",
                  en: "292/5 Charan Sanitwong Rd., Siriraj, Bangkok Noi, Bangkok 10700",
                })}
              </p>

              <p className="rf-body leading-7 hidden m:block text-left">
                {t({
                  th: "292/5 ถ.จรัญสนิทวงศ์ แขวงศิริราช",
                  en: "292/5 Charan Sanitwong Rd., Siriraj",
                })}
                <br />
                {t({
                  th: "เขตบางกอกน้อย กรุงเทพฯ 10700",
                  en: "Bangkok Noi, Bangkok 10700",
                })}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-neutral-black s:grid s:grid-cols-2 s:justify-items-center s:gap-x-16 s:gap-y-0 m:contents">
            <div className="flex flex-col gap-4 s:gap-8 m:gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rf-body transition-colors hover:text-neutral-black text-left"
                >
                  {t(item.label)}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-6 text-neutral-black s:gap-8 m:gap-6">
              <div className="flex flex-col gap-4 s:gap-8 m:gap-4">
                {legalLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="rf-body transition-colors hover:text-neutral-black text-left"
                  >
                    {t(item.label)}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-4 pt-2 s:gap-8 m:gap-4">
                <a
                  href="tel:+66838346595"
                  className="flex items-center gap-2.5 transition-opacity hover:opacity-80 s:gap-3 justify-start"
                >
                  {/* <img src={svgs.lineIcon} alt="line" width={24} height={24} /> */}
                  <LocalPhoneIcon sx={{ fontSize: 24, color: "#D6ACA6" }} />
                  <span className="rf-body">+66 83 834 6595</span>
                </a>

                <a
                  href="https://line.me/R/ti/p/@mindbloom"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 transition-opacity hover:opacity-80 s:gap-3 justify-start"
                >
                  <img src={svgs.lineIcon} alt="line" width={24} height={24} />
                  <span className="rf-body">Line</span>
                </a>

                <a
                  href="https://www.facebook.com/mindbloom.th/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 transition-opacity hover:opacity-80 s:gap-3 justify-start"
                >
                  <img
                    src={svgs.facebookIcon}
                    alt="facebook"
                    width={24}
                    height={24}
                  />
                  <span className="rf-body">Facebook</span>
                </a>

                <a
                  href="https://mindbot-tech.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 s:gap-3 justify-start"
                >
                  <img
                    src={svgs.logoMindbot}
                    alt="mindbot"
                    width={24}
                    height={24}
                  />
                  <span className="rf-body">
                    {t({
                      th: "บริษัทมายด์บอท จำกัด",
                      en: "Mindbot Co., Ltd.",
                    })}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
