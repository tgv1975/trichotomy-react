import React, { Component } from 'react';
import PropTypes from 'prop-types';

import trichotomy from 'trichotomy/dist/trichotomy.min.css';

export default class TrichotomyBar extends Component {
    static propTypes = {
        right: PropTypes.bool
    }

    render() {
        const {
            children,
            className,
            right
        } = this.props;

        let cssClass = className;

        if (right) {
            cssClass = `${cssClass} ${trichotomy.right}`.trim();
        }

        return (
            <div className={cssClass}>
                {children}
            </div>
        );
    }
}
