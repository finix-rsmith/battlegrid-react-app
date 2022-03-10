import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.css'
import Navlink from '../Navlink/Navlink.js'

const Navbar = () => (
  <nav className={styles.Navbar} data-testid="Navbar">
    <Navlink Title="Characters" Link="/characters" />
    <Navlink Title="Terrain" Link="/terrains" />
  </nav>
)

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar
