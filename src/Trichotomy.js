import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import trichotomy from 'trichotomy/dist/trichotomy.min.css';

export default class Trichotomy extends PureComponent {
    static defaultProps = {
        tag: 'div',
    }

    static propTypes = {
        tag: PropTypes.string,
        direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired,
    }

    render() {
        const {
            children,
            className,
            tag,
            direction,
        } = this.props;

        const Tag = tag;

        let cssClass = (className && className.concat(' ', trichotomy.trichotomy))
            || trichotomy.trichotomy;

        switch (direction) {
            case 'horizontal':
                cssClass = `${cssClass} ${trichotomy.horizontal}`;
                break;
            default:
                cssClass = `${cssClass} ${trichotomy.vertical}`;
                break;
        }

        return (
            <Tag className={cssClass}>
                {children}
            </Tag>
        );
    }
}
