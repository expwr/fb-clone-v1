import Cookies from "js-cookie";

export function themeReducer( // for setting theme
  state = Cookies.get("darkTheme") ? JSON.parse(Cookies.get("darkTheme")) : false, // if darkthem in cookies (true) state = darktheme else false

  action // used below
) {
  switch (action.type) {  // set comparisons to the type of action
    case "DARK":
      return true;        // if dark set true
    case "LIGHT":
      return false;       // if light set false
    default:
      return state;       // else (shouldnt happen) return state
  }
}
