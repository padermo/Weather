import axios from "axios";

export const GET_CITY = 'GET_CITY';
export const REMOVE_CITY = 'REMOVE_CITY';

const key = process.env.REACT_APP_API_KEY;


export const getCity = (name) => {
  return async (dispatch) => {
    const dataApi = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`)
    dispatch({type: GET_CITY, payload: dataApi.data})
  }
}

export const removeCity = (id) => {
  return async (dispatch) => {
    dispatch({type: REMOVE_CITY, payload: id})
  }
}
