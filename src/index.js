import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

import 'trichotomy/dist/trichotomy.min.css';

export default class Trichotomy extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className={styles.trichotomy}>
        Trichotomy: {text}
      </div>
    )
  }
}
