import React from 'react'
import axios from 'axios'
//import { connect } from 'react-redux'
//import { getBeers } from '../reducers/beers'
import { Card, Container } from 'semantic-ui-react';

class Beers extends React.Component {
  state = { getBeers: [] } 

  componentDidMount(){
    axios.get('/api/all_beers')
      .then( res => this.setState({ getBeers: res.data.entries }) )
    //const { dispatch } = this.props
    //dispatch(getBeers())
  }

  displayBeers = () => {
    //const { getBeers: { name }} = this.state
    return this.state.getBeers.map( b => {
      return (
        <Card key={b.id}>
        {b.name}
        {b.description}
        
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

  // const mapStateToProps = (state) => {
  //   return { beers: state.beers }
  // }



}
//export default connect(mapStateToProps)(Beers);
export default Beers