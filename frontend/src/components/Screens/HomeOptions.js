import React from "react";
import { Avatar } from "@mui/material";
import "./HomeOptions.css";

function HomeOptions({ Icon, title, avatar }) {
  return (
    <div className="homeOptions">
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
          <div></div>
      )}
    </div>
  );
}

export default HomeOptions;
