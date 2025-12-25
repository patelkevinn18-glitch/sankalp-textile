type ResponsiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
};

function buildSrcSet(src: string) {
  const isExternal = src.startsWith("http://") || src.startsWith("https://");
  if (!isExternal) return undefined;

  const widths = [480, 768, 1024, 1280, 1600, 2000];
  const hasQuery = src.includes("?");
  const base = src;
  const delimiter = hasQuery ? "&" : "?";

  return widths.map((w) => `${base}${delimiter}w=${w} ${w}w`).join(", ");
}

export function ResponsiveImage({
  src,
  alt,
  className,
  width,
  height,
  sizes = "(max-width: 720px) 100vw, 50vw",
  priority = false,
}: ResponsiveImageProps) {
  return (
    <img
      className={className}
      src={src}
      srcSet={buildSrcSet(src)}
      sizes={buildSrcSet(src) ? sizes : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}


