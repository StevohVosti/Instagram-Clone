import { Avatar } from "@mui/material";
import React from "react";
import "./Feed.css";

function Feed() {
  return (
    <div className='post'>
      <div className='post-header'>
        <Avatar src="" alt=""/>

        <div className='post-info'>
        <h2>Steve Harvey</h2>
        <p>Helloo</p>
        <span></span>
        </div>
      </div>


      <div className='post-body'>
        <p>post</p>
      </div>

      {/* <div className='post-buttons'>
        <InputOptions Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOptions Icon={InsertCommentIcon} title="Comment" color="gray" />
        <InputOptions Icon={RepeatIcon} title="Repost" color="gray" />
        <InputOptions Icon={SendIcon} title="Send" color="gray" />
      </div> */}
    </div>
  );
}

export default Feed;
