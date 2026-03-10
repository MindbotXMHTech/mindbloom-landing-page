import { svgs } from "../../constants/svgs";

const concernTags = [
  "การงาน",
  "การเรียน",
  "ความคิด",
  "ความสัมพันธ์",
  "อารมณ์",
  "การเงิน",
  "เพื่อน",
  "พฤติกรรม",
  "ซึมเศร้า",
  "ครอบครัว",
  "สุขภาพ",
  "เรื่องเพศ",
  "การดูแลตัวเอง",
  "อื่นๆ",
];

const consultChannels = [
  {
    id: "onsite",
    icon: svgs.pinBlack,
    title: "เข้ารับบริการที่คลินิก",
    detail:
      "พบกับนักจิตวิทยาได้ที่ Mindbloom Clinic\nติดอยู่ใกล้ MRT บางขุนนนท์ ทางออก 4\nเดินทางสะดวกในเขตกรุงเทพฯ",
  },
  {
    id: "online",
    icon: svgs.videoBlack,
    title: "รับบริการแบบออนไลน์",
    detail:
      "พูดคุยกับนักจิตวิทยาผ่าน Zoom Meeting\nสามารถเข้ารับบริการได้จากสถานที่\nที่เป็นส่วนตัวและเหมาะสมต่อการสนทนา",
  },
];

const serviceCards = [
  {
    id: "card-1",
    icon: svgs.consult1,
    titleTh: "การให้คำปรึกษาในรายบุคคล",
    titleEn: "(Individual Counseling)",
    details: [
      "เหมาะสำหรับบุคคลทั่วไป",
      "เป็นพื้นที่ปลอดภัยที่มีความเป็นส่วนตัว",
      "เคารพตัวตน และเปิดโอกาสให้ทำหน้าที่",
      "ตัวเองได้อย่างเต็มที่",
      "เพื่อหาแนวทางและแก้ไขปัญหาร่วมกัน",
    ],
    durationLines: ["60 นาที"],
    priceLines: ["2,000"],
    extra: "เพิ่มเวลา 30 นาที/1,000 บาท",
  },
  {
    id: "card-2",
    icon: svgs.consult2,
    titleTh: "การให้คำปรึกษาในรายบุคคล",
    titleEn: "(Individual Counseling)",
    details: [
      "เหมาะสำหรับบุคคลทั่วไป",
      "เป็นพื้นที่ปลอดภัยที่มีความเป็นส่วนตัว",
      "เคารพตัวตน และเปิดโอกาสให้ทำหน้าที่",
      "ตัวเองได้อย่างเต็มที่",
      "เพื่อหาแนวทางและแก้ไขปัญหาร่วมกัน",
    ],
    durationLines: ["90 นาที"],
    priceLines: ["3,500"],
    extra: "เพิ่มเวลา 30 นาที/1,166 บาท",
  },
  {
    id: "card-3",
    icon: svgs.consult3,
    titleTh: "การให้คำปรึกษาในรายบุคคล",
    titleEn: "(Individual Counseling)",
    details: [
      "เหมาะสำหรับบุคคลทั่วไป",
      "เป็นพื้นที่ปลอดภัยที่มีความเป็นส่วนตัว",
      "เคารพตัวตน และเปิดโอกาสให้ทำหน้าที่",
      "ตัวเองได้อย่างเต็มที่",
      "เพื่อหาแนวทางและแก้ไขปัญหาร่วมกัน",
    ],
    durationLines: ["60-120 นาที"],
    priceLines: ["3,250 -", "4,550"],
    extra: "",
  },
];

