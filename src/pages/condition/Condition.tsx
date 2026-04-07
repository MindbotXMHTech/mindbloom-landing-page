import { useLanguage } from "../../i18n/LanguageProvider";

const serviceList = {
  th: [
    "เนื้อหาและบทความให้ความรู้ด้านสุขภาพจิต",
    "ข้อมูลและคำแนะนำเกี่ยวกับบริการของคลินิก",
    "ช่องทางการนัดหมายและติดต่อสอบถาม",
    "เครื่องมือและแบบประเมินสุขภาพจิตเบื้องต้นแบบ interactive",
    "แหล่งข้อมูลและคู่มือด้านสุขภาพจิต",
    "กิจกรรม interactive และชุมชนออนไลน์ (หากมี)",
  ],
  en: [
    "Mental health education content and articles",
    "Information and guidance about the clinic's services",
    "Channels for appointments and inquiries",
    "Interactive mental health screening tools and assessments",
    "Mental health resources and guides",
    "Interactive activities and online community features, if available",
  ],
};

const medicalDisclaimerList = {
  th: [
    "เนื้อหาบนเว็บไซต์ไม่สามารถใช้แทนการปรึกษาแพทย์หรือผู้เชี่ยวชาญด้านสุขภาพจิตโดยตรง",
    "แบบประเมินสุขภาพจิตบนเว็บไซต์เป็นเพียงเครื่องมือคัดกรองเบื้องต้น ไม่ใช่การวินิจฉัยทางคลินิก",
    "หากท่านกำลังประสบปัญหาด้านสุขภาพจิต กรุณาติดต่อแพทย์หรือผู้เชี่ยวชาญโดยตรง",
    "ในกรณีฉุกเฉินทางสุขภาพจิต กรุณาโทรสายด่วนสุขภาพจิต 1323 หรือโทร 1669",
  ],
  en: [
    "Content on this website does not replace direct consultation with a doctor or mental health professional.",
    "Mental health assessments on this website are preliminary screening tools only and are not clinical diagnoses.",
    "If you are experiencing mental health difficulties, please contact a qualified professional directly.",
    "In a mental health emergency, please call the mental health hotline at 1323 or emergency services at 1669.",
  ],
};

const userContentList = {
  th: [
    "เนื้อหาที่ส่งเป็นของท่านหรือท่านมีสิทธิ์ใช้งาน",
    "เนื้อหาไม่ละเมิดสิทธิ์ของบุคคลที่สาม",
    "ท่านให้สิทธิ์มายด์บลูม ในการใช้เนื้อหาดังกล่าวเพื่อปรับปรุงบริการ (ในรูปแบบไม่ระบุตัวตน)",
  ],
  en: [
    "The submitted content belongs to you or you have the right to use it.",
    "The content does not infringe on any third-party rights.",
    "You grant MindBloom permission to use such content in anonymized form to improve our services.",
  ],
};

const communityGuidelineList = {
  th: [
    "เป็นอันตรายต่อตนเองหรือผู้อื่น รวมถึงเนื้อหาที่ส่งเสริมการทำร้ายตนเอง",
    "ดูถูก คุกคาม หรือเลือกปฏิบัติต่อบุคคลหรือกลุ่มบุคคล",
    "เป็นข้อมูลเท็จหรือทำให้เข้าใจผิดเกี่ยวกับสุขภาพจิต",
    "มีเนื้อหาทางเพศ ความรุนแรง หรือสิ่งผิดกฎหมาย",
  ],
  en: [
    "Harms yourself or others, including content promoting self-harm",
    "Insults, harasses, or discriminates against an individual or group",
    "Contains false or misleading mental health information",
    "Includes sexual, violent, or illegal content",
  ],
};

