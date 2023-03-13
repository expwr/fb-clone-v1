import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  acceptRequest,
  cancelRequest,
  deleteRequest,
} from "../../functions/user";

// card for list of friend
export default function Card({ userr, type, getData }) {        // params: str, str, function
  const { user } = useSelector((state) => ({ ...state }));      // set user to function of all states vals

  const cancelRequestHandler = async (userId) => {              // async function w/ userid param
    const res = await cancelRequest(userId, user.token);        // set res to the fn cancel req that rms the req
    if (res == "ok") {
      getData();                                                // if not fail, run getData fn
    }
  };

  const confirmHandler = async (userId) => {
    const res = await acceptRequest(userId, user.token);        // set res to accept accept function
    if (res == "ok") {
      getData();                                                // if not fail, run getData fn
    }
  };


  const deleteHandler = async (userId) => {
    const res = await deleteRequest(userId, user.token);        // set res to accept del function
    if (res == "ok") {
      getData();                                                // if not fail, run getData fn
    }
  };
  
  // hmtl
  return (
    <div className="req_card">
      <Link to={`/profile/${userr.username}`}>
        <img src={userr.picture} alt="" />
      </Link>
      <div className="req_name">
        {userr.first_name} {userr.last_name}
      </div>
      {type === "sent" ? (
        <button
          className="blue_btn"
          onClick={() => cancelRequestHandler(userr._id)}
        >
          Cancel Request
        </button>
      ) : type === "request" ? (
        <>
          <button
            className="blue_btn"
            onClick={() => confirmHandler(userr._id)}
          >
            Confirm
          </button>
          <button className="gray_btn" onClick={() => deleteHandler(userr._id)}>
            Delete
          </button>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
