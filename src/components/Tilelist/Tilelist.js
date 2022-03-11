import React from 'react'
import PropTypes from 'prop-types'
import styles from './Tilelist.module.css'

const Tilelist = (props) => {
  const [TileList, setTileList] = React.useState(null)
  const APIpath = 'https://battlegrid-rails-api.herokuapp.com/' + `${props.Path}`
  const APIcall = () => {
    fetch(APIpath)
      .then(results => results.json())
      .then(data => {
        const {tiles} = data.results
        setTileList(tiles)
      })
  }
  React.useEffect(APIcall, [])
  return (
    <div className={styles.Tilelist} data-testid='Tilelist'>
      { !TileList ? `Loading ${props.Path} tiles...` : `${TileList}` }
    </div>
  )
}

Tilelist.propTypes = {}
Tilelist.defaultProps = {}

export default Tilelist