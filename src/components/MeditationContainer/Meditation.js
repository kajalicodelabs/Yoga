import React from 'react';
import css from '../../components/MeditationContainer/Meditation.module.css'
import mediatationFirstImg from '../../assets/meditationFirst.png'
import mediatationSecondImg from '../../assets/meditationSecond.png';
import mediatationThirdImg from '../../assets/meditaionThird.png'
import mediatationFourthImg from '../../assets/mdeiationFourth.png';

const Meditation = () => {
  return (
    <>
      {/* <div className={css.outerMediationWrapper}> */}
        <div className={css.meditationCardWrapper}>
          <div className={css.meditationCard}>
            <div>
              <img src={mediatationFirstImg}/>
              <img src={mediatationSecondImg} className={css.mediationImg}/>
              <img src={mediatationThirdImg} className={css.mediationImg}/>
              <img src={mediatationFourthImg} className={css.mediationImg}/>
            </div>
            <div className={css.meditationRightCard}>
              <p className={css.plusDescription}>Plus 25K</p>
              <p className={css.trustedDescription}>Trusted</p>
            </div>
          </div>
          <h1 className={css.meditationHeading}>Yoga Program Healthy lifestyle</h1>
          <p>
            Est officia omnis qui repellat facere. Exercitationem iusto culpa maxime velit quia iure
            asperiores aut.
          </p>
        </div>
        {/* <div className={css.haha}>
          <MeditationSlider />
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Meditation;
