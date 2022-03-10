import React from 'react'
import PropTypes from 'prop-types'
import styles from './Logo.module.css'
import logo from './battlegrid-logo.png'

const Logo = (props) => (
  <div className={styles.Logo}>
    <a href={props.Link} data-testid="Logo">
      <img src={logo} alt="logo" />
    </a>
  </div>
);

Logo.propTypes = {}
Logo.defaultProps = {}

export default Logo
