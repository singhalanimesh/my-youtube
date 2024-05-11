import { useEffect, useState } from "react";

import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
    console.log(videos);
  };

  return !videos || videos.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="pt-6">
      <div className="mx-4 flex flex-wrap justify-between">
        {videos.map((video) => (
          <VideoCard key={video.id} info={video} />
        ))}
      </div> 
    </div>
  );
};

export default VideoContainer;
