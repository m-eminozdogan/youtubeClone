import React, { useEffect, useState } from "react";
import "./_videoHorizontal.scss";
import { AiFillEye } from "react-icons/ai";
import request from "../../api";
import moment from "moment";
import numeral from "numeral";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const VideoHorizontal = ({ video }) => {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video;
  useEffect(() => {
    const get_video_deatails = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_deatails();
  }, [id]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");
  const navigate=useNavigate()
  function handleClick() {
    navigate(`/watch/${id.videoId}`)
  }
  return (
    <Row
      className="videoHorizontal m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <Col className="videoHorizontal__left" xs={6} md={6}>
        <LazyLoadImage
          className="videoHorizontal__thumbnail"
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
          src={medium.url}
          effect="blur"
        />
        <span className="videoHorizontal__duration"> {_duration} </span>
      </Col>
      <Col className="videoHorizontal__right p-0" xs={6} md={6}>
        <p className="videoHorizontal__title mb-1">{title}</p>
        <div className="videoHorizontal__details">
          <AiFillEye /> {numeral(views).format("0.a")} views •{" "}
          {moment(publishedAt).fromNow()}
        </div>
        <div className="videoHorizontal__channel d-fled align-items-center my-1">
          <p className="mb-0">{channelTitle}</p>
        </div>
      </Col>
    </Row>
  );
};

export default VideoHorizontal;
