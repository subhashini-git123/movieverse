


const AppReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_MOVIE_TO_FAVORITE':
        return {
          ...state,
          favourite: [...state.favourite, action.payload],
        };
  
      case 'REMOVE_MOVIE_FROM_FAVORITE':
        return {
          ...state,
          favourite: state.favourite.filter(
            (movie) => movie.id !== action.payload.id
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default AppReducer;