function ServicePage() {
  return (
    <div className="mt-14.75 w-full max-w-5xl px-4 s:px-6 m:px-8 pb-24 flex flex-col items-center">
      <section className="w-full max-w-212.5 flex flex-col items-center">
        <h1 className="rf-h4 text-center text-neutral-black">
          ให้คำปรึกษาในด้านต่าง ๆ
        </h1>

        <div className="mt-8 flex max-w-145 flex-wrap justify-center gap-2.5">
          {concernTags.map((tag) => (
            <span
              key={tag}
              className="rf-small rounded-2xl bg-[#CACFC3] px-4 py-2 leading-none text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        <h2 className="mt-9.5 text-xl font-bold text-center">
          รูปแบบการบริการ
        </h2>
        <p className="mt-4 rf-body font-normal text-center text-neutral-black">
          คลินิกมายด์บลูม
          <span className="rf-body font-bold">เปิดให้บริการ</span>
        </p>
        <div className="mt-4 flex flex-col items-center gap-1.5">
          <div className="flex justify-start gap-2 items-center">
            <img src={svgs.calendarBlack} alt="calendar" className="h-4 w-4" />
            <p className="rf-body flex items-center gap-2 text-neutral-black w-62.5">
              วันจันทร์-ศุกร์ เวลา 17.00-20.00 น.
            </p>
          </div>

          <div className="flex justify-start gap-2 items-center">
            <img src={svgs.calendarBlack} alt="calendar" className="h-4 w-4" />
            <p className="rf-body flex items-center gap-2 text-neutral-black w-62.5">
              วันเสาร์-อาทิตย์ เวลา 10.00-20.00 น.
            </p>
          </div>
        </div>

        <div className="my-6 h-px w-full bg-[#dbc8b9]" />

        <p className=" rf-body text-center font-bold text-neutral-grey">
          ให้บริการตามระบบนัดหมายล่วงหน้า
        </p>
        <p className="rf-body text-center text-neutral-grey">
          โดยท่านสามารถเลือกรูปแบบ
        </p>
        <p className="rf-body text-center text-neutral-grey">
          การเข้ารับบริการได้ 2 รูปแบบ ในอัตราค่าบริการเดียวกัน
        </p>

        <div className="mt-8 grid w-full max-w-162 grid-cols-1 gap-4 m:grid-cols-2">
          {consultChannels.map((channel) => (
            <article
              key={channel.id}
              className="rounded-3xl border border-[#E5DACF] bg-white p-4 "
            >
              <p className="rf-body flex items-center gap-2 font-semibold text-neutral-black translate-x-2">
                <img src={channel.icon} alt="" className="h-6 w-6" />
                {channel.title}
              </p>
              <p className="mt-2 whitespace-pre-line rf-small text-neutral-grey">
                {channel.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-9.5 w-full ">
        <h2 className="text-xl font-bold text-neutral-black text-center">
          บริการของมายด์บลูมคลินิก
        </h2>
        <p className="mt-6 rf-small text-center text-neutral-grey">
          คลินิกมายด์บลูมให้บริการ{" "}
          <span className="font-bold rf-body">การให้คำปรึกษาด้านสุขภาพจิต</span>{" "}
          และ
          <span className="font-bold rf-body"> การตรวจประเมินทางจิตวิทยา</span>
        </p>
        <p className="rf-small text-center text-neutral-grey">
          โดยนักจิตวิทยาคลินิก ผู้ได้รับอนุญาตเป็นผู้ประกอบโรคศิลปะ
          สาขาจิตวิทยาคลินิก
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 s:grid-cols-2 m:grid-cols-3 w-full">
          {serviceCards.map((card) => (
            <article
              key={card.id}
              className="flex h-full flex-col rounded-3xl border border-[#ebdfd5] bg-white p-6 min-w-69.25 w-full"
            >
              <div className="flex justify-center">
                <img src={card.icon} alt="" className="h-32 w-auto" />
              </div>

              <h3 className="mt-6 text-center text-[20px] font-semibold leading-tight text-[#55748f]">
                {card.titleTh}
                <br />
                {card.titleEn}
              </h3>

              <p className="mt-6 text-center text-[16px] font-bold text-neutral-grey">
                รายละเอียด
              </p>
              <div className="mt-4 text-center rf-body text-neutral-grey">
                {card.details.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>

              <p className="mt-6 text-center text-[16px] font-bold text-neutral-grey">
                ให้บริการโดย
              </p>
              <div className="mt-4 text-center rf-body text-neutral-grey">
                <p>นักจิตวิทยาคลินิก</p>
                <p>ผู้ได้รับการรับรองเป็นผู้ประกอบโรคศิลปะ</p>
                <p>สาขาจิตวิทยาคลินิก</p>
              </div>

              <p className="mt-6 text-center rf-body text-neutral-grey">
                มีประสบการณ์ในการให้คำปรึกษา
              </p>
              <p className="text-center rf-body text-neutral-grey">
                และบำบัดทางจิตวิทยา
              </p>

              <div className="relative mt-6 h-28 w-full text-[#e5aba4]">
                <div className="absolute top-0 left-6 max-w-32.5 s:max-w-41.25">
                  <p className="text-[40px] s:text-[32px] font-bold leading-tight wrap-break-word">
                    {card.durationLines[0]}
                  </p>
                </div>
                <img
                  src={svgs.pinkLine}
                  width={108}
                  height={100}
                  className="absolute inset-0 m-auto"
                />
                <div className="absolute bottom-0 right-6 flex flex-col items-end">
                  {card.priceLines.map((line) => (
                    <p
                      key={line}
                      className="whitespace-nowrap text-[32px] s:text-[28px] leading-none"
                    >
                      {line}
                    </p>
                  ))}
                  <p className="leading-none text-base">บาท</p>
                </div>
              </div>

              <p className="mt-4 h-11 text-center text-[14px] font-semibold text-[#e2a39d]">
                {card.extra}
              </p>

              <div className="mt-auto pt-3 flex justify-center">
                <button
                  type="button"
                  className="rounded-full border border-[#6c8aa4] px-5 py-2 text-[16px] font-semibold text-[#6c8aa4]"
                >
                  นัดหมาย/สอบถามข้อมูลเพิ่มเติม
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicePage;
