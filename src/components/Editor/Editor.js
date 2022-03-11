import React from 'react'
import PropTypes from 'prop-types'
import styles from './Editor.module.css'

const Editor = (props) => {

  const APIpath = 'https://battlegrid-rails-api.herokuapp.com/' + `${props.Path}`
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(props)
  }
  const APIedit = () => {
    fetch(APIpath, requestOptions)
      .then(response => response.json())
//      .then(data => setPostId(data.id))
  }

  React.useEffect(APIedit, [])

  return (
    <form className={styles.Editor} data-testid='Editor'>
      <p>Editor</p>
      <input type='text' />
      <input type='text' />
      <input type='text' />
      <input type='text' />
    </form>
  )
}

Editor.propTypes = {}
Editor.defaultProps = {}

export default Editor