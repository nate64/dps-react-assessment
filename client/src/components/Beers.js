import React from 'react'
import { connect } from 'react-redux'
import { getBeers } from '../reducers/beers'
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Flash from './Flash';
import Home from './Home';
import { Segment } from 'semantic-ui-react';

class Beers extends React {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(getDestinations())
  }



    dispatch(getBeers(){
  }


  

  display50Beers(){

  }




  render() {
    return null

  }
}


export default Beers;



///api/all_beers - Returns the first 50 Beers from the BreweryDB API