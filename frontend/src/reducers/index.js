import { combineReducers } from "redux";
import { themeReducer } from "./themeReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({   // use the reducer from the files below and combine them (put togher)
  user: userReducer,                    // set user to the userReducer fn output
  darkTheme: themeReducer,              // set theme to themeReducers output
});

export default rootReducer;             // returning the reducers
