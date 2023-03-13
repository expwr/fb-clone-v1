
/*
  Reducing the size of the content sent to 
  the backend and returning the status.

  all functions settup the same way w/
  switches of requests, sucess, and error
*/

// reducing post size
export function postsReducer(state, action) {
  // returns baised on status / type of post
  switch (action.type) {
    case "POSTS_REQUEST":
      // everything under the state var, loading status, and error msg
      return { ...state, loading: true, error: "" };
    case "POSTS_SUCCESS":
      return {
        ...state,               // every var / val under the state var
        loading: false,         // set loading status
        posts: action.payload,  // set posts to payload (content)
        error: "",              // give null error msg
      };
    case "POSTS_ERROR":
      // same as POST_REQUEST case execpt setting error 2 the contents of action
      return { ...state, loading: false, error: action.payload };
    // if no cases apply
    default:
      return state;
  }
}
// reducing profile update size
export function profileReducer(state, action) {
  switch (action.type) {
    case "PROFILE_REQUEST":
      return { ...state, loading: true, error: "" };
    case "PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        profile: action.payload,
        error: "",
      };
    case "PROFILE_POSTS":
      return {
        loading: false,
        profile: { ...state.profile, posts: action.payload },
        error: "",
      };
    case "PROFILE_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
// reducing photos size
export function photosReducer(state, action) {
  switch (action.type) {
    case "PHOTOS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "PHOTOS_SUCCESS":
      return {
        ...state,
        loading: false,
        photos: action.payload,
        error: "",
      };
    case "PHOTOS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
// reducing friend post size
export function friendspage(state, action) {
  switch (action.type) {
    case "FRIENDS_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FRIENDS_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: "",
      };
    case "FRIENDS_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
