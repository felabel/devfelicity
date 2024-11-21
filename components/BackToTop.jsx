"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show the button when scrolled down 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isVisible) {
    console.log("show top");
  }

  return (
    isVisible && (
      <a
        href="javascript:void(0)"
        onClick={scrollToTop}
        className="ob id kd pe kh hc ub vd c n o p _ yi ai ci back-to-top"
        // className="fixed bottom-4 right-4 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition"
        title="Back to top"
      >
        {/* Replace with your desired icon or text */}
        <span className="ic vb _d ae ee cd ya"></span>
      </a>
    )
  );
}
