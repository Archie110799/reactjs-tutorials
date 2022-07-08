import React from "react";
import * as Icons from "react-icons/fa";

function Block3({
  text = "Facebook",
  color = "blue",
  total = 0,
  iconName = "FaFacebookF",
  unitName = "Likes",
}) {
  const IconComponent = Icons[iconName];
  return (
    <div>
      {!IconComponent ? <Icons.FaBeer /> :  <IconComponent />}
    </div>
  );
}

export default Block3;
