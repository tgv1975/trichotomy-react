import React, { Component } from 'react';
import PropTypes from 'prop-types';

import trichotomy from 'trichotomy/dist/trichotomy.min.css';

export default class TrichotomyCenterpiece extends Component {

    static propTypes = {

    }

    render() {
        const {
            children,
            className
        } = this.props;

        let cssClass = (className &&
            className.concat(' ', trichotomy.centerpiece)) ||
            trichotomy.centerpiece;

        return (
            <div className={cssClass}>
                {children}
            </div>
        );
    }
}
