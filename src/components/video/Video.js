import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
function Video() {
  return (
    <div className="video">
      <div className="video__top">
        <img alt="#" src="https://i.ytimg.com/vi/MAaKNZ6DYuI/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCY3S3asMmq-iDziLHdJx-BNov9CA" />
        <span>07:13</span>
      </div>
      <div className="video__title">black squad double kill</div>
      <div className="video__details">
        <span>
          <AiFillEye /> 245.723 views
        </span>
        <span> • 1 month ago</span>
      </div>
      <div className="video__channel">
        <img alt="#" src="https://yt3.ggpht.com/ytc/AKedOLQ09BVL3UopArYBUOJmFnf3exVucUz1QAlutP8-=s68-c-k-c0x00ffffff-no-rj" />
        <p>kyleinthegame</p>
      </div>
    </div>
  );
}

export default Video;
