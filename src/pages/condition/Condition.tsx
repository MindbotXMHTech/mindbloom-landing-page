const serviceList = [
  "เนื้อหาและบทความให้ความรู้ด้านสุขภาพจิต",
  "ข้อมูลและคำแนะนำเกี่ยวกับบริการของคลินิก",
  "ช่องทางการนัดหมายและติดต่อสอบถาม",
  "เครื่องมือและแบบประเมินสุขภาพจิตเบื้องต้นแบบ interactive",
  "แหล่งข้อมูลและคู่มือด้านสุขภาพจิต",
  "กิจกรรม interactive และชุมชนออนไลน์ (หากมี)",
];

const medicalDisclaimerList = [
  "เนื้อหาบนเว็บไซต์ไม่สามารถใช้แทนการปรึกษาแพทย์หรือผู้เชี่ยวชาญด้านสุขภาพจิตโดยตรง",
  "แบบประเมินสุขภาพจิตบนเว็บไซต์เป็นเพียงเครื่องมือคัดกรองเบื้องต้น ไม่ใช่การวินิจฉัยทางคลินิก",
  "หากท่านกำลังประสบปัญหาด้านสุขภาพจิต กรุณาติดต่อแพทย์หรือผู้เชี่ยวชาญโดยตรง",
  "ในกรณีฉุกเฉินทางสุขภาพจิต กรุณาโทรสายด่วนสุขภาพจิต 1323 หรือโทร 1669",
];

const userContentList = [
  "เนื้อหาที่ส่งเป็นของท่านหรือท่านมีสิทธิ์ใช้งาน",
  "เนื้อหาไม่ละเมิดสิทธิ์ของบุคคลที่สาม",
  "ท่านให้สิทธิ์มายด์บลูม ในการใช้เนื้อหาดังกล่าวเพื่อปรับปรุงบริการ (ในรูปแบบไม่ระบุตัวตน)",
];

const communityGuidelineList = [
  "เป็นอันตรายต่อตนเองหรือผู้อื่น รวมถึงเนื้อหาที่ส่งเสริมการทำร้ายตนเอง",
  "ดูถูก คุกคาม หรือเลือกปฏิบัติต่อบุคคลหรือกลุ่มบุคคล",
  "เป็นข้อมูลเท็จหรือทำให้เข้าใจผิดเกี่ยวกับสุขภาพจิต",
  "มีเนื้อหาทางเพศ ความรุนแรง หรือสิ่งผิดกฎหมาย",
];

const userResponsibilitiesList = [
  "ใช้เว็บไซต์เพื่อวัตถุประสงค์ที่ถูกต้องตามกฎหมายเท่านั้น",
  "ให้ข้อมูลที่ถูกต้องและเป็นจริงเมื่อกรอกแบบฟอร์มหรือลงทะเบียน",
  "รักษาความลับของข้อมูลการเข้าสู่ระบบ (หากมีการลงทะเบียน)",
  "ไม่รบกวนหรือขัดขวางการทำงานของเว็บไซต์",
  "ไม่พยายามเข้าถึงระบบโดยไม่ได้รับอนุญาต",
  "ไม่ใช้เว็บไซต์เพื่อส่งสแปมหรือเนื้อหาที่เป็นอันตราย",
  "ปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้องทั้งหมด",
];

const liabilityLimitList = [
  "ความเสียหายโดยตรง ทางอ้อม อุบัติเหตุ พิเศษ หรือผลที่ตามมาจากการใช้งานเว็บไซต์",
  "ความสูญเสียข้อมูลหรือการหยุดชะงักของบริการที่อยู่นอกเหนือการควบคุมของเรา",
  "เนื้อหาหรือความถูกต้องของข้อมูลจากแหล่งบุคคลที่สาม",
  "ผลที่เกิดจากการนำเนื้อหาบนเว็บไซต์ไปใช้โดยไม่ปรึกษาผู้เชี่ยวชาญ",
];

