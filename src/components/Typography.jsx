import React from 'react';
import { PropTypes } from 'prop-types';

const Typography = (props) => {
  const style = {
    color: props.color,
    ...props.style
  };
  return (
    <span style={style}>{props.children}</span>
  );
};

Typography.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.shape({})
};

Typography.defaultProps = {
  variant: 'body1',
  color: 'black',
  style: undefined
};

export default Typography
