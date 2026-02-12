import { NavLink } from "react-router-dom";
import { svgs } from "../../constants/svgs";

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    "transition-colors duration-200 px-4 py-2",
    isActive
      ? "text-neutral-black font-semibold"
      : "text-neutral-grey font-normal hover:text-neutral-black",
  ].join(" ");

const Nav = () => {
  return (
    <div className="w-full mx-auto py-6 flex items-center justify-between z-50">
      <img
        src={svgs.logoMindbloom}
        alt="mindbloom"
        width={65}
        height={34}
        className="object-cover"
      />

      <div className="flex flex-1 items-center justify-center gap-5 font-sans text-base">
        <NavLink to="/" end className={linkClassName}>
          หน้าหลัก
        </NavLink>
        <NavLink to="/service" className={linkClassName}>
          บริการของเรา
        </NavLink>
        <NavLink to="/phycologist" className={linkClassName}>
          นักจิตวิทยา
        </NavLink>
        <NavLink to="/activity" className={linkClassName}>
          กิจกรรม
        </NavLink>
        <NavLink to="/blog" className={linkClassName}>
          บทความ
        </NavLink>
        <NavLink to="/about" className={linkClassName}>
          เกี่ยวกับเรา
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
