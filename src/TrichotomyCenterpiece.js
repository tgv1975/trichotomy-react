import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import trichotomy from 'trichotomy/dist/trichotomy.min.css';

export default class TrichotomyCenterpiece extends PureComponent {

    static defaultProps = {
        tag: 'div',
    }

    static propTypes = {
        tag: PropTypes.string,
    }

    render() {
        const {
            children,
            className,
            tag,
        } = this.props;

        const Tag = tag;

        const cssClass = (className && className.concat(' ', trichotomy.centerpiece))
            || trichotomy.centerpiece;

        return (
            <Tag className={cssClass}>
                {children}
            </Tag>
        );
    }
}
