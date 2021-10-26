import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SET_ERROR,
} from "../actions/index";

// export const initialState = {
//   plant_id: 0,
//   plant_name: "",
//   plant_species: "",
//   h2oFrequency: 0,
//   image: "",
// };

export const initialState = {
  plants: [],
  isLoading: false,
  error: null,
};

const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        plants: action.payload,
        isLoading: false,
      };
    case FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default plantsReducer;
