import React from 'react'
import PropTypes from 'prop-types'
import Tile from '../Tile/Tile.js'
import Tilelist from '../Tilelist/Tilelist.js'
import Editor from '../Editor/Editor.js'
import styles from './Collection.module.css'

const Collection = () => (
  <div className={styles.Collection} data-testid="Collection">
    <Tile Title='Characters' Link='/characters' />
    <Tile Title='Terrain' Link='/terrains' />
    <Editor />
    <Tilelist Path='characters' />
    <Tilelist Path='terrain' />
  </div>
)

Collection.propTypes = {}
Collection.defaultProps = {}

export default Collection