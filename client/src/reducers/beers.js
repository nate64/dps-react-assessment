// import axios from 'axios'

// const BEERS = 'BEERS'
// const SHOW_BEERS = 'SHOW_BEERS'

// export const getBeers = () =>{
//   return (dispatch) => {
//     axios.get('/api/all_beers')
//       .then( res => {
//         dispatch({ type: BEERS, beers: res.data }) 
//       }
//     )
//   }
// }

// export const showBeers = (id) =>{
//   return (dispatch) => {
//     axios.get(`/api/all_beers/${id}`)
//       .then( res => {
//         dispatch({ type: SHOW_BEERS, beer: res.data }) 
//       }
//     )
//   }
// }

// export default (state = [], action ) => {
//   switch(action.type) {
//     case BEERS:
//       return action.beers
//     case SHOW_BEERS:
//       return action.beer
//     default:
//       return state;
//   } 
// }