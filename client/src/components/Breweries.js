import React from 'react'
import axios from 'axios'
import { Card, Container } from 'semantic-ui-react'

class Breweries extends React.Component {
  state = { getBreweries: [] }

componentDidMount(){
  axios.get('/api/all_breweries')
    .then( res => this.setState({ getBreweries: res.data.entries })
      )
    }

getBreweries = () => {
  return this.state.getBreweries.map( b => {
    return ( 
      <Card key={b.id} >
        {b.name}
        {b.website}
      </Card>
      )
  }) 
}

render(){
  return(
    <div>
      <Container>
        <Card.Group itemsPerRow={3}>
          {this.getBreweries()}
        </Card.Group>
      </Container>
    </div>
  )
}



}
export default Breweries
