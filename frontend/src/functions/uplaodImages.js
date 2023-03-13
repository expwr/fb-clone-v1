import axios from "axios";

// posting imgs to backend w/ auth token
export const uplaodImages = async (formData, token) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/uploadImages`, // backend url for imgs
      formData,                                            // data for img
      {
        headers: {
          Auhorization: `Bearer ${token}`,                 // auth w/ auth token
          "content-type": "multipart/form-data",           // set type of data (contents)
        },
      }
    );
    // if get this far return data const
    return data;
  } catch (error) {
    // else return error
    return error.response.data.message;
  }
};
