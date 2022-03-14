import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.module.css'
import { Icon } from '../Logo/Logo.js'
import Navlink from '../Navlink/Navlink.js'
import Metamask from '../Metamask/Metamask.js'

const Navbar = () => (
  <nav className={styles.Navbar} data-testid='Navbar'>
    <Icon Link='/' />
    <Navlink Title='Collection' Link='/collection' />
    <Navlink Title='Create' Link='/collection/new' />
    <Metamask onAddressChanged={address => {}} />
  </nav>
)

Navbar.propTypes = {}
Navbar.defaultProps = {}

export default Navbar