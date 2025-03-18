import React, { useState } from 'react';
import css from '../BlockDefault/FAQSection.module.css';
import IconCard from '../../../../components/SavedCardDetails/IconCard/IconCard';

const FAQSection = () => {
  const faqData = [
    { heading: 'Ut repudiandae consequatur nemo et.' },
    { heading: 'Nulla ex ad inventore error cumque alias est.' },
    { heading: 'Accusamus veniam quisquam autem ratione.' },
    { heading: 'Voluptatem corrupti qui omnis et iste dolorem.' },
    { heading: 'Ad voluptas temporibus magnam soluta.' },
    { heading: 'Tenetur ut ducimus rerum libero quidem.' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleIconClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  console.log(openIndex, "openIndex")
  return (
    <>
      <div className={css.faqWrapper}>
        {faqData.map((data, index) => (
          <div className={css.faqCard} key={index} onClick={() => handleIconClick(index)}>
            <div className={css.faqContainer}>
              <h1>{data.heading}</h1>
              <IconCard brand={openIndex === index ? 'minusicon' : 'plusicon'} />
            </div>
            {openIndex === index && (
              <p>
                In et facere voluptatem consequatur necessitatibus qui consequatur vitae ab. Earum
                quivel. Ab veritatis accusamus nihil dolores quo assumenda odit. Nam aut fugiat id
                minima.
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FAQSection;
