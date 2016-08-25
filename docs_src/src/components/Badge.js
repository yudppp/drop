import React from 'react';
import classnames from 'classnames';

const propTypes = {
  color: React.PropTypes.string,
};

const Badge = (props) => {
    let className = classnames('c-badge', `c-badge--${props.color}`);

    return <span className={className}> {props.children} </span>;
};

Badge.propTypes = propTypes;

export default Badge;