import React, { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Icon from './../icon';
import accordionStyles from './accordion.module.scss';
import iconStyles from '../icon/icon.module.scss';

const Accordion = ({ title, children }) => {
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotation, setRotation] = useState('');

  const accordionContainerRef = useRef();
  const accordionInnerRef = useRef();

  const resetState = () => {
    setActive('');
    setHeight('0px');
    setRotation('');
  };

  useEffect(() => {
    const mouseDownListener = (event) => {
      if (
        !accordionContainerRef.current ||
        accordionContainerRef.current.contains(event.target)
      ) {
        return;
      }
    };

    resetState();

    document.addEventListener('mousedown', mouseDownListener);

    return () => {
      document.removeEventListener('mousedown', mouseDownListener);
    };
  }, []);

  const handleClick = () => {
    setActive(active === '' ? accordionStyles.AccordionTogglerActive : '');
    setHeight(
      active === accordionStyles.AccordionTogglerActive
        ? '0px'
        : `${accordionInnerRef.current.scrollHeight}px`
    );
    setRotation(
      active === accordionStyles.AccordionTogglerActive
        ? ''
        : iconStyles.IconRotated
    );
  };

  return (
    <div className={accordionStyles.Accordion} ref={accordionContainerRef}>
      <button
        className={classnames(accordionStyles.AccordionToggler, active)}
        onClick={handleClick}
      >
        <p className={accordionStyles.AccordionTitle}>{title}</p>
        <Icon
          name="shevron"
          width="12"
          fill="#000"
          className={classnames(iconStyles.IconShevron, rotation)}
        />
      </button>
      <div
        ref={accordionInnerRef}
        style={{ maxHeight: `${height}` }}
        className={accordionStyles.AccordionInner}
      >
        <div className={accordionStyles.AccordionContent}>{children}</div>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Accordion;
