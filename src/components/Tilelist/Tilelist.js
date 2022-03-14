import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation, useParams } from 'react-router-dom'
import API from '../Config/API.js'
import Tile from '../Tile/Tile.js'
import styles from './Tilelist.module.css'

const Tilelist = () => {
  const [TileList, setTileList] = useState([])
  const APIcall = (path) => {
    fetch(API + path)
      .then(results => results.json())
      .then(data => {
        console.log(data)
        setTileList(data)
      })
      .catch((err) => console.log(err))
  }

  const Template = 
    <div>
      {Object.keys(TileList).map(tile => (
        <Tile Title={TileList[tile].name} Link={'collection/' + TileList[tile].id} Image={TileList[tile].image_url} key={tile} />
      ))}
    </div>

  useEffect( () => {
    APIcall('tiles')
    return () => ( setTileList([]) )
  }, [])

  return (
    <div className={styles.Tilelist} data-testid='Tilelist'>
      { Template }
    </div>
  )
}

Tilelist.propTypes = {}
Tilelist.defaultProps = {}

export default Tilelist