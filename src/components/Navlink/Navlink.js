import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navlink.module.css'

const Navlink = (props) => (
  <li className={styles.Navlink} data-testid="Navlink">
    <a href={props.Link}>{props.Title}</a>
  </li>
)

Navlink.propTypes = {}
Navlink.defaultProps = {}

export default Navlink