const userResponsibilitiesList = {
  th: [
    "ใช้เว็บไซต์เพื่อวัตถุประสงค์ที่ถูกต้องตามกฎหมายเท่านั้น",
    "ให้ข้อมูลที่ถูกต้องและเป็นจริงเมื่อกรอกแบบฟอร์มหรือลงทะเบียน",
    "รักษาความลับของข้อมูลการเข้าสู่ระบบ (หากมีการลงทะเบียน)",
    "ไม่รบกวนหรือขัดขวางการทำงานของเว็บไซต์",
    "ไม่พยายามเข้าถึงระบบโดยไม่ได้รับอนุญาต",
    "ไม่ใช้เว็บไซต์เพื่อส่งสแปมหรือเนื้อหาที่เป็นอันตราย",
    "ปฏิบัติตามกฎหมายและข้อบังคับที่เกี่ยวข้องทั้งหมด",
  ],
  en: [
    "Use the website only for lawful purposes",
    "Provide accurate and truthful information in forms or registrations",
    "Keep login credentials confidential, if registration applies",
    "Do not interfere with or disrupt website operations",
    "Do not attempt unauthorized access to any system",
    "Do not use the website to send spam or harmful content",
    "Comply with all applicable laws and regulations",
  ],
};

const liabilityLimitList = {
  th: [
    "ความเสียหายโดยตรง ทางอ้อม อุบัติเหตุ พิเศษ หรือผลที่ตามมาจากการใช้งานเว็บไซต์",
    "ความสูญเสียข้อมูลหรือการหยุดชะงักของบริการที่อยู่นอกเหนือการควบคุมของเรา",
    "เนื้อหาหรือความถูกต้องของข้อมูลจากแหล่งบุคคลที่สาม",
    "ผลที่เกิดจากการนำเนื้อหาบนเว็บไซต์ไปใช้โดยไม่ปรึกษาผู้เชี่ยวชาญ",
  ],
  en: [
    "Direct, indirect, incidental, special, or consequential damages arising from use of the website",
    "Data loss or service interruptions beyond our control",
    "Content or accuracy of information from third-party sources",
    "Outcomes resulting from using website content without consulting a professional",
  ],
};

const miscList = {
  th: [
    "หากข้อกำหนดใดไม่ถูกต้องตามกฎหมาย ข้อกำหนดที่เหลือยังคงมีผลบังคับใช้",
    "การที่มายด์บลูม ไม่บังคับใช้สิทธิ์ใดๆ ไม่ถือเป็นการสละสิทธิ์นั้น",
    "ข้อกำหนดเหล่านี้ถือเป็นข้อตกลงทั้งหมดระหว่างท่านกับมายด์บลูม เกี่ยวกับการใช้งานเว็บไซต์",
  ],
  en: [
    "If any provision is unlawful, the remaining provisions remain in effect",
    "MindBloom's failure to enforce any right does not constitute a waiver of that right",
    "These terms constitute the entire agreement between you and MindBloom regarding website use",
  ],
};

