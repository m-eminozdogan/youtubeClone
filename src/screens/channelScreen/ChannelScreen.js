import "./_channelScreen.scss";
import React, { useEffect } from "react";
import { getVideosByChannel } from "../../redux/actions/videos";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { getChannelDetails } from "../../redux/actions/channel";
import numeral from "numeral";

const ChannelScreen = () => {
  /////////// USE PARAMS DOESNT WORK SO WEIRD WAY TO GET QUERY ///////////
  let fullPath = window.location.pathname;
  let channelId = fullPath.split("/")[2];
  // console.log(channelId);
  /////////////////
  const dispatch = useDispatch();

  useEffect(() => {
    if (channelId) {
      dispatch(getChannelDetails(channelId));
      dispatch(getVideosByChannel(channelId));
    }
  }, [dispatch, channelId]);

  const { videos, loading } = useSelector((state) => state.channelVideos);
  const cDetails = useSelector((state) => state.channelDetails.channel);
  const snippet = cDetails?.snippet;
  const statistics = cDetails?.statistics;
  return (
    <>
      <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
        <div className="d-flex align-items-center">
          <img alt="#" src={snippet?.thumbnails?.default?.url} />
          <div className="ml-3 channelHeader__details">
            <h3>{snippet?.title}</h3>
            <span>
              {numeral(statistics?.subscriberCount).format("0.a")}
              &nbsp;subscribers
            </span>
          </div>
        </div>
        <button>Subscribe</button>
      </div>
      <Container>
        <Row className="mt-2">
          {!loading
            ? videos?.map((video, i) => (
                <Col md={4} lg={3} key={i}>
                  <Video video={video} ChannelScreen />
                </Col>
              ))
            : [...Array(10)].map((v, i) => (
                <Col md={4} lg={3} key={i}>
                  <SkeletonTheme color="#343a40" highlightColor="#3c4147">
                    <Skeleton width="100%" height="130px" />
                  </SkeletonTheme>{" "}
                </Col>
              ))}
        </Row>
      </Container>
    </>
  );
};

export default ChannelScreen;
