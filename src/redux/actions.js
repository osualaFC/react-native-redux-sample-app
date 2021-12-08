import axios from 'axios'

//action types
export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

//url
const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = '9d6c64427ab395f6f6eb05b250e4850f';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

export const getMovies = () => {
    try {
      return async dispatch => {
        const res = await axios.get(`${BASE_URL}`);
        if (res.data) {
          dispatch({
            type: GET_MOVIES,
            payload: res.data,
          });
        } else {
          console.log('Unable to fetch');
        }
      };
    } catch (error) {
     console.log(error)
    }
  };

  export const addFavourite = movie => dispatch => {
      dispatch({
          type: ADD_FAVORITE_ITEM,
          payload: movie
      })
  }

  export const removeFavourite = movie => dispatch => {
      dispatch({
          type: REMOVE_FAVORITE_ITEM,
          payload: movie
      })
  }