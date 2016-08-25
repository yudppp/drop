import React from 'react';
import classnames from 'classnames';

const propTypes = {
  active: React.PropTypes.bool,
};

const defaultProps = {
  active: false,
};

const BreadcrumbItem = (props) => {
    let className = classnames('c-breadcrumbs__item', props.className, {
        'c-breadcrumbs__item--active': props.active,
    });

    return <li className={className}><a> {props.children} </a></li>;
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;

export default BreadcrumbItem;