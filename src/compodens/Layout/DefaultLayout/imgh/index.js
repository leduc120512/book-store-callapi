import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import Main from "./main.jpg";
import styles from "./img-modele.scss";

const DefaultLayout = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const cx = classNames.bind(styles);

  useEffect(() => {
    updateSlidesDisplay();
  }, [slideIndex]);

  const updateSlidesDisplay = () => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (slides.length > 0) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
    }

    if (dots.length > 0) {
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      dots[slideIndex - 1].className += " active";
    }
  };

  const plusSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    let newIndex = slideIndex + n;
    if (newIndex > slides.length) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = slides.length;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div>
      {/* Slideshow container */}
      <div className={cx("slideshow-container")}>
        {/* Full-width images with number and caption text */}
        <div className={cx("mySlides", "fade")}>
          <div className={cx("numbertext")}></div>
          <img
            className={cx("silde")}
            src={Main}
            style={{ width: "100%" }}
            alt="First slide"
          />
          <div className={cx("text")}></div>
        </div>

        <div className={cx("mySlides", "fade")}>
          <div className={cx("numbertext")}></div>
          <img
            className={cx("silde")}
            src={Main}
            style={{ width: "100%" }}
            alt="Second slide"
          />
          <div className={cx("text")}></div>
        </div>

        <div className={cx("mySlides", "fade")}>
          <div className={cx("numbertext")}></div>
          <img
            className={cx("silde")}
            src={Main}
            style={{ width: "100%" }}
            alt="Third slide"
          />
          <div className={cx("text")}></div>
        </div>

        {/* Next and previous buttons */}
        <a className={cx("prev")} onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className={cx("next")} onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
      <br />
      {/* The dots/circles */}
    </div>
  );
};

export default DefaultLayout;
