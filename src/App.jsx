import './App.css'
import Card from './Card'

function App() {

  const pokemons = [{
    id: 1,
    nome: 'Bulbasaur',
    tipo: 'Grama / Veneno'
  }, {
    id: 2,
    nome: 'Ivysaur',
    tipo: 'Grama / Veneno'
  }, {
    id: 3,
    nome: 'Venusaur',
    tipo: 'Grama / Veneno'
  }, {
    id: 4,
    nome: 'Charmander',
    tipo: 'Fogo'
  }, {
    id: 5,
    nome: 'Charmeleon',
    tipo: 'Fogo'
  }, {
    id: 6,
    nome: 'Charizard',
    tipo: 'Fogo / Voador'
  }, {
    id: 7,
    nome: 'Squirtle',
    tipo: 'Água'
  }, {
    id: 8,
    nome: 'Wartortle',
    tipo: 'Água'
  }, {
    id: 9,
    nome: 'Blastoise',
    tipo: 'Água'
  }]

  return (
    <>
      {
        pokemons.map(pokemon => <Card info={pokemon} />)
      }
    </>
  )
}

export default App
