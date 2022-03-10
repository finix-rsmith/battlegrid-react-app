import './App.css'
import Logo from '../Logo/Logo.js'
import Tile from '../Tile/Tile.js'
import Navbar from '../Navbar/Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Logo Link="/" />
        <div>
          <Tile Title="Characters" Link="/characters" />
          <Tile Title="Terrain" Link="/terrains" />
        </div>
      </header>
    </div>
  )
}

export default App