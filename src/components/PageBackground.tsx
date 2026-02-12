import type { ReactNode } from "react";

type PageBackgroundProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

function PageBackground({
  children,
  className = "",
  contentClassName = "",
}: PageBackgroundProps) {
  const rootClassName = `mindbloom-bg ${className}`.trim();
  const innerClassName = `relative z-10 ${contentClassName}`.trim();

  return (
    <div className={rootClassName}>
      <div
        aria-hidden
        className="mindbloom-bg__shape mindbloom-bg__shape--top"
      />
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
