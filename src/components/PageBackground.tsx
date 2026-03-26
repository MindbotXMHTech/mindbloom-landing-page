import type { ReactNode } from "react";
import vector1 from "../assets/images/background/vector1.png";
import vector2 from "../assets/images/background/vector2.png";
import vector3 from "../assets/images/background/vector3.png";
import vector4 from "../assets/images/background/vector4.png";
import vector5 from "../assets/images/background/Vector5.png";

type PageBackgroundProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  showTopShape?: boolean;
  showSideVectors?: boolean;
  showMiddleShape?: boolean;
  variant?: "green" | "pink";
};

function PageBackground({
  children,
  className = "",
  contentClassName = "",
  showTopShape = false,
  showSideVectors = false,
  showMiddleShape = false,
  variant = "green",
}: PageBackgroundProps) {
  const rootClassName = `mindbloom-bg mindbloom-bg--${variant} ${className}`.trim();
  const innerClassName =
    `relative z-20 mx-auto flex min-h-dvh w-full max-w-[1280px] flex-col items-center ${contentClassName}`.trim();

  return (
    <div className={rootClassName}>
      {showTopShape && (
        <div
          aria-hidden
          className="mindbloom-bg__shape mindbloom-bg__shape--top"
        />
      )}
      <div
        aria-hidden
        className="mindbloom-bg__shape mindbloom-bg__shape--right"
      />
      <div
        aria-hidden
        className="mindbloom-bg__shape mindbloom-bg__shape--left"
      />
      {showMiddleShape && (
        <div
          aria-hidden
          className="mindbloom-bg__shape mindbloom-bg__shape--middle"
        />
      )}
      <div aria-hidden className="mindbloom-bg__grain" />
      {showSideVectors && (
        <>
          <img
            src={vector5}
            aria-hidden
            alt=""
            className="absolute right-0 -top-40 w-44 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={vector1}
            aria-hidden
            alt=""
            className="absolute right-0 bottom-180 w-44 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={vector2}
            aria-hidden
            alt=""
            className="absolute left-0 top-20 w-44 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={vector4}
            aria-hidden
            alt=""
            className="absolute left-0 bottom-1/3 w-44 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={vector3}
            aria-hidden
            alt=""
            className="absolute left-1/6 h-1/2 -bottom-100 w-[90%] pointer-events-none select-none hidden m:block z-10"
          />
        </>
      )}

      <div className={innerClassName}>{children}</div>
    </div>
  );
}

export default PageBackground;
