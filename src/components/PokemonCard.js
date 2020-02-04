import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    displayBackImage: false
  }

  handleClick = () => {
    this.setState({
      displayBackImage: !this.state.displayBackImage
    })
  }

  render() {
    return (
      <Card>
        <div>
          <div onClick={this.handleClick} className="image">
            <img alt="oh no!" src={this.state.displayBackImage ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
             {this.props.pokemon.stats[4].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
