import React, { useState, useEffect } from "react";

const TypingEffect = ({ texts, speed = 80, pause = 1500 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && charIndex <= texts[textIndex].length) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(texts[textIndex].substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (!deleting && charIndex > texts[textIndex].length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return <span>{displayedText}|</span>;
};

export default TypingEffect;
