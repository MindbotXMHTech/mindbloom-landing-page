import type { ReactNode } from "react";

type PageBackgroundProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  showTopShape?: boolean;
};

function PageBackground({
  children,
  className = "",
  contentClassName = "",
  showTopShape = false,
}: PageBackgroundProps) {
  const rootClassName = `mindbloom-bg ${className}`.trim();
  const innerClassName =
    `relative z-10 mx-auto flex min-h-dvh w-full max-w-[1280px] flex-col items-center ${contentClassName}`.trim();

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
      <div aria-hidden className="mindbloom-bg__grain" />
      <div className={innerClassName}>{children}</div>
    </div>
  );
}

export default PageBackground;
