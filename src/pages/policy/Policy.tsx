import { useLanguage } from "../../i18n/LanguageProvider";

const personalDataList = {
  th: [
    "ชื่อ-นามสกุล อีเมล หมายเลขโทรศัพท์ หรือข้อมูลติดต่ออื่นที่ท่านให้แก่เรา",
    "ข้อมูลด้านสุขภาพจิตและข้อมูลที่ท่านกรอกผ่านแบบฟอร์ม กิจกรรม interactive หรือแบบประเมินบนเว็บไซต์",
    "ข้อมูลการลงทะเบียนบัญชีผู้ใช้ หากมีการสมัครใช้งาน",
    "ข้อมูลที่ท่านให้ไว้เมื่อสอบถาม ขอคำปรึกษา หรือนัดหมายบริการ",
    "ข้อมูลความประสงค์ในการรับข่าวสารหรือเนื้อหาด้านสุขภาพจิตจากเรา",
  ],
  en: [
    "Full name, email, phone number, or other contact information you provide",
    "Mental health information and data you submit through forms, interactive activities, or website assessments",
    "User registration information, if an account is created",
    "Information you provide when requesting advice, making inquiries, or booking services",
    "Your preferences for receiving mental health news or content from us",
  ],
};

const automaticDataList = {
  th: [
    "ข้อมูลอุปกรณ์และเบราว์เซอร์ เช่น IP address ประเภทเบราว์เซอร์ ระบบปฏิบัติการ",
    "ข้อมูลการใช้งานเว็บไซต์ เช่น หน้าที่เข้าชม เวลาที่ใช้งาน ลิงก์ที่กด",
    "คุกกี้และเทคโนโลยีติดตามที่คล้ายกัน",
  ],
  en: [
    "Device and browser data such as IP address, browser type, and operating system",
    "Website usage data such as visited pages, time spent, and clicked links",
    "Cookies and similar tracking technologies",
  ],
};

const purposeList = {
  th: [
    "เพื่อให้บริการและจัดการบริการของเราอย่างมีประสิทธิภาพ",
    "เพื่อสื่อสารกับท่านเกี่ยวกับการนัดหมาย บริการ และข้อมูลที่ท่านร้องขอ",
    "เพื่อปรับปรุงเว็บไซต์และประสบการณ์ของผู้ใช้",
    "เพื่อดำเนินกิจกรรม interactive และแบบประเมินสุขภาพจิตบนเว็บไซต์",
    "เพื่อส่งเนื้อหาและข้อมูลด้านสุขภาพจิตที่เกี่ยวข้อง (โดยได้รับความยินยอมของท่าน)",
    "เพื่อปฏิบัติตามข้อผูกพันทางกฎหมายและกฎระเบียบที่บังคับใช้",
    "เพื่อป้องกันการฉ้อโกงและรักษาความปลอดภัยของเว็บไซต์",
  ],
  en: [
    "To provide and manage our services effectively",
    "To communicate with you regarding appointments, services, and requested information",
    "To improve the website and user experience",
    "To operate interactive features and mental health assessments on the website",
    "To send relevant mental health content and information, with your consent",
    "To comply with legal and regulatory obligations",
    "To prevent fraud and protect website security",
  ],
};

const sensitiveDataList = {
  th: [
    "เก็บรวบรวมและประมวลผลข้อมูลสุขภาพจิตเฉพาะเมื่อได้รับความยินยอมอย่างชัดเจนจากท่าน",
    "ใช้มาตรการรักษาความปลอดภัยที่เข้มงวดกว่าปกติสำหรับข้อมูลประเภทนี้",
    "ไม่ใช้ข้อมูลสุขภาพจิตเพื่อวัตถุประสงค์ทางการตลาดหรือการโฆษณา",
    "จำกัดการเข้าถึงข้อมูลสุขภาพจิตเฉพาะบุคลากรทางการแพทย์และผู้ที่ได้รับอนุญาตเท่านั้น",
  ],
  en: [
    "Collect and process mental health data only with your explicit consent",
    "Apply stricter security measures for this type of data",
    "Do not use mental health data for marketing or advertising purposes",
    "Restrict access to mental health data to authorized medical personnel and approved staff only",
  ],
};

