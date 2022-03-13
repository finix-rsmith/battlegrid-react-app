import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Route, Link, Redirect, useParams } from 'react-router-dom'
import styles from './Item.module.css'

const Item = () => {
  const [ItemData, setItemData] = useState([])
  const { id } = useParams()
  const APIpath = 'https://battlegrid-rails-api.herokuapp.com/tiles/'
  const APIcall = (item) => {
    fetch(APIpath + item)
      .then(results => results.json())
      .then(data => {
        console.log(data)
        setItemData(data)
      })
      .catch((err) => console.log(err))
  }
  useEffect( () => {
    APIcall(id)
    return () => ( setItemData([]) )
  }, [])

  return (
    <div className={styles.Item} data-testid='Item'>
      <h1>{ItemData.name}</h1>
      <img src={ItemData.image_url} />
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
    </div>
  )
}

Item.propTypes = {}
Item.defaultProps = {}

export default Item