import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../../components/video/Video";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import { getPopularVideos } from "../../redux/actions/videos";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  console.log(user);

  useEffect(() => {
    if (user !== null) {
      dispatch(getPopularVideos());
    } else {
      console.log("boş döndü");
    }
  }, [dispatch, user]);

  const { videos } = useSelector((state) => state.homeVideos);
  console.log(videos);

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos?.map((video,index) => (
          <Col lg={3} md={4} key={index}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
