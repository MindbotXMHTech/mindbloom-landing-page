const personalDataList = [
  "ชื่อ-นามสกุล อีเมล หมายเลขโทรศัพท์ หรือข้อมูลติดต่ออื่นที่ท่านให้แก่เรา",
  "ข้อมูลด้านสุขภาพจิตและข้อมูลที่ท่านกรอกผ่านแบบฟอร์ม กิจกรรม interactive หรือแบบประเมินบนเว็บไซต์",
  "ข้อมูลการลงทะเบียนบัญชีผู้ใช้ หากมีการสมัครใช้งาน",
  "ข้อมูลที่ท่านให้ไว้เมื่อสอบถาม ขอคำปรึกษา หรือนัดหมายบริการ",
  "ข้อมูลความประสงค์ในการรับข่าวสารหรือเนื้อหาด้านสุขภาพจิตจากเรา",
];

const automaticDataList = [
  "ข้อมูลอุปกรณ์และเบราว์เซอร์ เช่น IP address ประเภทเบราว์เซอร์ ระบบปฏิบัติการ",
  "ข้อมูลการใช้งานเว็บไซต์ เช่น หน้าที่เข้าชม เวลาที่ใช้งาน ลิงก์ที่กด",
  "คุกกี้และเทคโนโลยีติดตามที่คล้ายกัน",
];

const purposeList = [
  "เพื่อให้บริการและจัดการบริการของเราอย่างมีประสิทธิภาพ",
  "เพื่อสื่อสารกับท่านเกี่ยวกับการนัดหมาย บริการ และข้อมูลที่ท่านร้องขอ",
  "เพื่อปรับปรุงเว็บไซต์และประสบการณ์ของผู้ใช้",
  "เพื่อดำเนินกิจกรรม interactive และแบบประเมินสุขภาพจิตบนเว็บไซต์",
  "เพื่อส่งเนื้อหาและข้อมูลด้านสุขภาพจิตที่เกี่ยวข้อง (โดยได้รับความยินยอมของท่าน)",
  "เพื่อปฏิบัติตามข้อผูกพันทางกฎหมายและกฎระเบียบที่บังคับใช้",
  "เพื่อป้องกันการฉ้อโกงและรักษาความปลอดภัยของเว็บไซต์",
];

const sensitiveDataList = [
  "เก็บรวบรวมและประมวลผลข้อมูลสุขภาพจิตเฉพาะเมื่อได้รับความยินยอมอย่างชัดเจนจากท่าน",
  "ใช้มาตรการรักษาความปลอดภัยที่เข้มงวดกว่าปกติสำหรับข้อมูลประเภทนี้",
  "ไม่ใช้ข้อมูลสุขภาพจิตเพื่อวัตถุประสงค์ทางการตลาดหรือการโฆษณา",
  "จำกัดการเข้าถึงข้อมูลสุขภาพจิตเฉพาะบุคลากรทางการแพทย์และผู้ที่ได้รับอนุญาตเท่านั้น",
];

const disclosureList = [
  "แพทย์ นักจิตวิทยา หรือผู้ให้บริการด้านสุขภาพจิตที่ดูแลท่าน (เฉพาะเมื่อจำเป็น)",
  "ผู้ให้บริการบุคคลที่สามที่ช่วยในการดำเนินงานของเรา ภายใต้ข้อตกลงการรักษาความลับ",
  "หน่วยงานราชการหรือหน่วยงานทางกฎหมาย เมื่อกฎหมายกำหนดหรือได้รับคำสั่งศาล",
  "ผู้ให้บริการด้านเทคนิคที่รับผิดชอบระบบ IT และความปลอดภัยของข้อมูล",
];

const securityList = [
  "การเข้ารหัสข้อมูล (Encryption) ในการส่งผ่านและจัดเก็บ",
  "การควบคุมการเข้าถึงข้อมูลอย่างเข้มงวด",
  "การตรวจสอบระบบความปลอดภัยอย่างสม่ำเสมอ",
  "การฝึกอบรมพนักงานด้านความเป็นส่วนตัวและการรักษาความลับ",
];