const miscList = [
  "หากข้อกำหนดใดไม่ถูกต้องตามกฎหมาย ข้อกำหนดที่เหลือยังคงมีผลบังคับใช้",
  "การที่มายด์บลูม ไม่บังคับใช้สิทธิ์ใดๆ ไม่ถือเป็นการสละสิทธิ์นั้น",
  "ข้อกำหนดเหล่านี้ถือเป็นข้อตกลงทั้งหมดระหว่างท่านกับมายด์บลูม เกี่ยวกับการใช้งานเว็บไซต์",
];

const Condition = () => {
  return (
    <div className="mt-14.75 w-full max-w-245 px-4 s:px-6 m:px-8 pb-24 flex flex-col">
      <h1 className="rf-h4 font-normal text-center text-neutral-black mb-8">
        ข้อกำหนดและเงื่อนไข
      </h1>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">1. การยอมรับข้อกำหนด</p>
        <p className="rf-body indent-12">
          การเข้าถึงและใช้งานเว็บไซต์มายด์บลูม ("เว็บไซต์") ถือว่าท่านได้อ่าน
          เข้าใจ และยอมรับผูกพันตามข้อกำหนดและเงื่อนไขการใช้งานฉบับนี้
          ("ข้อกำหนด") รวมถึงนโยบายความเป็นส่วนตัวของเรา
          หากท่านไม่ยอมรับข้อกำหนดเหล่านี้ กรุณาหยุดใช้งานเว็บไซต์ทันที
          ข้อกำหนดเหล่านี้มีผลบังคับใช้กับผู้ใช้งานทุกคน รวมถึงผู้เยี่ยมชมทั่วไป
          ผู้ลงทะเบียน และผู้ที่เข้าร่วมกิจกรรมบนเว็บไซต์
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">2. คำอธิบายบริการ</p>
        <p className="rf-body indent-12">
          มายด์บลูม เป็นคลินิกสุขภาพจิตที่ให้บริการดังต่อไปนี้ผ่านทางเว็บไซต์:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {serviceList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          3. ข้อจำกัดความรับผิดชอบทางการแพทย์ (Medical Disclaimer)
        </p>
        <p className="rf-body indent-12">
          ข้อมูล เนื้อหา
          และเครื่องมือทั้งหมดบนเว็บไซต์นี้มีวัตถุประสงค์เพื่อให้ความรู้ทั่วไปเท่านั้น
          และไม่ถือเป็นคำแนะนำทางการแพทย์ การวินิจฉัยโรค หรือการรักษาทางคลินิก:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {medicalDisclaimerList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="rf-body indent-12 mt-2">
          มายด์บลูม
          ไม่รับผิดชอบต่อผลที่เกิดจากการนำข้อมูลบนเว็บไซต์ไปใช้โดยไม่ปรึกษาผู้เชี่ยวชาญ
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          4. คุณสมบัติและกิจกรรม Interactive
        </p>
        <p className="rf-body mt-2">4.1 แบบประเมินตนเอง</p>
        <p className="rf-body indent-12">
          แบบประเมินและแบบสอบถามบนเว็บไซต์ออกแบบมาเพื่อให้ข้อมูลเบื้องต้นเท่านั้น
          ผลลัพธ์ที่ได้ไม่ถือเป็นการวินิจฉัยทางการแพทย์และไม่ควรนำไปใช้ตัดสินใจด้านการรักษาโดยไม่ปรึกษาผู้เชี่ยวชาญ
        </p>
        <p className="rf-body mt-2">4.2 เนื้อหาที่ผู้ใช้สร้างขึ้น</p>
        <p className="rf-body indent-12">
          หากท่านส่งเนื้อหาใดๆ ผ่านฟีเจอร์แบบ interactive ท่านรับรองว่า:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {userContentList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="rf-body mt-2">4.3 แนวปฏิบัติชุมชน</p>
        <p className="rf-body indent-12">
          ท่านตกลงที่จะไม่โพสต์หรือแชร์เนื้อหาที่:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {communityGuidelineList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">5. ความรับผิดชอบของผู้ใช้</p>
        <p className="rf-body indent-12">ท่านตกลงที่จะ:</p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {userResponsibilitiesList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">6. ทรัพย์สินทางปัญญา</p>
        <p className="rf-body indent-12">
          เนื้อหาทั้งหมดบนเว็บไซต์นี้ รวมถึงแต่ไม่จำกัดเพียง ข้อความ กราฟิก
          โลโก้ รูปภาพ วิดีโอ บทความ และซอฟต์แวร์ เป็นทรัพย์สินของมายด์บลูม
          และ/หรือผู้ให้ใช้สิทธิ์
          และได้รับการคุ้มครองโดยกฎหมายทรัพย์สินทางปัญญาของประเทศไทยและกฎหมายระหว่างประเทศ
          ท่านไม่ได้รับอนุญาตให้ทำซ้ำ แจกจ่าย แก้ไข ส่งต่อ
          หรือใช้เนื้อหาดังกล่าวในเชิงพาณิชย์โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจาก
          มายด์บลูม ก่อน
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          7. ลิงก์ไปยังเว็บไซต์ภายนอก
        </p>
        <p className="rf-body indent-12">
          เว็บไซต์ของเราอาจมีลิงก์ไปยังเว็บไซต์หรือทรัพยากรของบุคคลที่สาม
          มายด์บลูม ไม่รับผิดชอบต่อเนื้อหา ความถูกต้อง
          หรือแนวปฏิบัติด้านความเป็นส่วนตัวของเว็บไซต์เหล่านั้น
          การเข้าถึงลิงก์ดังกล่าวเป็นความเสี่ยงของท่านเอง
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">8. การจำกัดความรับผิด</p>
        <p className="rf-body indent-12">
          ในขอบเขตสูงสุดที่กฎหมายอนุญาต มายด์บลูม จะไม่รับผิดชอบต่อ:
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {liabilityLimitList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          9. การรับประกันและการสละสิทธิ์
        </p>
        <p className="rf-body indent-12">
          เว็บไซต์และเนื้อหาทั้งหมดจัดให้บริการ "ตามสภาพที่เป็น" (As-Is) และ
          "ตามที่มีให้บริการ" (As-Available) โดยไม่มีการรับประกันใดๆ
          ไม่ว่าโดยชัดแจ้งหรือโดยปริยาย มายด์บลูม
          ไม่รับประกันว่าเว็บไซต์จะทำงานได้อย่างต่อเนื่อง ปราศจากข้อผิดพลาด
          หรือปลอดจากไวรัส
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          10. กฎหมายที่ใช้บังคับและการระงับข้อพิพาท
        </p>
        <p className="rf-body indent-12">
          ข้อกำหนดและเงื่อนไขเหล่านี้อยู่ภายใต้และตีความตามกฎหมายของประเทศไทย
          ข้อพิพาทใดๆ
          ที่เกิดขึ้นจากหรือเกี่ยวข้องกับข้อกำหนดเหล่านี้จะได้รับการระงับก่อนโดยการเจรจาอย่างสุจริต
          หากไม่สามารถตกลงกันได้
          ข้อพิพาทจะอยู่ภายใต้เขตอำนาจของศาลที่มีอำนาจในประเทศไทย
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          11. การเปลี่ยนแปลงข้อกำหนด
        </p>
        <p className="rf-body indent-12">
          เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดเหล่านี้ได้ตลอดเวลา
          โดยจะแจ้งให้ท่านทราบผ่านทางเว็บไซต์
          การใช้งานเว็บไซต์ต่อไปหลังจากมีการเปลี่ยนแปลงถือเป็นการยอมรับข้อกำหนดที่อัปเดตแล้ว
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">12. ข้อกำหนดเบ็ดเตล็ด</p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {miscList.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">13. ติดต่อเรา</p>
        <p className="rf-body indent-12">
          หากท่านมีคำถามเกี่ยวกับข้อกำหนดและเงื่อนไขเหล่านี้ กรุณาติดต่อเรา:
        </p>
        <div className="rf-body mt-2 space-y-1 pl-12 text-neutral-grey">
          <p>มายด์บลูม</p>
          {/* <p>อีเมล: [กรุณาระบุอีเมลติดต่อ]</p> */}
          <p>โทรศัพท์: +66 83 834 6595</p>
          <p>
            ที่อยู่: 292/5 ถ.จริญสนิทวงศ์
            <br /> แขวงศิริราช เขตบางกอกน้อย
            <br /> กรุงเทพฯ 10700
          </p>
        </div>
      </section>
    </div>
  );
};

export default Condition;
