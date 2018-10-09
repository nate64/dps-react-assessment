import React from 'react'
import axios from 'axios'
import { Card, Container } from 'semantic-ui-react';

class Beers extends React.Component {
  state = { getBeers: [] } 

  componentDidMount(){
    axios.get('/api/all_beers?page=20&per_page=5')
      .then( res => this.setState({ getBeers: res.data.entries }) 
      )
  }

  displayBeers = () => {
    return this.state.getBeers.map( b => {
      return (
        <Card key={b.id}>
        {b.name}
        {b.description}
        {b.abv}
        </Card>
      )
    }
  )
}

  render(){
    return(
      <div>
        <Container >
          <Card.Group itemsPerRow={3}>
              {this.displayBeers()} 
          </Card.Group>
        </Container>
      </div>
    ) 
  }
}
export default Beers
