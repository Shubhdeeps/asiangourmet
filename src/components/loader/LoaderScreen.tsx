import { useEffect, useRef } from "react";

export default function LoaderScreen() {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (divRef.current) {
        divRef.current.classList.remove("overlay-1");
        divRef.current.classList.add("overlay");
      }
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  });
  return <div ref={divRef} className="overlay-1"></div>;
}