const disclosureList = {
  th: [
    "แพทย์ นักจิตวิทยา หรือผู้ให้บริการด้านสุขภาพจิตที่ดูแลท่าน (เฉพาะเมื่อจำเป็น)",
    "ผู้ให้บริการบุคคลที่สามที่ช่วยในการดำเนินงานของเรา ภายใต้ข้อตกลงการรักษาความลับ",
    "หน่วยงานราชการหรือหน่วยงานทางกฎหมาย เมื่อกฎหมายกำหนดหรือได้รับคำสั่งศาล",
    "ผู้ให้บริการด้านเทคนิคที่รับผิดชอบระบบ IT และความปลอดภัยของข้อมูล",
  ],
  en: [
    "Doctors, psychologists, or mental health professionals caring for you, when necessary",
    "Third-party service providers supporting our operations under confidentiality obligations",
    "Government or legal authorities when required by law or court order",
    "Technical service providers responsible for IT systems and data security",
  ],
};

const securityList = {
  th: [
    "การเข้ารหัสข้อมูล (Encryption) ในการส่งผ่านและจัดเก็บ",
    "การควบคุมการเข้าถึงข้อมูลอย่างเข้มงวด",
    "การตรวจสอบระบบความปลอดภัยอย่างสม่ำเสมอ",
    "การฝึกอบรมพนักงานด้านความเป็นส่วนตัวและการรักษาความลับ",
  ],
  en: [
    "Encryption during transmission and storage",
    "Strict access controls",
    "Regular security monitoring and reviews",
    "Staff training on privacy and confidentiality",
  ],
};

const rightsList = {
  th: [
    "สิทธิในการเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคลของท่าน",
    "สิทธิในการแก้ไขข้อมูลที่ไม่ถูกต้องหรือไม่สมบูรณ์",
    "สิทธิในการขอลบหรือทำลายข้อมูลส่วนบุคคล",
    "สิทธิในการคัดค้านการประมวลผลข้อมูลส่วนบุคคล",
    "สิทธิในการขอให้ระงับการใช้ข้อมูลส่วนบุคคล",
    "สิทธิในการโอนย้ายข้อมูล (Data Portability)",
    "สิทธิในการถอนความยินยอมได้ตลอดเวลา (โดยไม่กระทบต่อการประมวลผลที่ดำเนินการก่อนหน้า)",
  ],
  en: [
    "The right to access and receive a copy of your personal data",
    "The right to correct inaccurate or incomplete data",
    "The right to request deletion or destruction of your personal data",
    "The right to object to personal data processing",
    "The right to request suspension of personal data use",
    "The right to data portability",
    "The right to withdraw consent at any time, without affecting prior lawful processing",
  ],
};

const cookiesList = {
  th: [
    "คุกกี้ที่จำเป็น (Necessary Cookies): จำเป็นสำหรับการทำงานพื้นฐานของเว็บไซต์",
    "คุกกี้เพื่อการวิเคราะห์ (Analytics Cookies): ช่วยให้เราเข้าใจวิธีที่ผู้ใช้โต้ตอบกับเว็บไซต์",
    "คุกกี้เพื่อการตั้งค่า (Preference Cookies): จดจำการตั้งค่าและความต้องการของท่าน",
  ],
  en: [
    "Necessary Cookies: required for the website's basic functionality",
    "Analytics Cookies: help us understand how users interact with the website",
    "Preference Cookies: remember your settings and preferences",
  ],
};

