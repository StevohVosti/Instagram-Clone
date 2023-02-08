import React from "react";
import "./Home.css";
import HomeOptions from "./HomeOptions";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import MessageIcon from "@mui/icons-material/Message";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar } from "@mui/material";
import Feed from "./Feed";
import { Link } from "react-router-dom";
import Widgets from "./Widgets";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
      <Link to="/">
        <img src='https://play-lh.googleusercontent.com/9ASiwrVdio0I2i2Sd1UzRczyL81piJoKfKKBoC8PUm2q6565NMQwUJCuNGwH-enhm00' alt='logo' />
      </Link>
        <Link to="/">
          <HomeOptions Icon={HomeIcon} title="Home" />
        </Link>
        <HomeOptions Icon={SearchIcon} title="Search" />
        <HomeOptions Icon={ExploreIcon} title="Explore" />
        <HomeOptions Icon={MusicVideoIcon} title="Reels" />
        <HomeOptions Icon={MessageIcon} title="Message" />
        <HomeOptions Icon={FavoriteBorderIcon} title="Notifications" />
        <HomeOptions Icon={AddCircleOutlineIcon} title="Create" />
        <Link to="/profile">
          {" "}
          <HomeOptions Icon={Avatar} title="Profile" />
        </Link>
      </div>

      <div className="feed">
        <Feed />
      </div>

      <div className="widgets">
        <Widgets />
      </div>
    </div>
  );
};

export default Home;
