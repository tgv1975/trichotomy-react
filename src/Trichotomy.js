import React, { Component } from 'react';
import PropTypes from 'prop-types';

import trichotomy from 'trichotomy/dist/trichotomy.min.css';

export default class Trichotomy extends Component {
    static propTypes = {
        direction: PropTypes.oneOf(['vertical', 'horizontal']).isRequired
    }

    render() {
        const {
            children,
            className,
            direction
        } = this.props

        let cssClass = (className &&
            className.concat(' ', trichotomy.trichotomy)) ||
            trichotomy.trichotomy;

        switch (direction) {
            case 'horizontal':
                cssClass = `${cssClass} ${trichotomy.horizontal}`
                break;
            default:
                cssClass = `${cssClass} ${trichotomy.vertical}`
                break;
        }

        return (
            <div className={cssClass}>
                {children}
            </div>
        )
    }
}
