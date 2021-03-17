import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './icon.module.scss';

const SVG = ({
  width = '100%',
  height = '100%',
  fill = '#000',
  className: SVGClassName = '',
}) => (
  <svg
    width={width}
    height={width}
    viewBox="0 0 320 512"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames(styles.Icon, `${SVGClassName}`)}
  >
    <path
      fill={fill}
      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
    />
  </svg>
);

SVG.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default SVG;
