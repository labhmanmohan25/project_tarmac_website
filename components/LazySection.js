import { useEffect, useRef, useState } from "react";

export default function LazySection({
  children,
  render,
  minHeight = 480,
  rootMargin = "600px 0px",
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible || !containerRef.current) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  const content = isVisible
    ? typeof render === "function"
      ? render()
      : children
    : null;

  return (
    <div
      ref={containerRef}
      style={{
        minHeight: isVisible ? undefined : minHeight,
      }}
    >
      {content}
    </div>
  );
}