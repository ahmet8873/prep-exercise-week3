import React from "react";
import Avatar from "./Avatar";
import useScreenSize from "./useScreenSize";

function AvatarContainer() {
  const screenSize = useScreenSize(700, 1000);

  return (
    <div className="avatar-container">
      {screenSize === "big" && <Avatar name="Mithi" />}
      {screenSize === "medium" && <Avatar name="Diana" />}
      {screenSize === "small" && <Avatar name="Mikong" />}
    </div>
  );
}

export default AvatarContainer;
