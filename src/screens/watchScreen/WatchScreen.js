import React from "react";
import { Col, Row } from "react-bootstrap";
import "./_watchScreen.scss";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
const WatchScreen = () => {
  const {id}=useParams

  ///// weird way to get video id cuz useParams doesn't work :/ //////////
  //console.log(window.location.pathname);
  let fullPath = window.location.pathname;
  let vId=fullPath.split("/watch/")[1];
  //console.log(vId);
  
  //////////////////////////////////////
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${vId}`}
            frameBorder="0"
            title="deneme video başlık"
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        <VideoMetaData />
        <Comments />
      </Col>
      <Col lg={4}>
        {[...Array(10)].map(() => (
          <VideoHorizontal />
        ))}
      </Col>
    </Row>
  );
};

export default WatchScreen;
