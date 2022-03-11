import React from 'react'
import PropTypes from 'prop-types'
import { Logo } from '../Logo/Logo.js'
import styles from './Home.module.css'

const Home = () => (
  <div className={styles.Home} data-testid="Home">
    <Logo Link='/' />
    <div className='Home-subheader'>Collectible Strategy Game</div>
  </div>
)

Home.propTypes = {}
Home.defaultProps = {}

export default Home