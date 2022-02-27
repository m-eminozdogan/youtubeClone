import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getVideosBySearch } from "../../redux/actions/videos";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const Search = (props) => {
  /////////// USE PARAMS DOESNT WORK SO WEIRD WAY TO GET QUERY ///////////
  let fullPath = window.location.pathname;
  let query = fullPath.split("/search/")[1];
  // console.log(query);
  /////////////////
  const dispatch = useDispatch();
  useEffect(() => {
    if (query) dispatch(getVideosBySearch(query));
  }, [query, dispatch]);
  const { videos, loading } = useSelector((state) => state.searchedVideos);
  return (
    <Container>
      {!loading ? (
        videos?.map((video, i) => (
          <VideoHorizontal video={video} key={i} searchScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="130px" count={10} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default Search;
