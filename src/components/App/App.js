import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.js'
import Home from '../Home/Home.js'
import Collection from '../Collection/Collection.js'
import Item from '../Item/Item.js'
import Editor from '../Editor/Editor.js'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/collection' element={<Collection/>}></Route>
          <Route path='/collection/new' element={<Editor/>}></Route>
          <Route path='/collection/:id' element={<Item/>}></Route>
          <Route path='/collection/:id/edit' element={<Editor/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App