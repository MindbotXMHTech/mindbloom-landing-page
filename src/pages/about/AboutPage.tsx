import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { motion } from "framer-motion";
import { svgs } from "../../constants/svgs";
import { useLanguage } from "../../i18n/LanguageProvider";

const contactItems = [
  {
    id: "facebook",
    label: "MindBloom",
    href: "https://www.facebook.com/mindbloom.th/",
    icon: <img src={svgs.facebookIcon} alt="facebook" width={32} height={32} />,
  },
  {
    id: "line",
    label: "MindBloom",
    href: "https://line.me/R/ti/p/@mindbloom",
    icon: <img src={svgs.lineIcon} alt="line" width={32} height={32} />,
  },
  {
    id: "instagram",
    label: "MindBloom",
    href: "https://www.instagram.com/mindbloom.th",
    icon: (
      <img src={svgs.instagramIcon} alt="instagram" width={32} height={32} />
    ),
  },
  {
    id: "phone",
    label: "+66 83 834 6595",
    href: "tel:+66838346595",
    icon: <LocalPhoneIcon sx={{ fontSize: 32, color: "#D6ACA6" }} />,
  },
];

function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="mt-14.75 w-full max-w-245 px-4 s:px-6 m:px-8 pb-24 flex flex-col items-center">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="w-full max-w-212.5 flex flex-col items-center"
      >
        <h1 className="rf-h4 font-normal text-center text-neutral-black">
          {t({ th: "เกี่ยวกับเรา", en: "About Us" })}
        </h1>
        <p className="rf-body text-neutral-grey text-center mt-8 whitespace-pre-line">
          {t({
            th: `บริษัท มายด์บอท จำกัด ก่อตั้งขึ้นในปี 2019 โดยแยกตัวออกมาจากมหาวิทยาลัยมหิดล ซึ่งผสานรวมปัญญาประดิษฐ์ (AI) วิทยาศาสตร์พฤติกรรม และจิตวิทยาคลินิก เพื่อสร้างสรรค์โซลูชันด้านสุขภาวะที่เป็นนวัตกรรมใหม่

บนพื้นฐานนี้ มายด์บลูม จึงถูกก่อตั้งขึ้นในฐานะหน่วยงานเฉพาะด้านการให้บริการด้านสุขภาพจิต
เรามีส่วนร่วมในโครงการที่ไม่แสวงหาผลกำไรอย่างสม่ำเสมอ รวมถึงการบรรยายสาธารณะ แคมเปญที่ใช้ศิลปะเป็นสื่อ และโปรแกรมการศึกษา ที่ออกแบบมาเพื่อส่งเสริมความตระหนักรู้ด้านสุขภาพจิต ลดการตีตรา และสร้างสังคมที่เข้มแข็งยิ่งขึ้น`,
            en: `Mindbot Co., Ltd. was founded in 2019 as a spin-off from Mahidol University, integrating artificial intelligence (AI), behavioral science, and clinical psychology to create innovative wellbeing solutions.

From this foundation, MindBloom was established as a dedicated mental health service unit.
We also regularly contribute to nonprofit initiatives, including public talks, art-based campaigns, and educational programs designed to promote mental health awareness, reduce stigma, and help build a stronger society.`,
          })}
        </p>

        <div className="w-full h-[0.7px] bg-sub-beige mt-3.5" />

        <div className="mt-4 flex items-center justify-center gap-2">
          <img src={svgs.logoMindbot} alt="mind bloom" width={22} height={22} />
          <p className="rf-body text-neutral-grey text-center">
            {t({
              th: "พัฒนาโดย บริษัท มายด์บอท จำกัด ผู้พัฒนาเทคโนโลยีสุขภาพจิต",
              en: "Built by Mindbot Co., Ltd., a mental health technology company",
            })}
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
        className="w-full max-w-212.5 mt-12 flex flex-col items-center"
      >
        <h2 className="rf-h4 font-normal text-center">
          {t({ th: "ช่องทางการติดต่อ", en: "Contact Channels" })}
        </h2>

        <div className="mt-8 w-full grid grid-cols-2 m:grid-cols-4 gap-y-8">
          {contactItems.map((item) =>
            item.href ? (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2"
              >
                {item.icon}
                <p className="rf-nav text-neutral-black text-center">
                  {item.label}
                </p>
              </a>
            ) : (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center gap-2"
              >
                {item.icon}
                <p className="rf-nav text-neutral-black text-center">
                  {item.label}
                </p>
              </div>
            ),
          )}
        </div>
      </motion.section>
    </div>
  );
}

export default AboutPage;
