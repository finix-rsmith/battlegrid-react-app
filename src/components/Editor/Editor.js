import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Editor.module.css'

const Editor = () => {
  const [postId, setPostId] = useState(null)
  const APIpath = 'https://battlegrid-rails-api.herokuapp.com/tiles'
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify('Testing')
  }
  const APIedit = () => {
    fetch(APIpath, requestOptions)
      .then(response => response.json())
      .then(data => setPostId(data.id))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const dataObject = Object.fromEntries(data.entries())
  }

  useEffect(APIedit, [])

  return (
    <div className={styles.Editor} data-testid='Editor'>
      <form onSubmit={submitHandler}>
        <p>Editor</p>
        <input type='text' name='name' placeholder='Name' required />
        <input type='text' name='types' placeholder='Types' required />
        <input type='text' name='faction' placeholder='Faction' required />
        <input type='text' name='rarity' placeholder='Rarity' required />
        <input type='text' name='resource_types' placeholder='Resource Types' required />
        <input type='number' name='resource_quantity' placeholder='Resource Quantity' required />
        <input type='number' name='health' placeholder='Health' />
        <input type='number' name='attack' placeholder='Attack' />
        <input type='number' name='range' placeholder='Range' />
        <input type='number' name='initiative' placeholder='Initiative' />
        <input type='text' name='specials' placeholder='Specials' />
        <input type='text' name='image_url' placeholder='Image URL' required />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}

Editor.propTypes = {}
Editor.defaultProps = {}

export default Editor