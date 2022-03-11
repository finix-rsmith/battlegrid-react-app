import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar.js'
import Home from '../Home/Home.js'
import Collection from '../Collection/Collection.js'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/collection' element={<Collection/>}></Route>
          <Route path='/collection/:filter'></Route>
          <Route path='/collection/:item'></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App