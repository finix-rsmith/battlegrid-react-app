import React from 'react'
import { useParams } from 'react-router-dom'
import API from '../Config/API.js'
import styles from './Editor.module.css'

const Editor = () => {
  const { id } = useParams()
  let requestOptions = {}

  const APIcall = (path, item = '', data = {}) => {
    let action = ''
    item === '' ? action = 'POST' : action = 'PATCH'

    requestOptions = {
      method: action,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    }

    console.log(
      'API call: ',
      API + path + '/' + item,
      'Request options: ',
      requestOptions
    )

    fetch(API + path + '/' + item, requestOptions)
      .then(results => results.json())
      .then(data => {
        console.log(data)
      })
      .catch((err) => console.log(err))
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const dataObject = Object.fromEntries(data.entries())
    APIcall('tiles', id, dataObject)
  }

  return (
    <div className={styles.Editor} data-testid='Editor'>
      <form onSubmit={submitHandler}>
        <p>Editor</p>
        <input type='text' name='name' placeholder='Name'/>
        <input type='text' name='types' placeholder='Types'/>
        <input type='text' name='faction' placeholder='Faction'/>
        <input type='text' name='rarity' placeholder='Rarity'/>
        <input type='text' name='resource_types' placeholder='Resources'/>
        <input type='number' name='resource_quantity' placeholder='Cost'/>
        <input type='number' name='health' placeholder='Health' />
        <input type='number' name='attack' placeholder='Attack' />
        <input type='number' name='range' placeholder='Range' />
        <input type='number' name='initiative' placeholder='Initiative' />
        <input type='text' name='specials' placeholder='Specials' />
        <input type='text' name='image_url' placeholder='Image URL'/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Editor