const Policy = () => {
  const { language, t } = useLanguage();

  return (
    <div className="mt-14.75 w-full max-w-245 px-4 s:px-6 m:px-8 pb-24 flex flex-col">
      <h1 className="rf-h4 font-normal text-center text-neutral-black mb-8">
        {t({ th: "นโยบายความเป็นส่วนตัว", en: "Privacy Policy" })}
      </h1>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">{t({ th: "1. บทนำ", en: "1. Introduction" })}</p>
        <p className="rf-body text-neutral-grey indent-12">
          {t({
            th: 'มายด์บลูม ("เรา", "ของเรา") มุ่งมั่นในการปกป้องข้อมูลส่วนบุคคลและสิทธิความเป็นส่วนตัวของท่าน นโยบายความเป็นส่วนตัวนี้อธิบายถึงวิธีที่เราเก็บรวบรวม ใช้ เปิดเผย และดูแลรักษาข้อมูลของท่านเมื่อท่านใช้งานเว็บไซต์ของเรา เราดำเนินการตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA) และกฎหมายที่เกี่ยวข้องของประเทศไทย กรุณาอ่านนโยบายนี้อย่างละเอียดก่อนใช้งานเว็บไซต์ของเรา',
            en: 'MindBloom ("we", "our", or "us") is committed to protecting your personal data and privacy rights. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website. We operate in accordance with Thailand\'s Personal Data Protection Act B.E. 2562 (PDPA) and other applicable laws. Please read this policy carefully before using our website.',
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "2. ข้อมูลที่เราเก็บรวบรวม", en: "2. Information We Collect" })}
        </p>
        <div>
          <p className="rf-body">
            {t({ th: "2.1 ข้อมูลที่ท่านให้แก่เรา", en: "2.1 Information You Provide" })}
          </p>
          <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
            {personalDataList[language].map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="rf-body">
            {t({
              th: "2.2 ข้อมูลที่เก็บรวบรวมโดยอัตโนมัติ",
              en: "2.2 Automatically Collected Information",
            })}
          </p>
          <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
            {automaticDataList[language].map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "3. วัตถุประสงค์ในการใช้ข้อมูล", en: "3. Purposes of Use" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "เราใช้ข้อมูลของท่านเพื่อวัตถุประสงค์ดังต่อไปนี้:",
            en: "We use your information for the following purposes:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {purposeList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({
            th: "4. ข้อมูลสุขภาพจิตและข้อมูลที่อ่อนไหว",
            en: "4. Mental Health and Sensitive Data",
          })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "ข้อมูลด้านสุขภาพจิตถือเป็นข้อมูลส่วนบุคคลที่อ่อนไหว เราดำเนินการ:",
            en: "Mental health information is considered sensitive personal data. We therefore:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {sensitiveDataList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "5. การเปิดเผยข้อมูล", en: "5. Disclosure of Information" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "เราไม่ขายข้อมูลส่วนบุคคลของท่าน เราอาจแบ่งปันข้อมูลกับบุคคลหรือองค์กรดังต่อไปนี้:",
            en: "We do not sell your personal data. We may share information with the following individuals or organizations:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {disclosureList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "6. ความปลอดภัยของข้อมูล", en: "6. Data Security" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "เราดำเนินการมาตรการรักษาความปลอดภัยทั้งทางเทคนิคและองค์กรที่เหมาะสม ได้แก่:",
            en: "We implement appropriate technical and organizational security measures, including:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {securityList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "7. ระยะเวลาการเก็บรักษาข้อมูล", en: "7. Data Retention" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "เราเก็บรักษาข้อมูลส่วนบุคคลของท่านตราบเท่าที่จำเป็นเพื่อบรรลุวัตถุประสงค์ที่ระบุไว้ในนโยบายนี้ หรือตามที่กฎหมายกำหนด ข้อมูลทางการแพทย์จะถูกเก็บรักษาตามระยะเวลาที่กฎหมายสาธารณสุขกำหนด เมื่อไม่มีความจำเป็นอีกต่อไป เราจะลบหรือทำให้ข้อมูลนั้นไม่สามารถระบุตัวตนได้อย่างปลอดภัย",
            en: "We retain your personal data only for as long as necessary to fulfill the purposes stated in this policy or as required by law. Medical data will be retained according to applicable public health regulations. When no longer needed, we will securely delete or anonymize the data.",
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "8. สิทธิของเจ้าของข้อมูล", en: "8. Your Rights" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "ภายใต้ พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 ท่านมีสิทธิดังต่อไปนี้:",
            en: "Under Thailand's PDPA, you have the following rights:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {rightsList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="rf-body indent-12 mt-2">
          {t({
            th: 'ท่านสามารถใช้สิทธิเหล่านี้ได้โดยติดต่อเราตามช่องทางที่ระบุในส่วน "ติดต่อเรา" เราจะตอบกลับคำขอของท่านภายใน 30 วัน',
            en: 'You may exercise these rights by contacting us through the channels listed in the "Contact Us" section. We will respond to your request within 30 days.',
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "9. คุกกี้ (Cookies)", en: "9. Cookies" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "เว็บไซต์ของเราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของท่าน ประเภทของคุกกี้ที่เราใช้ ได้แก่:",
            en: "Our website uses cookies to improve your experience. The types of cookies we use include:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {cookiesList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="rf-body indent-12 mt-2">
          {t({
            th: "ท่านสามารถปรับการตั้งค่าเบราว์เซอร์เพื่อปฏิเสธคุกกี้บางประเภทได้ อย่างไรก็ตาม การปฏิเสธคุกกี้ที่จำเป็นอาจส่งผลให้บางฟังก์ชันของเว็บไซต์ไม่ทำงาน",
            en: "You may adjust your browser settings to reject certain cookies. However, rejecting necessary cookies may affect some core website functions.",
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({
            th: "10. การถ่ายโอนข้อมูลระหว่างประเทศ",
            en: "10. International Data Transfers",
          })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "หากเราจำเป็นต้องโอนข้อมูลส่วนบุคคลของท่านไปยังต่างประเทศ เราจะดำเนินการตามมาตรฐานการคุ้มครองข้อมูลที่กำหนดไว้ใน พ.ร.บ. PDPA และจะแจ้งให้ท่านทราบและขอความยินยอมเมื่อจำเป็น",
            en: "If we need to transfer your personal data internationally, we will do so in accordance with PDPA standards and will notify you and obtain consent where required.",
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "11. การเปลี่ยนแปลงนโยบาย", en: "11. Policy Changes" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: 'เราขอสงวนสิทธิ์ในการอัปเดตหรือแก้ไขนโยบายความเป็นส่วนตัวนี้ได้ตลอดเวลา เราจะแจ้งให้ท่านทราบถึงการเปลี่ยนแปลงที่สำคัญผ่านทางเว็บไซต์หรืออีเมล วันที่ "อัปเดตล่าสุด" ที่ด้านบนของนโยบายนี้จะระบุวันที่มีการแก้ไขล่าสุด',
            en: 'We reserve the right to update or revise this Privacy Policy at any time. We will notify you of material changes through the website or email. The "last updated" date shown with this policy reflects the latest revision.',
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "12. ติดต่อเรา", en: "12. Contact Us" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "หากท่านมีคำถาม ข้อกังวล หรือต้องการใช้สิทธิของท่านเกี่ยวกับนโยบายความเป็นส่วนตัวนี้ กรุณาติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO) ของเรา:",
            en: "If you have questions, concerns, or wish to exercise your rights under this Privacy Policy, please contact our Data Protection Officer (DPO):",
          })}
        </p>
        <div className="rf-body mt-2 space-y-1 text-neutral-grey">
          <p>MindBloom</p>
          <p>{t({ th: "โทรศัพท์: +66 83 834 6595", en: "Phone: +66 83 834 6595" })}</p>
          <p>
            {t({
              th: "ที่อยู่: 292/5 ถ.จริญสนิทวงศ์",
              en: "Address: 292/5 Charan Sanitwong Rd.",
            })}
            <br /> {t({ th: "แขวงศิริราช เขตบางกอกน้อย", en: "Siriraj, Bangkok Noi" })}
            <br /> {t({ th: "กรุงเทพฯ 10700", en: "Bangkok 10700" })}
          </p>
        </div>
        <p className="rf-body mt-2">
          {t({
            th: "หากท่านเชื่อว่าสิทธิของท่านถูกละเมิด ท่านมีสิทธิร้องเรียนต่อสำนักงานคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล (สคส.)",
            en: "If you believe your rights have been violated, you have the right to file a complaint with Thailand's Personal Data Protection Committee.",
          })}
        </p>
      </section>
    </div>
  );
};

export default Policy;
