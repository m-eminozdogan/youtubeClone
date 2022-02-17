import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { getPopularVideos, getVideosByCategory } from "../../redux/actions/videos";
import InfiniteScroll from "react-infinite-scroll-component";
const HomeScreen = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch, user]);

  const { videos, activeCategory } = useSelector((state) => state.homeVideos);

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideosByCategory(activeCategory))
    }
  };
  if (!videos) {
    return null;
  }
  return (
    <Container>
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        Loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      >
        <Row>
          {videos?.map((video, index) => (
            <Col lg={3} md={4} key={index}>
              <Video video={video} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
