import axios from "axios";


const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
   key:"AIzaSyC9VGOT-G551_8gQZWoazgioPUSXDWJtnk"
    // key: process.env.REACT_APP_YT_API_KEY,
  },
});

export default request;
