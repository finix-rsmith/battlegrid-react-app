import React from 'react'
import PropTypes from 'prop-types'
import styles from './Logo.module.css'
import logo from './battlegrid-logo.png'
import icon from './battlegrid-icon.png'

const Logo = (props) => (
  <div className={styles.Logo}>
    <a href={props.Link} data-testid="Logo">
      <img src={logo} alt="Battlegrid logo" />
    </a>
  </div>
)

const Icon = (props) => (
  <div className={styles.Icon}>
    <a href={props.Link} data-testid="Logo">
      <img src={icon} alt="Battlegrid icon" />
    </a>
  </div>
)

Logo.propTypes = {}
Logo.defaultProps = {}

export { Logo, Icon }