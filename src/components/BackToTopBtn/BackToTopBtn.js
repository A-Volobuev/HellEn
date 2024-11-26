import React, { useState, useEffect } from "react";
import { Button, Svg } from "./BackToTopBtn.styled";

export const BackToTopBtn = () => {
  const [isVisibleBtn, setIsVisibleBtn] = useState(false);
  // Показать кнопку через n пикселей
  useEffect(() => {
    const toggleVisibility = () => { 
      if (window.scrollY > 1700) {
        setIsVisibleBtn(true);
      } else {
        setIsVisibleBtn(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Прокрутка вверх
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisibleBtn && (
        <Button onClick={toTop}><Svg/></Button>
      )}
    </>
  );
};