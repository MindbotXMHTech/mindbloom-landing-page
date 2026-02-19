import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { motion } from "framer-motion";
import { svgs } from "../../constants/svgs";

const contactItems = [
  {
    id: "facebook",
    label: "Mind Bloom",
    href: "https://www.facebook.com/mindbloom.th/",
    icon: (
      <img src={svgs.facebookIcon} alt="facebook" width={32} height={32} />
    ),
  },
  {
    id: "line",
    label: "Mind Bloom",
    href: "https://line.me/R/ti/p/@mindbloom",
    icon: <img src={svgs.lineIcon} alt="line" width={32} height={32} />,
  },
  {
    id: "instagram",
    label: "Mind Bloom",
    href: "https://www.instagram.com/mindbloom.th",
    icon: (
      <img src={svgs.instagramIcon} alt="instagram" width={32} height={32} />
    ),
  },
  {
    id: "phone",
    label: "+66 987654321",
    icon: <LocalPhoneIcon sx={{ fontSize: 32, color: "#D6ACA6" }} />,
  },
];

function AboutPage() {
  return (
    <div className="mt-14.75 w-full max-w-245 px-4 s:px-6 m:px-8 pb-24 flex flex-col items-center">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="w-full max-w-212.5 flex flex-col items-center"
      >
        <h1 className="rf-h4 font-normal text-center text-neutral-black">เกี่ยวกับเรา</h1>
        <p className="rf-body text-neutral-grey text-center mt-7">
          คือ บริการให้คำปรึกษาด้านสุขภาพจิตโดยนักจิตวิทยาคลินิก
        </p>
        <p className="rf-body text-neutral-grey text-center mt-2 whitespace-pre-line">
          {`นำทีมโดยนักจิตวิทยาคลินิกผู้มีประสบการณ์ด้านการดูแลจิตใจผู้คนมากว่า 15 ปี
ร่วมกับกลุ่มนักจิตวิทยาคลินิกที่มีความเชื่อเดียวกันว่า
“ไม่ว่าคนเราจะเผชิญอุปสรรคอะไร เราทุกคนมีศักยภาพที่จะก้าวข้ามสิ่งนั้น”

นักจิตวิทยาของเราจึงมุ่งเน้นแนวทางการให้คำปรึกษา
ที่จะช่วยให้ผู้รับบริการได้มองเห็นถึงศักยภาพที่มีอยู่ในตนเอง
และใช้ศักยภาพนั้นดูแลจิตใจตนเองให้แข็งแรงจากภายใน`}
        </p>

        <div className="w-full h-[0.7px] bg-sub-beige mt-3.5" />

        <div className="mt-4 flex items-center justify-center gap-2">
          <img
            src={svgs.logoMindbot}
            alt="mind bloom"
            width={22}
            height={22}
          />
          <p className="rf-body text-neutral-grey">
            พัฒนาโดย บริษัท มายด์บอท จำกัด ผู้พัฒนาเทคโนโลยีสุขภาพจิต
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          className="mt-5 rounded-full bg-white px-5 py-2 shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
        >
          <p className="rf-nav font-semibold text-neutral-black">
            ดูข้อมูลเพิ่มเติม
          </p>
        </motion.button>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
        className="w-full max-w-212.5 mt-24 flex flex-col items-center"
      >
        <h2 className="rf-h4 font-normal text-center">ช่องทางการติดต่อ</h2>

        <div className="mt-8 w-full grid grid-cols-2 m:grid-cols-4 gap-y-8">
          {contactItems.map((item) => (
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
            )
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default AboutPage;