const rightsList = [
  "สิทธิในการเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคลของท่าน",
  "สิทธิในการแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่สมบูรณ์",
  "สิทธิในการขอลบหรือทำลายข้อมูลส่วนบุคคล",
  "สิทธิในการคัดค้านการประมวลผลข้อมูลส่วนบุคคล",
  "สิทธิในการขอให้ระงับการใช้ข้อมูลส่วนบุคคล",
  "สิทธิในการโอนย้ายข้อมูล (Data Portability)",
  "สิทธิในการถอนความยินยอมได้ตลอดเวลา (โดยไม่กระทบต่อการประมวลผลที่ดำเนินการก่อนหน้า)",
];

const cookiesList = [
  "คุกกี้ที่จำเป็น (Necessary Cookies): จำเป็นสำหรับการทำงานพื้นฐานของเว็บไซต์",
  "คุกกี้เพื่อการวิเคราะห์ (Analytics Cookies): ช่วยให้เราเข้าใจวิธีที่ผู้ใช้โต้ตอบกับเว็บไซต์",
  "คุกกี้เพื่อการตั้งค่า (Preference Cookies): จดจำการตั้งค่าและความต้องการของท่าน",
];

const Policy = () => {
  return (
    <div className="mt-14.75 w-full max-w-245 px-4 s:px-6 m:px-8 pb-24 flex flex-col">
      <h1 className="rf-h4 font-normal text-center text-neutral-black mb-8">
        นโยบายความเป็นส่วนตัว
      </h1>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">1. บทนำ</p>
        <p className="rf-body text-neutral-grey indent-12">
          มายด์บลูม ("เรา", "ของเรา")
          มุ่งมั่นในการปกป้องข้อมูลส่วนบุคคลและสิทธิความเป็นส่วนตัวของท่าน
          นโยบายความเป็นส่วนตัวนี้อธิบายถึงวิธีที่เราเก็บรวบรวม ใช้ เปิดเผย
          และดูแลรักษาข้อมูลของท่านเมื่อท่านใช้งานเว็บไซต์ของเรา
          เราดำเนินการตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
          และกฎหมายที่เกี่ยวข้องของประเทศไทย
          กรุณาอ่านนโยบายนี้อย่างละเอียดก่อนใช้งานเว็บไซต์ของเรา
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">2. ข้อมูลที่เราเก็บรวบรวม</p>
        <div>
          <p className="rf-body">2.1 ข้อมูลที่ท่านให้แก่เรา</p>
          <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
            {personalDataList.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="rf-body">2.2 ข้อมูลที่เก็บรวบรวมโดยอัตโนมัติ</p>
          <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
            {automaticDataList.map((item, index) => (
              <li key={index} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          3. วัตถุประสงค์ในการใช้ข้อมูล
        </p>
        <p className="rf-body indent-12">
          เราใช้ข้อมูลของท่านเพื่อวัตถุประสงค์ดังต่อไปนี้:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {purposeList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          4. ข้อมูลสุขภาพจิตและข้อมูลที่อ่อนไหว
        </p>
        <p className="rf-body indent-12">
          ข้อมูลด้านสุขภาพจิตถือเป็นข้อมูลส่วนบุคคลที่อ่อนไหว เราดำเนินการ:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {sensitiveDataList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">5. การเปิดเผยข้อมูล</p>
        <p className="rf-body indent-12">
          เราไม่ขายข้อมูลส่วนบุคคลของท่าน
          เราอาจแบ่งปันข้อมูลกับบุคคลหรือองค์กรดังต่อไปนี้:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {disclosureList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">6. ความปลอดภัยของข้อมูล</p>
        <p className="rf-body indent-12">
          เราดำเนินการมาตรการรักษาความปลอดภัยทั้งทางเทคนิคและองค์กรที่เหมาะสม
          ได้แก่:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {securityList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          7. ระยะเวลาการเก็บรักษาข้อมูล
        </p>
        <p className="rf-body indent-12">
          เราเก็บรักษาข้อมูลส่วนบุคคลของท่านตราบเท่าที่จำเป็นเพื่อบรรลุวัตถุประสงค์ที่ระบุไว้ในนโยบายนี้
          หรือตามที่กฎหมายกำหนด
          ข้อมูลทางการแพทย์จะถูกเก็บรักษาตามระยะเวลาที่กฎหมายสาธารณสุขกำหนด
          เมื่อไม่มีความจำเป็นอีกต่อไป
          เราจะลบหรือทำให้ข้อมูลนั้นไม่สามารถระบุตัวตนได้อย่างปลอดภัย
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">8. สิทธิของเจ้าของข้อมูล</p>
        <p className="rf-body indent-12">
          ภายใต้ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
          ท่านมีสิทธิดังต่อไปนี้:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {rightsList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="rf-body indent-12 mt-2">
          ท่านสามารถใช้สิทธิเหล่านี้ได้โดยติดต่อเราตามช่องทางที่ระบุในส่วน
          "ติดต่อเรา" เราจะตอบกลับคำขอของท่านภายใน 30 วัน
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">9. คุกกี้ (Cookies)</p>
        <p className="rf-body indent-12">
          เว็บไซต์ของเราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของท่าน
          ประเภทของคุกกี้ที่เราใช้ ได้แก่:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {cookiesList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="rf-body indent-12 mt-2">
          ท่านสามารถปรับการตั้งค่าเบราว์เซอร์เพื่อปฏิเสธคุกกี้บางประเภทได้
          อย่างไรก็ตาม
          การปฏิเสธคุกกี้ที่จำเป็นอาจส่งผลให้บางฟังก์ชันของเว็บไซต์ไม่ทำงาน
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          10. การถ่ายโอนข้อมูลระหว่างประเทศ
        </p>
        <p className="rf-body indent-12">
          หากเราจำเป็นต้องโอนข้อมูลส่วนบุคคลของท่านไปยังต่างประเทศ
          เราจะดำเนินการตามมาตรฐานการคุ้มครองข้อมูลที่กำหนดไว้ใน พ.ร.บ. PDPA
          และจะแจ้งให้ท่านทราบและขอความยินยอมเมื่อจำเป็น
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">11. การเปลี่ยนแปลงนโยบาย</p>
        <p className="rf-body indent-12">
          เราขอสงวนสิทธิ์ในการอัปเดตหรือแก้ไขนโยบายความเป็นส่วนตัวนี้ได้ตลอดเวลา
          เราจะแจ้งให้ท่านทราบถึงการเปลี่ยนแปลงที่สำคัญผ่านทางเว็บไซต์หรืออีเมล
          วันที่ "อัปเดตล่าสุด"
          ที่ด้านบนของนโยบายนี้จะระบุวันที่มีการแก้ไขล่าสุด
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">12. ติดต่อเรา</p>
        <p className="rf-body indent-12">
          หากท่านมีคำถาม ข้อกังวล
          หรือต้องการใช้สิทธิของท่านเกี่ยวกับนโยบายความเป็นส่วนตัวนี้
          กรุณาติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO) ของเรา:
        </p>
        <div className="rf-body mt-2 space-y-1 text-neutral-grey">
          <p>มายด์บลูม</p>
          {/* <p>อีเมล: [กรุณาระบุอีเมลติดต่อ]</p> */}
          <p>โทรศัพท์: +66 83 834 6595</p>
          <p>
            ที่อยู่: 292/5 ถ.จริญสนิทวงศ์
            <br /> แขวงศิริราช เขตบางกอกน้อย
            <br /> กรุงเทพฯ 10700
          </p>
        </div>
        <p className="rf-body mt-2">
          หากท่านเชื่อว่าสิทธิของท่านถูกละเมิด
          ท่านมีสิทธิร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล
          (สคส.)
        </p>
      </section>
    </div>
  );
};

export default Policy;
