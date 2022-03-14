import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import API from '../Config/API.js'
import styles from './DeleteButton.module.css'

const DeleteButton = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const APIcall = (path, item) => {

    let requestOptions = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }

    console.log(
      'API call: ',
      API + path + '/' + item,
      'Request options: ',
      requestOptions
    )

    fetch(API + path + '/' + item, requestOptions)
      .then(navigate('/collection'))
      .catch((err) => console.log(err))
  }

  const clickHandler = (event) => {
    event.preventDefault()
    APIcall('tiles', id)
  }

  return (
    <div className={styles.DeleteButton} data-testid='DeleteButton'>
      <button onClick={clickHandler}>Delete</button>
    </div>
  )
}

export default DeleteButton