import axios from "axios";

/*
communicating (post, read, wrtie, ect) w/ backend for posts
*/

// normal post
// more or less same structure for every function
export const createPost = async (
  // params
  type,
  background,
  text,
  images,
  user,
  token
) => {
  try {
    // return message
    const { data } = await axios.post(
      // backend routing
      `${process.env.REACT_APP_BACKEND_URL}/createPost`,
      // contents of post
      {
        type,
        background,
        text,
        images,
        user,
      },
      // auth for post
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // if get this far return msg
    return { status: "ok", data };
  } catch (error) {
    // else return error
    return error.response.data.message;
  }
};
// post w/o returning data but still sending w/ axios put
export const reactPost = async (postId, react, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/reactPost`,
      {
        postId,
        react,
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
// return post data w/ postid and auth token
export const getReacts = async (postId, token) => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/getReacts/${postId}`,

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
// send comment onto a msg w/ comment content and posts id
export const comment = async (postId, comment, image, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/comment`,
      {
        postId,
        comment,
        image,
      },

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
// commiting post to db
export const savePost = async (postId, token) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/savePost/${postId}`,
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
// rm post w/ postid and auth token
export const deletePost = async (postId, token) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/deletePost/${postId}`,

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
