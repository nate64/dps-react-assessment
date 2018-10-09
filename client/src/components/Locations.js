import React from 'react'
import axios from 'axios'
import { Card, Container } from 'semantic-ui-react'

class Locations extends React.Component {
  state = { getLocations: [] }

  componentDidMount(){
    axios.get('/api/all_locations')
      .then( res => this.setState({ getLocations: res.data.entries })
      )
  }

  displayLocations = () => {
    return this.state.getLocations.map(l => {
      return (
      <Card key={l.id}>
        {l.name}
        {l.locality}
        {l.phone}
      </Card>
        )
      } 
    )
  }

render() {
  return(
    <div>
      <Container>
        <Card.Group itemsPerRow = {3}>
          {this.displayLocations()}
        </Card.Group>
      </Container>
    </div>
  ) 
}



}
export default Locations
