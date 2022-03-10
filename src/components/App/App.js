import logo from './battlegrid-logo.png'
import './App.css'
import Tile from '../Tile/Tile.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Tile Title="Characters" Link="/characters" />
          <Tile Title="Terrain" Link="/terrains" />
        </div>
      </header>
    </div>
  )
}

export default App