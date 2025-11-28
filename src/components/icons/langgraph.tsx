export function LangGraphLogoSVG({
  className,
  width,
  height,
}: {
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <img src="/mykaarma-logo.png" alt="myKaarma" width={width} height={height} className={className} />
  );
}
