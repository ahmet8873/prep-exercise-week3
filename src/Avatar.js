import React from "react";
import { BigHead } from "@bigheads/core";

function Avatar({ name }) {
  return (
    <div className="avatar">
      <BigHead {...avatarProps[name]} />
      <h2>{name}</h2>
    </div>
  );
}

const avatarProps = {
  Mithi: { name: "Mithi" },
  Diana: { name: "Diana" },
  Mikong: { name: "Mikong" },
};

export default Avatar;
