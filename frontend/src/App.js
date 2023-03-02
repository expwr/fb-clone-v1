// imports
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import { useSelector } from "react-redux";
import Activate from "./pages/home/activate";
import Reset from "./pages/reset";
import CreatePostPopup from "./components/createPostPopup";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { postsReducer } from "./functions/reducers";
import Friends from "./pages/friends";

// app element 
function App() {
  const [visible, setVisible] = useState(false);                            // visiblity
  const { user, darkTheme } = useSelector((state) => ({ ...state }));       // theme
  const [{ loading, error, posts }, dispatch] = useReducer(postsReducer, {  // status and posts, and disbatch function
    loading: false,
    posts: [],
    error: "",
  });
  useEffect(() => {                             // syncronize component getting posts
    getAllPosts();
  }, []);
  const getAllPosts = async () => {             // getting all posts
    try {                                       // atempt
      dispatch({
        type: "POSTS_REQUEST",                  // request posts
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllposts`,   //set backend url
        {
          headers: {
            Authorization: `Bearer ${user.token}`,            //asign user auth
          },
        }
      );
      dispatch({
        type: "POSTS_SUCCESS",        // if got this far then success
        payload: data,                // return data
      });
    } catch (error) {                 // if error
      dispatch({
        type: "POSTS_ERROR",          // if error, then tell dispatch
        payload: error.response.data.message, // return error msg
      });
    }
  };
  // html
  return (
    <div className={darkTheme && "dark"}>
      {visible && (
        <CreatePostPopup
          user={user}
          setVisible={setVisible}
          posts={posts}
          dispatch={dispatch}
        />
      )}
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route
            path="/profile"
            element={
              <Profile setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/profile/:username"
            element={
              <Profile setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/friends"
            element={
              <Friends setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/friends/:type"
            element={
              <Friends setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/"
            element={
              <Home
                setVisible={setVisible}
                posts={posts}
                loading={loading}
                getAllPosts={getAllPosts}
              />
            }
            exact
          />
          <Route path="/activate/:token" element={<Activate />} exact />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/reset" element={<Reset />} />
      </Routes>
    </div>
  );
}

export default App;
