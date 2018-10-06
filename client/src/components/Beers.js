import React from 'react'
import { connect } from 'react-redux'
import { getBeers } from '../reducers/beers'
import { Segment, Card, Container } from 'semantic-ui-react';

class Beers extends React {
  state = { getBeers: '' } 

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getBeers())
  }

  displayBeers = () => {
    return this.props.beers.map( b => 
      <Card key={b.id} href={`/beers/${b.id}`}>
      </Card>
    )
  }

  render(){
    return(
      <Container >
        <Card.Group centered itemsPerRow={3}>
            {this.displayBeers()}
        </Card.Group>
      </Container>
    ) 
  }

  const mapStateToProps = (state) => {
    return { beers: state.beers }
  }



}
export default connect(mapStateToProps)(Beers);
