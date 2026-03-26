import type { ReactNode } from "react";
import { images } from "../constants/images";
import bottomGlow from "../assets/images/background/bottom-glow.svg";

type PageBackgroundProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  showTopShape?: boolean;
  showBottomShape?: boolean;
  showSideVectors?: boolean;
  showMiddleShape?: boolean;
  showArticleVector?: boolean;
  showArticleDetailsVector?: boolean;
  showBottomShapes?: boolean;
  hideSideShape?: boolean;
  variant?: "green" | "pink";
  plain?: boolean;
};

function PageBackground({
  children,
  className = "",
  contentClassName = "",
  showTopShape = false,
  showBottomShape = false,
  showSideVectors = false,
  showMiddleShape = false,
  showArticleVector = false,
  showArticleDetailsVector = false,
  showBottomShapes = false,
  hideSideShape = false,
  variant = "green",
  plain = false,
}: PageBackgroundProps) {
  const rootClassName =
    `mindbloom-bg mindbloom-bg--${variant} ${className}`.trim();
  const innerClassName =
    `relative z-20 mx-auto flex min-h-dvh w-full max-w-[1280px] flex-col items-center ${contentClassName}`.trim();

  return (
    <div className={rootClassName}>
      {!plain && showTopShape && (
        <div
          aria-hidden
          className="mindbloom-bg__shape mindbloom-bg__shape--top"
        />
      )}
      {!hideSideShape && (
        <>
          {!plain && (
        <div
              aria-hidden
              className="mindbloom-bg__shape mindbloom-bg__shape--right"
            />
          )}
      {!plain && (
        <div
              aria-hidden
              className="mindbloom-bg__shape mindbloom-bg__shape--left"
            />
        </>
      )}
      )}
      {!plain && showMiddleShape && (
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
      {showBottomShape && (
        <img
          src={bottomGlow}
          aria-hidden
          alt=""
          className="mindbloom-bg__shape mindbloom-bg__shape--bottom-svg"
        />
      )}
      {!plain && <div aria-hidden className="mindbloom-bg__grain" />}
      {!plain && showSideVectors && (
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

      {!plain && showArticleVector && (
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

      {!plain && showArticleDetailsVector && (
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

      <div className={innerClassName}>{children}</div>
    </div>
  );
}

export default PageBackground;
