import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    searchTerm: null
  }

  updateSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.updateSearchTerm} />
        <br />
        <PokemonCollection searchTerm={this.state.searchTerm} />
      </Container>
    )
  }
}

export default PokemonPage
