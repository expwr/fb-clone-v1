import { useState } from "react";
import { reactPost } from "../../functions/post";
import { useSelector } from "react-redux";

const reactsArray = [
  {
    name: "like",
    image: "../../assets/reacts/like.gif",
  },
  {
    name: "love",
    image: "../../assets/reacts/love.gif",
  },
  {
    name: "haha",
    image: "../../assets/reacts/haha.gif",
  },
  {
    name: "wow",
    image: "../../assets/reacts/wow.gif",
  },
  {
    name: "sad",
    image: "../../assets/reacts/sad.gif",
  },
  {
    name: "angry",
    image: "../../assets/reacts/angry.gif",
  },
];

export default function ReactsPopup({ visible, setVisible, reactHandler }) {
  return (
    <>
      {visible && (
        <div
          className="reacts_popup"
          onMouseOver={() => {
            setTimeout(() => {
              setVisible(true);
            }, 500);
          }}
          onMouseLeave={() => {
            setTimeout(() => {
              setVisible(false);
            }, 500);
          }}
        >
          {reactsArray.map((react, i) => (
            <div
              className="react"
              key={i}
              onClick={() => reactHandler(react.name)}
            >
              <img src={require(react.image)} alt="" />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
