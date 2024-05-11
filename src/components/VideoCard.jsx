import PropTypes from "prop-types";

const VideoCard = ({ info }) => {
  const { snippet } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="w-[330px]  h-[320px]">
      <img
        src={thumbnails?.medium?.url}
        alt="img"
        className="h-[180px] rounded-lg"
      />
      <div className="flex mr-4">
        <div>
          <img src="" alt="" className="rounded-full h-9 w-9 mr-3 mt-3" />
        </div>
        <div className="font-semibold pr-6">
          <div>{title.substring(0, 65)}</div>
          <div className="text-sm">{channelTitle}</div>
          <div className="text-sm">
            {Math.round(info?.statistics?.viewCount / 1000000)}M Views
          </div>
        </div>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  info: PropTypes.object,
};

export default VideoCard;
