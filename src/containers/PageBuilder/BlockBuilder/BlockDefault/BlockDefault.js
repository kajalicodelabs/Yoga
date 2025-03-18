import React from 'react';
import classNames from 'classnames';

import Field, { hasDataInFields } from '../../Field';
import BlockContainer from '../BlockContainer';
import { CiCirclePlus } from 'react-icons/ci';
import css from './BlockDefault.module.css';
import FAQSection from './FAQSection';
import SlickSlider from '../../../../components/SlickSlider/slickSlider';
import IconCard from '../../../../components/SavedCardDetails/IconCard/IconCard';

const FieldMedia = props => {
  const { className, media, sizes, options } = props;
  const hasMediaField = hasDataInFields([media], options);
  return hasMediaField ? (
    <div className={classNames(className, css.media)}>
      <Field data={media} sizes={sizes} options={options} />
    </div>
  ) : null;
};

/**
 * @typedef {Object} FieldComponentConfig
 * @property {ReactNode} component
 * @property {Function} pickValidProps
 */

/**
 * This returns a component that can render 'defaultBlock' config.
 *
 * @component
 * @param {Object} props
 * @param {string?} props.blockId id from the block config
 * @param {string} props.blockName name from the block config (not used)
 * @param {'defaultBlock'} props.blockType blockType is set to 'defaultBlock'
 * @param {string?} props.className add more style rules in addition to components own css.root
 * @param {string?} props.rootClassName overwrite components own css.root
 * @param {string?} props.className add more styles in addition to components own css.root
 * @param {string?} props.mediaClassName add styles for the block's attached media field
 * @param {string?} props.textClassName add styles for the block's attached text field
 * @param {string?} props.ctaButtonClass add styles for the block's attached CTA field
 * @param {Object?} props.title heading config for the block
 * @param {Object?} props.text content config for the block (can be markdown)
 * @param {Object?} props.callToAction call to action button (e.g. internal link config)
 * @param {string?} props.responsiveImageSizes
 * @param {Object} props.options extra options for the block component (e.g. custom fieldComponents)
 * @param {Object<string,FieldComponentConfig>?} props.options.fieldComponents Custom fieldComponents
 * @returns {JSX.Element} component that renders block type: 'defaultBlock'
 */
const BlockDefault = props => {
  const {
    blockId,
    className,
    rootClassName,
    mediaClassName,
    textClassName,
    ctaButtonClass,
    title,
    text,
    callToAction,
    media,
    responsiveImageSizes,
    options,
    alignment,
  } = props;
  console.log(blockId, 'blockId');
  const classes = classNames(rootClassName || css.root, className);
  const hasTextComponentFields = hasDataInFields([title, text, callToAction], options);

  const alignmentClasses = {
    left: css.alignLeft,
    center: css.alignCenter,
    right: css.alignRight,
  };

  const alignmentClass = alignmentClasses[alignment];

  return (
    <BlockContainer id={blockId} className={classes}>
      <FieldMedia
        media={media}
        sizes={responsiveImageSizes}
        className={mediaClassName}
        options={options}
      />

      {blockId === 'faq-left-section' ? (
        <div className={css.joinBackground}>
          <h1 className={css.leftHeading}>Need any help? Don’t hesitate to join us</h1>
          <button className={css.getButton}>
            Get In touch
            <IconCard brand="rightarrow" />
          </button>
        </div>
      ) : blockId === 'faq-right-section' ? (
        <div>
          <FAQSection />
        </div>
      ) : blockId === 'multi-image-slider' ? (
        <div>
          <SlickSlider />
        </div>
      ) : (
        <>
          {hasTextComponentFields ? (
            <div
              className={classNames(
                blockId === 'hero-left'
                  ? css.heroBlockLeft
                  : blockId === 'journeyCard-section'
                  ? css.journeyCard
                  : blockId === 'instructor-card'
                  ? css.instructorCard
                  : textClassName,
                alignmentClass,
                css.text
              )}
            >
              <Field data={title} options={options} />
              <Field data={text} options={options} />
              {/* <Field data={callToAction} className={ctaButtonClass} options={options} /> */}
            </div>
          ) : null}
        </>
      )}
    </BlockContainer>
  );
};

export default BlockDefault;
