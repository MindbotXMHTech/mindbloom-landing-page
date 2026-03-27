import type { ReactNode } from "react";
import { images } from "../constants/images";
import bottomGlow from "../assets/images/background/bottom-glow.svg";

type VectorItem = {
  src: string;
  className: string;
};

type PageConfig = {
  variant: "green" | "pink";
  plain: boolean;
  showTopShape: boolean;
  showMiddleShape: boolean;
  showBottomShape: boolean;
  showBottomShapes: boolean;
  hideSideShape: boolean;
  showGrain: boolean;
  showSideVectors: boolean;
  vectors: VectorItem[];
};

const BASE: PageConfig = {
  variant: "green",
  plain: false,
  showTopShape: false,
  showMiddleShape: false,
  showBottomShape: false,
  showBottomShapes: false,
  hideSideShape: false,
  showGrain: true,
  showSideVectors: false,
  vectors: [],
};

const V = "absolute pointer-events-none select-none z-10";

const PAGE_CONFIGS: Record<string, Partial<PageConfig>> = {
  home: {
    showTopShape: true,
    showBottomShapes: true,
    hideSideShape: true,
    vectors: [
      { src: images.vector12, className: `${V} left-0 top-1/3 w-45 block` },
      { src: images.vector13, className: `${V} left-10 m:left-[38%] -bottom-40 m:-bottom-65 w-80 m:w-110 block` },
      { src: images.vector14, className: `${V} right-0 top-30 w-30 m:w-50 block` },
      { src: images.vector15, className: `${V} left-0 -bottom-20 w-30 block` },
      { src: images.vector16, className: `${V} right-0 bottom-0 w-24 hidden m:block` },
      { src: images.vector17, className: `${V} left-0 top-0 w-64 block` },
    ],
  },
  psychologist: {
    variant: "pink",
    showMiddleShape: true,
    showSideVectors: true,
  },
  about: {
    plain: true,
    showBottomShape: true,
    showGrain: false,
  },
  blog: {
    vectors: [
      { src: images.vector6,  className: `${V} left-0 top-0 w-40 block` },
      { src: images.vector7,  className: `${V} right-0 bottom-0 w-40 block` },
      { src: images.vector8,  className: `${V} left-0 bottom-0 w-20 m:w-38 block` },
      { src: images.vector9,  className: `${V} right-0 top-10 m:-top-20 w-20 m:w-38 block` },
    ],
  },
  "blog-detail": {
    variant: "pink",
    vectors: [
      { src: images.vector10, className: `${V} left-0 top-0 w-40 block` },
      { src: images.vector11, className: `${V} right-0 bottom-0 w-44 block` },
    ],
  },
  activity: {
    vectors: [
      { src: images.vector18, className: `${V} left-0 top-40 w-40 m:w-60 block` },
      { src: images.vector21, className: `${V} right-0 bottom-100 m:bottom-70 w-30 m:w-44 block` },
      { src: images.vector20, className: `${V} left-0 bottom-0 m:bottom-40 w-50 block` },
      { src: images.vector19, className: `${V} right-0 top-65 w-40 m:w-50 block` },
    ],
  },
  "activity-detail": {
    plain: true,
    showGrain: false,
    vectors: [
      { src: images.vector18, className: `${V} left-0 top-50 w-40 hidden m:block` },
      { src: images.vector19, className: `${V} right-0 bottom-50 w-44 hidden m:block` },
    ],
  },
  service: {
    vectors: [
      { src: images.vector25, className: `${V} left-0 top-30 w-50 block` },
      { src: images.vector27, className: `${V} left-0 top-1/6 w-65 hidden m:block` },
      { src: images.vector22, className: `${V} left-0 bottom-1/6 w-65 hidden m:block` },
      { src: images.vector24, className: `${V} right-0 top-90 w-45 hidden m:block` },
      { src: images.vector26, className: `${V} right-0 top-1/6 w-30 hidden m:block` },
    ],
  },
  workshop: {
    vectors: [
      { src: images.vector25, className: `${V} left-0 top-40 w-50 hidden m:block` },
      { src: images.vector27, className: `${V} -left-10 top-1/6 w-60 hidden m:block` },
      { src: images.vector23, className: `${V} left-0 top-1/2 w-44 hidden m:block` },
      { src: images.vector27, className: `${V} -left-10 bottom-1/7 w-60 hidden m:block` },
      { src: images.vector24, className: `${V} right-0 top-40 w-50 hidden m:block` },
      { src: images.vector28, className: `${V} right-0 top-1/4 w-40 hidden m:block` },
      { src: images.vector24, className: `${V} right-0 bottom-50 w-40 hidden m:block` },
    ],
  },
};

type PageBackgroundProps = {
  children: ReactNode;
  page?: string;
  className?: string;
  contentClassName?: string;
};

function PageBackground({
  children,
  page = "default",
  className = "",
  contentClassName = "",
}: PageBackgroundProps) {
  const config: PageConfig = { ...BASE, ...(PAGE_CONFIGS[page] ?? {}) };

  const rootClassName =
    `mindbloom-bg mindbloom-bg--${config.variant} ${className}`.trim();
  const innerClassName =
    `relative z-20 mx-auto flex min-h-dvh w-full max-w-[1280px] flex-col items-center ${contentClassName}`.trim();

  return (
    <div className={rootClassName}>
      {!config.plain && config.showTopShape && (
        <div aria-hidden className="mindbloom-bg__shape mindbloom-bg__shape--top" />
      )}
      {!config.hideSideShape && !config.plain && (
        <>
          <div aria-hidden className="mindbloom-bg__shape mindbloom-bg__shape--right" />
          <div aria-hidden className="mindbloom-bg__shape mindbloom-bg__shape--left" />
        </>
      )}
      {!config.plain && config.showMiddleShape && (
        <div aria-hidden className="mindbloom-bg__shape mindbloom-bg__shape--middle" />
      )}
      {config.showBottomShapes && (
        <>
          <div aria-hidden className="mindbloom-bg__shape mindbloom-bg__shape--bottom-left" />
          <div aria-hidden className="mindbloom-bg__shape mindbloom-bg__shape--bottom-right" />
        </>
      )}
      {config.plain && config.showBottomShape && (
        <div aria-hidden className="mindbloom-bg__shape mindbloom-bg__shape--bottom-middle" />
      )}
      {!config.plain && config.showBottomShape && (
        <img
          src={bottomGlow}
          aria-hidden
          alt=""
          className="mindbloom-bg__shape mindbloom-bg__shape--bottom-svg"
        />
      )}
      {config.showGrain && !config.plain && (
        <div aria-hidden className="mindbloom-bg__grain" />
      )}
      {!config.plain && config.showSideVectors && (
        <>
          <img src={images.vector5} aria-hidden alt="" className={`${V} right-0 -top-20 m:-top-40 w-20 m:w-44 block`} />
          <img src={images.vector1} aria-hidden alt="" className={`${V} right-0 top-1/2 w-30 block`} />
          <img src={images.vector2} aria-hidden alt="" className={`${V} left-0 top-20 w-44 block`} />
          <img src={images.vector4} aria-hidden alt="" className={`${V} left-0 bottom-1/3 w-35 block`} />
          <img src={images.vector3} aria-hidden alt="" className={`${V} left-1/6 h-1/2 -bottom-100 w-[90%] block`} />
        </>
      )}
      {config.vectors.map((vec, i) => (
        <img key={i} src={vec.src} aria-hidden alt="" className={vec.className} />
      ))}
      <div className={innerClassName}>{children}</div>
    </div>
  );
}

export default PageBackground;
