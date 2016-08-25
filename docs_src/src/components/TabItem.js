import React from 'react';
import classnames from 'classnames';

const propTypes = {
  active: React.PropTypes.bool,
};

const defaultProps = {
  active: false,
};

const TabItem = (props) => {
    let className = classnames('c-tabs__item', props.className, {
        'c-tabs__item--active': props.active,
    });

    return <li className={className}><a> {props.children} </a></li>;
};

TabItem.propTypes = propTypes;
TabItem.defaultProps = defaultProps;

export default TabItem;