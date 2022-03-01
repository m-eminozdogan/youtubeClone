import "./_subscriptions.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannel } from "../../redux/actions/videos";
import { Container } from "react-bootstrap";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SubscriptionsScreen = () => {
  /////////// USE PARAMS DOESNT WORK SO WEIRD WAY TO GET QUERY ///////////
  let fullPath = window.location.pathname;
  let path = fullPath.split("/")[1] + "/" + fullPath.split("/")[2];
  //console.log(path);
  /////////////////
  const dispatch = useDispatch();

  useEffect(() => {
    if (path === "feed/subscriptions") {
      dispatch(getSubscribedChannel());
    }
  }, [dispatch]);

  const { loading, videos } = useSelector(
    (state) => state?.subscriptionsChannel
  );

  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video, i) => (
          <VideoHorizontal subScreen video={video} key={i} />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="130px" count={10} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionsScreen;
