import React from 'react';
import classnames from 'classnames';

const propTypes = {
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  color: React.PropTypes.string,
  size: React.PropTypes.string,
};

const defaultProps = {
  active: false,
  disabled: false,
};

const Button = (props) => {
    let className = classnames('c-button', `c-button--${props.color}`, `c-button--${props.size}`, props.className, {
        'is-active': props.active,
        'is-disabled': props.disabled
    });

    return <a className={className}> {props.children} </a>;
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;