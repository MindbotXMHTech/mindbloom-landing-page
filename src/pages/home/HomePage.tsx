function HomePage() {
  return (
    <div className="w-full flex justify-center mt-14.75">
      <section className="flex flex-col justify-center gap-4">
        <h1 className="rf-h1">พื้นที่ปลอดภัยสำหรับดูแลจิตใจ</h1>
        <h1 className="text-xl text-center">ผ่านวิดีโอคอล</h1>

        <div>
          <div className="bg-white px-6 py-2 rounded-3xl w-60.5 shadow-[0px_0px_20px_0px_rgba(255,255,255,1)]">
            <p className="text-center text-neutral-grey">
              <span className="font-semibold">โดย นักจิตวิทยา</span>
              <br />
              มากประสบการณ์
            </p>
          </div>

          <div className="bg-white px-6 py-2 rounded-3xl w-60.5 shadow-[0px_0px_20px_0px_rgba(255,255,255,1)]">
            <p className="text-center text-neutral-grey">
              <span className="font-semibold">ให้บริการตามมาตรฐาน</span>
              <br />
              และจรรยาบรรณวิชาชีพ
            </p>
          </div>

          <div className="bg-white px-6 py-2 rounded-3xl w-60.5 shadow-[0px_0px_20px_0px_rgba(255,255,255,1)]">
            <p className="text-center text-neutral-grey font-semibold">
              <span className="font-normal">ให้บริการทั้งแบบ</span>
              <br />
              พบหน้าที่คลินิก และแบบออนไลน์
            </p>
          </div>

          <div className="bg-white px-6 py-2 rounded-3xl w-60.5 shadow-[0px_0px_20px_0px_rgba(255,255,255,1)]">
            <p className="text-center text-neutral-grey">
              <span className="font-semibold">
                คัดเลือกนักจิตวิทยาที่เหมาะสมกับ
              </span>
              <br />
              ความต้องการและประเด็นของคุณ
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
