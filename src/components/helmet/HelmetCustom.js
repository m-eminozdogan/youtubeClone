import { Helmet } from "react-helmet";

const HelmetCustom = ({title="my youtube",description='react-redux-youtubeAPI'}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default HelmetCustom;
