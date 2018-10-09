import React from 'react'
import axios from 'axios'
import { Card, Container } from 'semantic-ui-react'

class Breweries extends React.Component {
  state = { getBreweries: [] }

  componentDidMount(){
    axios.get('/api/all_breweries?page=20&per_page=5')
      .then( res => this.setState({ getBreweries: res.data.entries })
        )
      }

  displayBreweries = () => {
    return this.state.getBreweries.map( b => {
      return ( 
        <Card key={b.id} >
          {b.name}
          {b.website}
          {b.established}
        </Card>
        )
      }
    ) 
  }

  render(){
    return(
      <div>
        <Container>
          <Card.Group itemsPerRow={3}>
            {this.displayBreweries()}
          </Card.Group>
        </Container>
      </div>
      ) 
    }
  }
export default Breweries
