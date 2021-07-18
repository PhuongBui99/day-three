import React from "react";
import A from "./A";
import B from "./B";
import "../App.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
function C(props) {
  const state = useSelector((state) => state);
  const listMess = state.message;
  console.log(listMess);
  const [show, setReaction] = useState(false);
  const [numberRow, setNumberRow] = useState(null);
  function reaction(index) {
    setReaction(!show);
    setNumberRow(index);
  }

  return (
    <div>
      <h1>Chat frame</h1>
      <div className="frame">
        <ul>
          {listMess && listMess.map((ele, index) => (
              <li key={index} id={index}>
                <p id="user">{ele.user}</p>
                <span id="textMessage" onClick={() => {reaction(index);}}>{ele.text}</span>
                {show && numberRow === index ? (<span id="status"><ThumbUpAltIcon color="secondary"/></span>) : null}
              </li>
            ))}
        </ul>
      </div>
      <A />
      <B />
    </div>
  );
}

export default C;
