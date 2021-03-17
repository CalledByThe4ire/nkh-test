import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './grid.module.scss';

const Grid = ({ rows, cols, classModifier }) => {
  return (
    <div className={classnames(styles.Grid, classModifier)}>
      {Children.toArray(
        Array.from({ length: rows }).map((row) => (
          <div className={styles.GridRow}>
            {Children.toArray(
              Array.from(
                { length: cols },
                (_, colIndex) => colIndex + 1
              ).map((value) => <div className={styles.GridCol}><span>{value}</span></div>)
            )}
          </div>
        ))
      )}
    </div>
  );
};

Grid.defaultProps = {
  rows: 2,
  cols: 4,
  classModifier: '',
};

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  classModifier: PropTypes.string.isRequired,
};

export default Grid;
