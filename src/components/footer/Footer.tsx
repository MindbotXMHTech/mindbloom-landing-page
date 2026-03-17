import { svgs } from "../../constants/svgs";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="relative py-10 mx-auto px-6 bg-main-beige w-full flex flex-col items-center gap-4 z-10">
      <div className=" w-full flex flex-col gap-4 l:max-w-7xl">
        <img src={svgs.logoMindbloom} alt="mindbloom" width={65} height={34} />
        <div className="grid grid-cols-1 m:grid-cols-3 gap-10">
          <div className="grid gap-4 ">
            <p className="text-xl font-bold">
              บริษัท มายด์บอท จำกัด (สำนักงานใหญ่)
            </p>
            <p className="rf-small">
              292/5 ถ.จริญสนิทวงศ์
              <br /> แขวงศิริราช เขตบางกอกน้อย
              <br /> กรุงเทพฯ 10700
            </p>
            <div className="flex flex-col m:flex-row gap-6">
              <a
                href="https://line.me/R/ti/p/@mindbloom"
                target="_blank"
                rel="noreferrer"
                className="flex justify-start items-center gap-2"
              >
                <img src={svgs.lineIcon} alt="line" width={24} height={24} />
                <p className="rf-small">Line</p>
              </a>

              <a
                href="https://www.facebook.com/mindbloom.th/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-start items-center gap-2"
              >
                <img
                  src={svgs.facebookIcon}
                  alt="facebook"
                  width={24}
                  height={24}
                />
                <p className="rf-small">Facebook</p>
              </a>
              <div className="flex justify-start items-center gap-2">
                <img src={svgs.logoMindbot} alt="line" width={24} height={24} />
                <p className="rf-small">บริษัทมายด์บอท จำกัด</p>
              </div>
            </div>
          </div>
          <div className="grid  m:pl-[30%]">
            <Link to="/about" className="rf-small">
              เกี่ยวกับเรา
            </Link>
            <Link to="/term-condition" className="rf-small">
              ข้อกำหนดและเงื่อนไข
            </Link>
            <Link to="/policy" className="rf-small">
              นโยบายความเป็นส่วนตัว
            </Link>
          </div>
          <div className="flex flex-col items-start m:items-center ">
            <img
              src={svgs.logoMindbloomSquare}
              alt="mind bloom"
              width={87}
              height={87}
            />
            <p className="rf-small font-bold mt-2">Mind Bloom</p>
            <p className="rf-small text-left m:text-center mt-4">
              มายด์บลูม คลินิกการประกอบ <br /> โรคศิลปะสาขาจิตวิทยาคลินิก
              <br />
              ใบอนุญาตเลขที่ 10109003467
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
