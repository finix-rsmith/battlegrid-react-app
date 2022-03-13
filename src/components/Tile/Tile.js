import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tile.module.css'

const Tile = (props) => (
  <a href={props.Link}>
    <div className={styles.Tile} data-testid='Tile'>
      <h3 className={styles.Tiletext}>{props.Title}</h3>
      <img src={props.Image} min-width='200' height='235' />
    </div>
  </a>
)

Tile.propTypes = {}
Tile.defaultProps = {}

export default Tile