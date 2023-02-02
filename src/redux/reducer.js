import {GET_CITY, REMOVE_CITY} from './actions'

const initialState = {
  cities: [],
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case GET_CITY:
      return{
        ...state,
        cities: [...state.cities, action.payload]
      }
    case REMOVE_CITY:
      return{
        ...state,
        cities: state.cities.filter(e => e.id !== action.payload)
      }
    default:
      return state;
  }
}