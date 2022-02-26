import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos";
import InfiniteScroll from "react-infinite-scroll-component";
//import SkeletonVideo from "../../components/skeletons/SkeletonVideo";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      dispatch(getPopularVideos());
    }
  }, [dispatch, user]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
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
          {
            //loading ?
            videos?.map((video, i) => (
              <Col lg={3} md={4} key={i}>
                <Video video={video} />
              </Col>
            ))

            //   ))
            // : [...Array(20)].map(() => (
            //     <Col lg={3} md={4}>
            //       <SkeletonVideo />
            //     </Col>
            //   ))
          }
        </Row>
      </InfiniteScroll>
    </Container>
  );
};

export default HomeScreen;
