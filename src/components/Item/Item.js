import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Route, Link, Redirect, useParams } from 'react-router-dom'
import API from '../Config/API.js'
import Tile from '../Tile/Tile.js'
import styles from './Item.module.css'

const Item = () => {
  const [ItemData, setItemData] = useState([])
  const { id } = useParams()

  const APIcall = (path, item) => {
    fetch(API + path + '/' + item)
      .then(results => results.json())
      .then(data => {
        console.log(data)
        setItemData(data)
      })
      .catch((err) => console.log(err))
  }

  useEffect( () => {
    APIcall('tiles', id)
    return () => ( setItemData([]) )
  }, [])

  return (
    <div className={styles.Item} data-testid='Item'>
      <Tile Title={ItemData.name} Image={ItemData.image_url} />
      <div className={styles.InfoPanel}>
        <ul>
          <li>Types: {ItemData.types}</li>
          <li>Faction: {ItemData.faction}</li>
          <li>Rarity: {ItemData.rarity}</li>
          <li>Resources: {ItemData.resource_types}</li>
          <li>Cost: {ItemData.resource_quantity}</li>
          <li>Health: {ItemData.health}</li>
          <li>Attack: {ItemData.attack}</li>
          <li>Speed: {ItemData.speed}</li>
          <li>Initiative: {ItemData.initiative}</li>
          <li>Specials: {ItemData.specials}</li>
        </ul>
        <a href={`/collection/${ItemData.id}/edit`}>Edit</a>
      </div>
    </div>
  )
}

Item.propTypes = {}
Item.defaultProps = {}

export default Item