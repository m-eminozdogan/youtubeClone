import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./_watchScreen.scss";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideoById } from "../../redux/actions/videos";
const WatchScreen = () => {
  //const { id } = useParams();
  //console.log(id);
  ///// weird way to get video id cuz useParams doesn't work :/ //////////
  //console.log(window.location.pathname);
  let fullPath = window.location.pathname;
  let vId = fullPath.split("/watch/")[1];
  //console.log(vId);
  //////////////////////////////////////

  const dispatch = useDispatch();
  useEffect(() => {
    if (vId) {
      dispatch(getVideoById(vId));
    } 
  }, [dispatch, vId]);

  const { video, loading } = useSelector((state) => state.selectedVideo);
  return (
    <Row>
      <Col lg={8}>
        <div className="watchScreen__player">
          <iframe
            src={`https://www.youtube.com/embed/${vId}`}
            frameBorder="0"
            title={video?.snippet?.title}
            allowFullScreen
            width="100%"
            height="100%"
          ></iframe>
        </div>
        {!loading ? (
          <VideoMetaData video={video} videoId={vId} />
        ) : (
          <h1>video verileri yükleniyor...</h1>
        )}
        <Comments videoId={vId} totalComments={video?.statistics?.commentCount} />
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