const Condition = () => {
  const { language, t } = useLanguage();

  return (
    <div className="mt-14.75 w-full max-w-245 px-4 s:px-6 m:px-8 pb-24 flex flex-col">
      <h1 className="rf-h4 font-normal text-center text-neutral-black mb-8">
        {t({ th: "ข้อกำหนดและเงื่อนไข", en: "Terms and Conditions" })}
      </h1>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "1. การยอมรับข้อกำหนด", en: "1. Acceptance of Terms" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: 'การเข้าถึงและใช้งานเว็บไซต์มายด์บลูม ("เว็บไซต์") ถือว่าท่านได้อ่าน เข้าใจ และยอมรับผูกพันตามข้อกำหนดและเงื่อนไขการใช้งานฉบับนี้ ("ข้อกำหนด") รวมถึงนโยบายความเป็นส่วนตัวของเรา หากท่านไม่ยอมรับข้อกำหนดเหล่านี้ กรุณาหยุดใช้งานเว็บไซต์ทันที ข้อกำหนดเหล่านี้มีผลบังคับใช้กับผู้ใช้งานทุกคน รวมถึงผู้เยี่ยมชมทั่วไป ผู้ลงทะเบียน และผู้ที่เข้าร่วมกิจกรรมบนเว็บไซต์',
            en: 'By accessing and using the MindBloom website ("the Website"), you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions of Use ("Terms"), including our Privacy Policy. If you do not agree to these Terms, please stop using the Website immediately. These Terms apply to all users, including general visitors, registered users, and participants in website activities.',
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "2. คำอธิบายบริการ", en: "2. Description of Services" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "มายด์บลูม เป็นคลินิกสุขภาพจิตที่ให้บริการดังต่อไปนี้ผ่านทางเว็บไซต์:",
            en: "MindBloom is a mental health clinic that offers the following services through the Website:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {serviceList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({
            th: "3. ข้อจำกัดความรับผิดชอบทางการแพทย์ (Medical Disclaimer)",
            en: "3. Medical Disclaimer",
          })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "ข้อมูล เนื้อหา และเครื่องมือทั้งหมดบนเว็บไซต์นี้มีวัตถุประสงค์เพื่อให้ความรู้ทั่วไปเท่านั้น และไม่ถือเป็นคำแนะนำทางการแพทย์ การวินิจฉัยโรค หรือการรักษาทางคลินิก:",
            en: "All information, content, and tools on this Website are for general educational purposes only and do not constitute medical advice, diagnosis, or treatment:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {medicalDisclaimerList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="rf-body indent-12 mt-2">
          {t({
            th: "มายด์บลูม ไม่รับผิดชอบต่อผลที่เกิดจากการนำข้อมูลบนเว็บไซต์ไปใช้โดยไม่ปรึกษาผู้เชี่ยวชาญ",
            en: "MindBloom is not responsible for outcomes resulting from the use of website information without professional consultation.",
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({
            th: "4. คุณสมบัติและกิจกรรม Interactive",
            en: "4. Interactive Features and Activities",
          })}
        </p>
        <p className="rf-body mt-2">{t({ th: "4.1 แบบประเมินตนเอง", en: "4.1 Self-Assessments" })}</p>
        <p className="rf-body indent-12">
          {t({
            th: "แบบประเมินและแบบสอบถามบนเว็บไซต์ออกแบบมาเพื่อให้ข้อมูลเบื้องต้นเท่านั้น ผลลัพธ์ที่ได้ไม่ถือเป็นการวินิจฉัยทางการแพทย์และไม่ควรนำไปใช้ตัดสินใจด้านการรักษาโดยไม่ปรึกษาผู้เชี่ยวชาญ",
            en: "Assessments and questionnaires on the Website are designed to provide preliminary information only. Results are not medical diagnoses and should not be used for treatment decisions without consulting a professional.",
          })}
        </p>
        <p className="rf-body mt-2">{t({ th: "4.2 เนื้อหาที่ผู้ใช้สร้างขึ้น", en: "4.2 User-Generated Content" })}</p>
        <p className="rf-body indent-12">
          {t({
            th: "หากท่านส่งเนื้อหาใดๆ ผ่านฟีเจอร์แบบ interactive ท่านรับรองว่า:",
            en: "If you submit any content through interactive features, you represent that:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {userContentList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
        <p className="rf-body mt-2">{t({ th: "4.3 แนวปฏิบัติชุมชน", en: "4.3 Community Guidelines" })}</p>
        <p className="rf-body indent-12">
          {t({
            th: "ท่านตกลงที่จะไม่โพสต์หรือแชร์เนื้อหาที่:",
            en: "You agree not to post or share content that:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {communityGuidelineList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "5. ความรับผิดชอบของผู้ใช้", en: "5. User Responsibilities" })}
        </p>
        <p className="rf-body indent-12">
          {t({ th: "ท่านตกลงที่จะ:", en: "You agree to:" })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {userResponsibilitiesList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "6. ทรัพย์สินทางปัญญา", en: "6. Intellectual Property" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "เนื้อหาทั้งหมดบนเว็บไซต์นี้ รวมถึงแต่ไม่จำกัดเพียง ข้อความ กราฟิก โลโก้ รูปภาพ วิดีโอ บทความ และซอฟต์แวร์ เป็นทรัพย์สินของมายด์บลูม และ/หรือผู้ให้ใช้สิทธิ์ และได้รับการคุ้มครองโดยกฎหมายทรัพย์สินทางปัญญาของประเทศไทยและกฎหมายระหว่างประเทศ ท่านไม่ได้รับอนุญาตให้ทำซ้ำ แจกจ่าย แก้ไข ส่งต่อ หรือใช้เนื้อหาดังกล่าวในเชิงพาณิชย์โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษรจากมายด์บลูมก่อน",
            en: "All content on this Website, including but not limited to text, graphics, logos, images, videos, articles, and software, is the property of MindBloom and/or its licensors and is protected by Thai and international intellectual property laws. You may not reproduce, distribute, modify, transmit, or use such content commercially without prior written permission from MindBloom.",
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "7. ลิงก์ไปยังเว็บไซต์ภายนอก", en: "7. Links to External Websites" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "เว็บไซต์ของเราอาจมีลิงก์ไปยังเว็บไซต์หรือทรัพยากรของบุคคลที่สาม มายด์บลูม ไม่รับผิดชอบต่อเนื้อหา ความถูกต้อง หรือแนวปฏิบัติด้านความเป็นส่วนตัวของเว็บไซต์เหล่านั้น การเข้าถึงลิงก์ดังกล่าวเป็นความเสี่ยงของท่านเอง",
            en: "Our Website may contain links to third-party websites or resources. MindBloom is not responsible for the content, accuracy, or privacy practices of those websites. Accessing such links is at your own risk.",
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "8. การจำกัดความรับผิด", en: "8. Limitation of Liability" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "ในขอบเขตสูงสุดที่กฎหมายอนุญาต มายด์บลูม จะไม่รับผิดชอบต่อ:",
            en: "To the fullest extent permitted by law, MindBloom will not be liable for:",
          })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {liabilityLimitList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "9. การรับประกันและการสละสิทธิ์", en: "9. Warranties and Disclaimers" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: 'เว็บไซต์และเนื้อหาทั้งหมดจัดให้บริการ "ตามสภาพที่เป็น" (As-Is) และ "ตามที่มีให้บริการ" (As-Available) โดยไม่มีการรับประกันใดๆ ไม่ว่าโดยชัดแจ้งหรือโดยปริยาย มายด์บลูม ไม่รับประกันว่าเว็บไซต์จะทำงานได้อย่างต่อเนื่อง ปราศจากข้อผิดพลาด หรือปลอดจากไวรัส',
            en: 'The Website and all content are provided on an "As-Is" and "As-Available" basis without warranties of any kind, whether express or implied. MindBloom does not guarantee that the Website will operate continuously, error-free, or free from viruses.',
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({
            th: "10. กฎหมายที่ใช้บังคับและการระงับข้อพิพาท",
            en: "10. Governing Law and Dispute Resolution",
          })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "ข้อกำหนดและเงื่อนไขเหล่านี้อยู่ภายใต้และตีความตามกฎหมายของประเทศไทย ข้อพิพาทใดๆ ที่เกิดขึ้นจากหรือเกี่ยวข้องกับข้อกำหนดเหล่านี้จะได้รับการระงับก่อนโดยการเจรจาอย่างสุจริต หากไม่สามารถตกลงกันได้ ข้อพิพาทจะอยู่ภายใต้เขตอำนาจของศาลที่มีอำนาจในประเทศไทย",
            en: "These Terms are governed by and interpreted in accordance with the laws of Thailand. Any dispute arising out of or in connection with these Terms shall first be addressed through good-faith negotiation. If no resolution is reached, the dispute shall fall under the jurisdiction of the competent courts of Thailand.",
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "11. การเปลี่ยนแปลงข้อกำหนด", en: "11. Changes to These Terms" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "เราขอสงวนสิทธิ์ในการแก้ไขข้อกำหนดเหล่านี้ได้ตลอดเวลา โดยจะแจ้งให้ท่านทราบผ่านทางเว็บไซต์ การใช้งานเว็บไซต์ต่อไปหลังจากมีการเปลี่ยนแปลงถือเป็นการยอมรับข้อกำหนดที่อัปเดตแล้ว",
            en: "We reserve the right to amend these Terms at any time and will notify you through the Website. Continued use of the Website after changes take effect constitutes acceptance of the updated Terms.",
          })}
        </p>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "12. ข้อกำหนดเบ็ดเตล็ด", en: "12. Miscellaneous" })}
        </p>
        <ul className="rf-body mt-2 list-disc space-y-1 pl-15 text-neutral-grey marker:text-neutral-grey">
          {miscList[language].map((item) => (
            <li key={item} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="text-neutral-grey">
        <p className="rf-body font-bold text-left">
          {t({ th: "13. ติดต่อเรา", en: "13. Contact Us" })}
        </p>
        <p className="rf-body indent-12">
          {t({
            th: "หากท่านมีคำถามเกี่ยวกับข้อกำหนดและเงื่อนไขเหล่านี้ กรุณาติดต่อเรา:",
            en: "If you have any questions about these Terms and Conditions, please contact us:",
          })}
        </p>
        <div className="rf-body mt-2 space-y-1 pl-12 text-neutral-grey">
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
      </section>
    </div>
  );
};

export default Condition;
