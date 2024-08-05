import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { imageVariants, textVariants, entryVariants } from "../Variants";
import { cardData } from "./Data";
import "./css/card.css";
import quotes from "../assets/images/pattern-quotes.svg";
import iconNext from "../assets/images/icon-next.svg";
import iconPrev from "../assets/images/icon-prev.svg";

function Card() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { name, role, imgSrc, parag } = cardData[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };
  return (
    <motion.div
      className={`card-wrapper`}
      variants={entryVariants}
      initial="initial"
      animate="animate"
      role="region"
      aria-live="polite"
      aria-label="Testimonial Slider"
    >
      <motion.div className={`card-inner-container`}>
        <div className="slider-wrapper">
          <motion.div className="image-buttons-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={imgSrc}
                className="image-wrapper"
                variants={imageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.img
                  src={imgSrc}
                  alt={`Image of ${name}`}
                  className="slider-img"
                />
              </motion.div>
            </AnimatePresence>
            <div className="buttons-wrapper">
              <button onClick={nextSlide} className="btn prev" aria-label="Previous Slide">
                <img src={iconPrev} alt="icon-previous" className="prev-icon" />
              </button>
              <button onClick={prevSlide} className="btn next" aria-label="Next Slide">
                <img src={iconNext} alt="icon-next" className="next-icon" />
              </button>
            </div>
          </motion.div>
        </div>
        <section className="text-container">
          <img
            src={quotes}
            alt="Pattern quotes"
            className="qutotes-img"
          />
          <AnimatePresence mode="wait">
            <motion.p
              key={parag}
              className="card-parag"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="initial"
            >
              {parag}
            </motion.p>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h1
              key={name}
              className="card-title"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="initial"
            >
              {name}
              <span className="role">{role}</span>
            </motion.h1>
          </AnimatePresence>
        </section>
      </motion.div>
    </motion.div>
  );
}

export default Card;