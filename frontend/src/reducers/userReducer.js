import Cookies from "js-cookie";

export function userReducer(
  state = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null,   // if user in coolies == true set to cookies user else set to null (nothing)
  action                                                                  // defined below
) {
  switch (action.type) {                              // compare 2 actions type
    case "LOGIN":
      return action.payload;                          // if logged in return the payload
    case "LOGOUT":
      return null;                                    // if logged out return nothing
    case "UPDATEPICTURE":
      return { ...state, picture: action.payload };   // if updating pic return all the states args, and the pic
    case "VERIFY":
      return { ...state, verified: action.payload };  // if verifing return states args, and the verify content from action

    default:
      return state;                                   // else just return state
  }
}
