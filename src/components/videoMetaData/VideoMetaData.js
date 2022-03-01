import React, { useEffect } from "react";
import "./_videoMetaData.scss";
import moment from "moment";
import numeral from "numeral";

import { MdThumbUp, MdThumbDown } from "react-icons/md";
import ShowMoreText from "react-show-more-text";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSubscriptionStatus,
  getChannelDetails,
} from "../../redux/actions/channel";
import HelmetCustom from "../helmet/HelmetCustom";

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  const dispatch = useDispatch();

  const channelSnippet = useSelector(
    (state) => state?.channelDetails?.channel?.snippet
  );
  const channelStatistics = useSelector(
    (state) => state?.channelDetails?.channel?.statistics
  );

  // const { snippet: channelSnippet, statistics: channelStatistics } =
  //   useSelector((state) => state?.channelDetails?.channel);

  const subscriptionStatus = useSelector(
    (state) => state?.channelDetails?.subscriptionStatus
  );

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="videoMetaData py-2">
      <HelmetCustom title={title} description={description} />
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            {/* {viewCount} Views • */}
            {numeral(viewCount).format("0.a")} Views •&nbsp;
            {moment(publishedAt).fromNow()}
          </span>

          <div>
            <span className="mr-3">
              <MdThumbUp size={26} /> {numeral(likeCount).format("0.a")}
            </span>
            &nbsp; &nbsp; &nbsp;
            <span>
              <MdThumbDown size={26} /> ?&nbsp;
              {/* {numeral(dislikeCount).format("0.a")} */}
            </span>
          </div>
        </div>
      </div>
      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          {channelSnippet ? (
            <img
              alt="channelIcon"
              src={channelSnippet?.thumbnails?.default?.url}
              className="rounded-circle mr-3"
            />
          ) : (
            <img alt="channelIcon" src="#" className="rounded-circle mr-3" />
          )}
          <div className="d-flex flex-column mx-2">
            <span>{channelTitle}</span>
            <span>
              {channelStatistics
                ? numeral(channelStatistics?.subscriberCount).format("0.a")
                : numeral(0).format("0.a")}
              &nbsp; Subscribers
            </span>
          </div>
        </div>

        <button
          className={`btn border-0 p-2 m-2 ${subscriptionStatus && "btn-gray"}`}
        >
          {subscriptionStatus ? " Subscribed" : "Subscribe"}
        </button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="Show More"
          less="Show Less"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;
