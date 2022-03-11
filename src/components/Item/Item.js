import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Item.module.css'

const Item = ({ match }) => {
  const [data, setData] = useState([])
  const APIpath = 'https://battlegrid-rails-api.herokuapp.com/collection' + `${match.params.id}`
  const APIcall = () => {
    fetch(APIpath)
      .then(results => results.json())
      .then(data => {
        setData(data.results)
        console.log(data.results)
      })
      .catch((err) => console.log(err))
  }
  useEffect(APIcall, [])
  return (
    <div className={styles.Item} data-testid='Item'>
      { !data ? `Loading ${match.params.id} tile...` : `${data}` }
    </div>
  )
}

Item.propTypes = {}
Item.defaultProps = {}

export default Item