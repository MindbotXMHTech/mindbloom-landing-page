import type { ReactNode } from "react";
import { images } from "../constants/images";

type PageBackgroundProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  showTopShape?: boolean;
  showSideVectors?: boolean;
  showMiddleShape?: boolean;
  showArticleVector?: boolean;
  showArticleDetailsVector?: boolean;
  showBottomShapes?: boolean;
  hideSideShape?: boolean;
  showHomeVector?: boolean;
  variant?: "green" | "pink";
};

function PageBackground({
  children,
  className = "",
  contentClassName = "",
  showTopShape = false,
  showSideVectors = false,
  showMiddleShape = false,
  showArticleVector = false,
  showArticleDetailsVector = false,
  showBottomShapes = false,
  hideSideShape = false,
  showHomeVector = false,
  variant = "green",
}: PageBackgroundProps) {
  const rootClassName =
    `mindbloom-bg mindbloom-bg--${variant} ${className}`.trim();
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
      {!hideSideShape && (
        <>
          <div
            aria-hidden
            className="mindbloom-bg__shape mindbloom-bg__shape--right"
          />
          <div
            aria-hidden
            className="mindbloom-bg__shape mindbloom-bg__shape--left"
          />
        </>
      )}
      {showMiddleShape && (
        <div
          aria-hidden
          className="mindbloom-bg__shape mindbloom-bg__shape--middle"
        />
      )}
      {showBottomShapes && (
        <>
          <div
            aria-hidden
            className="mindbloom-bg__shape mindbloom-bg__shape--bottom-left"
          />
          <div
            aria-hidden
            className="mindbloom-bg__shape mindbloom-bg__shape--bottom-right"
          />
        </>
      )}
      <div aria-hidden className="mindbloom-bg__grain" />
      {showSideVectors && (
        <>
          <img
            src={images.vector5}
            aria-hidden
            alt=""
            className="absolute right-0 -top-40 w-44 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={images.vector1}
            aria-hidden
            alt=""
            className="absolute right-0 bottom-180 w-44 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={images.vector2}
            aria-hidden
            alt=""
            className="absolute left-0 top-20 w-44 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={images.vector4}
            aria-hidden
            alt=""
            className="absolute left-0 bottom-1/3 w-44 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={images.vector3}
            aria-hidden
            alt=""
            className="absolute left-1/6 h-1/2 -bottom-100 w-[90%] pointer-events-none select-none hidden m:block z-10"
          />
        </>
      )}

      {showArticleVector && (
        <>
          <img
            src={images.vector6}
            aria-hidden
            alt=""
            className="absolute left-0 top-0 w-40 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={images.vector7}
            aria-hidden
            alt=""
            className="absolute right-0 bottom-0 w-44 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={images.vector8}
            aria-hidden
            alt=""
            className="absolute left-0 bottom-0 w-44 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={images.vector9}
            aria-hidden
            alt=""
            className="absolute right-0 bottom-1/3 w-44 pointer-events-none select-none hidden m:block z-10"
          />
        </>
      )}

      {showArticleDetailsVector && (
        <>
          <img
            src={images.vector10}
            aria-hidden
            alt=""
            className="absolute left-0 top-0 w-40 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={images.vector11}
            aria-hidden
            alt=""
            className="absolute right-0 bottom-0 w-44 pointer-events-none select-none hidden m:block z-10"
          />
        </>
      )}

      {showHomeVector && (
        <>
          <img
            src={images.vector12}
            aria-hidden
            alt=""
            className="absolute left-0 top-1/4 w-45 pointer-events-none select-none block z-10"
          />
          <img
            src={images.vector13}
            aria-hidden
            alt=""
            className="absolute left-10 m:left-[38%] -bottom-40 m:-bottom-65 w-80 m:w-110 pointer-events-none select-none block z-10"
          />
          <img
            src={images.vector14}
            aria-hidden
            alt=""
            className="absolute right-0 top-30 w-30 m:w-50 pointer-events-none select-none block z-10"
          />
          <img
            src={images.vector15}
            aria-hidden
            alt=""
            className="absolute left-0 -bottom-20 w-30 pointer-events-none select-none block z-10"
          />
          <img
            src={images.vector16}
            aria-hidden
            alt=""
            className="absolute right-0 bottom-0 w-24 pointer-events-none select-none hidden m:block z-10"
          />
          <img
            src={images.vector17}
            aria-hidden
            alt=""
            className="absolute left-0 top-0 w-64 pointer-events-none select-none block z-10"
          />
        </>
      )}

      <div className={innerClassName}>{children}</div>
    </div>
  );
}

export default PageBackground;
