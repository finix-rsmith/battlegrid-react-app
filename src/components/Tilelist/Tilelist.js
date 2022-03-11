import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation, useParams } from 'react-router-dom'
import styles from './Tilelist.module.css'

const Tilelist = () => {
  const [TileList, setTileList] = useState([])
  const APIpath = 'https://battlegrid-rails-api.herokuapp.com/tiles'
  const APIcall = () => {
    fetch(APIpath)
      .then(results => results.json())
      .then(data => {
        const {tiles} = data.results
        setTileList(tiles)
      })
      .catch((err) => console.log(err))
  }
  useEffect(APIcall, [])
  return (
    <div className={styles.Tilelist} data-testid='Tilelist'>
      { !TileList ? `Loading tiles...` : `${TileList}` }
    </div>
  )
}

Tilelist.propTypes = {}
Tilelist.defaultProps = {}

export default Tilelist