import React from "react";
import { svgs } from "../../constants/svgs";

const Footer = () => {
  return (
    <div className="py-10 mx-auto px-6 bg-main-beige w-full flex flex-col items-center gap-4">
      <div className="  w-full flex flex-col gap-4 l:max-w-7xl">
        <img src={svgs.logoMindbloom} alt="mindbloom" width={65} height={34} />
        <div className="grid grid-cols-3 gap-10">
          <div className="grid gap-4  ">
            <p className="text-xl font-bold">
              บริษัท มายด์บอท จำกัด (สำนักงานใหญ่)
            </p>
            <p className="rf-small">
              ตึก 667/15 อาคารอรรถบูรณ์ ชั้น 5 ห้อง 502/2 <br /> ถ.จรัญสนิทวงศ์
              แขวงอรุณอมรินทร์ เขตบางกอกน้อย
              <br /> กรุงเทพฯ 10700
            </p>
            <div className="flex gap-6">
              <div className="flex justify-start items-center gap-2">
                <img src={svgs.lineIcon} alt="line" width={24} height={24} />
                <p className="rf-small">Line</p>
              </div>

              <div className="flex justify-start items-center gap-2">
                <img
                  src={svgs.facebookIcon}
                  alt="line"
                  width={24}
                  height={24}
                />
                <p className="rf-small">Facebook</p>
              </div>
            </div>
            <div className="flex justify-start items-center gap-2">
              <img src={svgs.facebookIcon} alt="line" width={24} height={24} />
              <p className="rf-small">บริษัทมายด์บอท จำกัด</p>
            </div>
          </div>
          <div className="grid  pl-[30%]">
            <p className="rf-small">เกี่ยวกับเรา</p>
            <p className="rf-small">ข้อกำหนดและเงื่อนไข</p>
            <p className="rf-small">นโยบายความเป็นส่วนตัว</p>
          </div>
          <div className="flex flex-col items-center ">
            <img
              src={svgs.logoMindbloomSquare}
              alt="mind bloom"
              width={87}
              height={87}
            />
            <p className="rf-small font-bold mt-2">Mind Bloom</p>
            <p className="rf-small text-center mt-4">
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
