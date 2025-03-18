import React from 'react';
import Slider from 'react-slick';
import css from './meditationSlider.module.css';
import sliderImg from '../../assets/sliderFirstImg.png';
import sliderSecondImg from '../../assets/sliderSecondImg.png';
import sliderThirdImg from '../../assets/sliderThirdImg.png';

const MeditationSlider = () => {
  const sliderData = [
    {
      image: sliderImg,
      heading: 'Repel lat aut necessitates',
      description:
        'Ad non veniam rerum eum fugiat quo animi possimus. Placeat saepe omnis aliquid at sint totam ut distinctio. Dolor quia quas.',
    },
    {
      image: sliderSecondImg,
      heading: 'Repel lat aut necessitates',
      description:
        'Ad non veniam rerum eum fugiat quo animi possimus. Placeat saepe omnis aliquid at sint totam ut distinctio. Dolor quia quas.',
    },
    {
      image: sliderThirdImg,
      heading: 'Repel lat aut necessitates',
      description:
        'Ad non veniam rerum eum fugiat quo animi possimus. Placeat saepe omnis aliquid at sint totam ut distinctio. Dolor quia quas.',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <>
      <Slider {...settings}>
        {sliderData.map((data, index) => {
          return (
            <div className={css.sliderWrapper} key={index}>
              <div>
                <img src={data.image} alt="Slider Image" />
              </div>
              <div>
                <h1 className={css.sliderHeading}>{data.heading}</h1>
                <p className={css.sliderDescription}>{data.description}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default MeditationSlider;
