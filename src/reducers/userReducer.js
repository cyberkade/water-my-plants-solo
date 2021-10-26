import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  SET_ERROR,
} from "../actions/index";

// export const initialState = {
//   username: "",
//   password: "",
//   phoneNumber: "",
// };

export const initialState = {
  loggedIn: false,
  isLoading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loggedIn: true,
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

export default userReducer;
