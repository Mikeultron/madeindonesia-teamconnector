import { useEffect, useRef, useState } from "react";

export const useOutsideClick = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  const handleOutsideClick = () => {
    console.log("Clicked");

    if (ref.current) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document
      .querySelector(".oustide")
      ?.addEventListener("click", handleOutsideClick);
    return () => {
      document
        .querySelector(".oustide")
        ?.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return [ref, isVisible, setIsVisible] as const;
};
