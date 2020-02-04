import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  state = {
    pokemon: []
  }

  componentDidMount() {
    return fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemon => this.setState({pokemon}))
  }

  renderPokemon = () => {
    if(this.props.searchTerm) {
      return this.state.pokemon.filter(pokemon => pokemon.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
      .map(pokemon => <PokemonCard pokemon={pokemon} />)
    } else {
      return this.state.pokemon.map(pokemon => <PokemonCard pokemon={pokemon} />)
    }
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From Pokemon Collection</h1>
        {this.renderPokemon()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
