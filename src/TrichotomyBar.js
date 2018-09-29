import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import trichotomy from 'trichotomy/dist/trichotomy.min.css';

export default class TrichotomyBar extends PureComponent {
    static defaultProps = {
        tag: 'div',
        right: false,
    }

    static propTypes = {
        tag: PropTypes.string,
        right: PropTypes.bool,
    }

    render() {
        const {
            children,
            className,
            right,
            tag,
        } = this.props;

        const Tag = tag;

        let cssClass = className || '';

        if (right) {
            cssClass = `${cssClass} ${trichotomy.right}`.trim();
        }

        return (
            <Tag className={cssClass}>
                {children}
            </Tag>
        );
    }
}
