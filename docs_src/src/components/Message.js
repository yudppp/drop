import React from 'react';
import classnames from 'classnames';

const propTypes = {
  color: React.PropTypes.string,
};

const Message = (props) => {
    let className = classnames('c-message', `c-message--${props.color}`, props.className);
    return <div className={className}> {props.children} </div>;
};

Message.propTypes = propTypes;

export default Message;