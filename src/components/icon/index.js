import React from 'react';
import PropTypes from 'prop-types';

import Shevron from './shevron';

const Icon = (props) => {
  switch (props.name) {
    case 'shevron':
      return <Shevron {...props} />;
    default:
      return;
  }
};

Icon.defaultProps = {
  width: '100%',
  height: '100%',
  fill: '#000',
  className: '',
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Icon;
