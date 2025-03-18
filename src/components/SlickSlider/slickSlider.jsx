import React from "react";
import css from '../../components/SlickSlider/slickslider.module.css';
import IconCard from '../../components/SavedCardDetails/IconCard/IconCard'


const SlickSlider = () => {
  return (
    <>
      <div className={css.parent}>
        {/* first slider */}
        <div className={css.block1}>
          <div className={css.c1}></div>
          <div className={css.c2}></div>
          <div className={css.c3}></div>

          <div className={css.c9}></div>
        </div>

         {/* second slider */}
        <div className={css.block2}>
          <div className={css.c1}></div>
          <div className={css.c4}></div>

          <div className={css.c9}></div>

        </div>

         {/* third slider */}
        <div className={css.block4}>
          <div className={css.c3}></div>

          <div className={css.c9}></div>

        </div>

         {/* fourth slider */}
        <div className={css.block3}>
          <div className={css.c5}></div>

          <div className={css.c9}></div>
        </div>

         {/* five slider */}
        <div className={css.block2}>
          <div className={css.c1}></div>
          <div className={css.c6}></div>

          <div className={css.c9}></div>
        </div>

         {/* six slider */}
        <div className={css.block1}>
          <div className={css.c1}></div>
          <div className={css.c7}></div>
          <div className={css.c8}></div>

          <div className={css.c9}></div>
        </div>
      </div>

      <div className={css.testimonialsWrapper}>
        <button className={css.testimonialsBtn}>Testimonial</button>
        <h1 className={css.testimonialsHeading}>Trusted by Many, Loved by All</h1>
        <p className={css.testimonialsDescription}>Discover how our services have transformed lives! Read real experiences from our happy clients who have found guidance, clarity, and success through our expert support.</p>
        <button className={css.readMoreButton}>Read More
          <IconCard brand="rightarrow"/>
        </button>
      </div>
    </>
  );
};

export default SlickSlider;

