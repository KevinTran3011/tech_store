/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

const TechItem = ({ name, avatar }) => {
  return (
    <div className="item_container">
      <div className="item_container--title">{name}</div>
      <div className="item_container--avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default TechItem;
