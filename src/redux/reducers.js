import { GET_MOVIES, ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM } from "./actions";

const initiaState = {
    movies : [],
    favourites: []
}

export const moviesReducer = (state = initiaState, action) => {

    switch (action.type) {
        case GET_MOVIES:
      return {...state, movies: action.payload};
        case ADD_FAVORITE_ITEM:
        return {...state, favourites: [...state.favourites, action.payload]}
        case REMOVE_FAVORITE_ITEM:
            return {
                ...state,
                favourites: state.favourites.filter(
                  movie => movie.id !== action.payload.id,
                ),
              };
    default: 
      return state;
    }
}

export default moviesReducer;