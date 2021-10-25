import { combineReducers } from "redux";
import plantsReducer from "./plantsReducer";
import userReducer from "./userReducer";

export default combineReducers({
  plant: plantsReducer,
  user: userReducer,
});
