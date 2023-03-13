import axios from "axios";

/*
  user actions related to...
  following,
  profile,
  Friends,
  Searches
*/

// changing profile pic w/ url as data and token for auth
export const updateprofilePicture = async (url, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/updateProfilePicture`, // backend url
      {
        url,                                                       // profile url
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,                        // auth token
        },
      }
    );
    // return msg if no error
    return "ok";
  } catch (error) {
    // returning the error msg
    return error.response.data.message;
  }
};
// same format as profile picture updating exept backend url
export const updateCover = async (url, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/updateCover`,
      {
        url,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
// same format as profile picture updating exept backend url variying by id and no url
export const addFriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/addFriend/${id}`,   // backend url w/ the param id in url
      {},                                                       // no content

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
// same format as addFriend w/ a slightly diffrent backend url
export const cancelRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/cancelRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
// same format as addFriend and cancelRequest w/ a slightly diffrent backend url
export const follow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/follow/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
  }
};
// same format as addFriend, cancelRequest and follow w/ a slightly diffrent backend url
export const unfollow = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/unfollow/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
// same format as addFriend, cancelRequest, follow, and unfollow w/ a slightly diffrent backend url
export const acceptRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/acceptRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
// same format as others w/ a slightly diffrent backend url
export const unfriend = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/unfriend/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
// same format as others w/ a slightly diffrent backend url
export const deleteRequest = async (id, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/deleteRequest/${id}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return "ok";
  } catch (error) {
    return error.response.data.message;
  }
};
// same format as others w/ a slightly diffrent backend url 
// and the param searchTerm in the place of id
export const search = async (searchTerm, token) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/search/${searchTerm}`,
      {},

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
// same format as others w/ a static backend url and
// contents of the user (searchUser)
export const addToSearchHistory = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/addToSearchHistory`, // static url
      { searchUser },                                            // contents

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
// same stucture as others execpt lack of contents, static backend url, and
// only param being the auth token
export const getSearchHistory = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getSearchHistory`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
// sane as addToSearchHistory except the name
export const removeFromSearch = async (searchUser, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/removeFromSearch`,
      { searchUser },

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
// same as getSearchHistory except backend url and returns status
export const getFriendsPageInfos = async (token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getFriendsPageInfos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { status: "ok", data };
  } catch (error) {
    return error.response.data.message;
  }
};
