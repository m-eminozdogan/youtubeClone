import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import "./_watchScreen.scss";
import VideoMetaData from "../../components/videoMetaData/VideoMetaData";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import Comments from "../../components/comments/Comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRelatedVideos, getVideoById } from "../../redux/actions/videos";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
      dispatch(getRelatedVideos(vId));
    }
  }, [dispatch, vId]);

  const { video, loading } = useSelector((state) => state.selectedVideo);
  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  );
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
        <Comments
          videoId={vId}
          totalComments={video?.statistics?.commentCount}
        />
      </Col>
      <Col lg={4}>
        {!loading ? (
          videos
            ?.filter((video) => video.snippet)
            .map((video, i) => <VideoHorizontal video={video} key={i} />)
        ) : (
          <SkeletonTheme color="#343a40" highlightColor="#3c4147">
            <Skeleton width="100%" height="130px" count={15} />
          </SkeletonTheme>
        )}
      </Col>
    </Row>
  );
};

export default WatchScreen;
