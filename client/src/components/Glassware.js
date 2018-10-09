import React from 'react'
import axios from 'axios'
import { Card, Container } from 'semantic-ui-react'

class Glassware extends React.Component {
  state = { getGlassware: [] }

  componentDidMount(){
    axios.get('./api/all_glassware')
      .then( res => this.setState({ getGlassware: res.data.entries })
      )
  }

  displayGlassware = () => { 
    return this.state.getGlassware.map( g => {
      return (
        <Card key={g.id}>
        {g.name}
        </Card>
      )
     }
    )    
  }


  render() {
    return(
      <div>
        <Container>
          <Card.Group itemsPerRow = {6}>
            {this.displayGlassware()}
          </Card.Group>
        </Container>
      </div>
    )
  }
}
export default Glassware
