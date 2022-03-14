import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { Icon } from '../Logo/Logo.js'
import Navlink from '../Navlink/Navlink.js'
import Metamask from '../Metamask/Metamask.js'

const Navbar = () => {
  const [isActive, setActive] = useState(false)

  let mobileMenuToggle = () => {
    setActive(!isActive)
  }

  useEffect( () => {
    return () => (setActive(false))
  }, [])

  return (
    <nav className={styles.Navbar} data-testid='Navbar'>
      <Icon Link='/' />
      <ul className={styles.Desktop}>
        <Navlink Title='Collection' Link='/collection' />
        <Navlink Title='Create' Link='/collection/new' />
        <Metamask onAddressChanged={address => {}} />
      </ul>

      <button onClick={mobileMenuToggle} className={styles.Mobile}>Menu</button>
      <ul className={!isActive ? styles.Hidden : styles.Mobile}>
        <Navlink Title='Collection' Link='/collection' onClick={mobileMenuToggle} />
        <Navlink Title='Create' Link='/collection/new' onClick={mobileMenuToggle} />
        <Metamask onAddressChanged={address => {}} onClick={mobileMenuToggle} />
      </ul>
    </nav>
  )
}

export default Navbar