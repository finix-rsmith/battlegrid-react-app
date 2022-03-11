import './App.css'
import { Logo } from '../Logo/Logo.js'
import Tile from '../Tile/Tile.js'
import Tilelist from '../Tilelist/Tilelist.js'
import Navbar from '../Navbar/Navbar.js'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <header className='App-header'>
        <Logo Link='/' />
        <div>Collectible Strategy Game</div>
        <div>
          <Tile Title='Characters' Link='/characters' />
          <Tile Title='Terrain' Link='/terrains' />
          <Tilelist Path='characters' />
        </div>
      </header>
    </div>
  )
}

export default App