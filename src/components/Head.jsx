import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="px-5 py-3 grid grid-flow-col shadow-lg">
      <div className="flex cursor-pointer">
        <img
          src="src/assets/hamburger.webp"
          className="h-7"
          onClick={toggleMenuHandler}
        />
        <a href="/">
          <img src="src/assets/youtube-logo.jpg" className="h-7 " />
        </a>
      </div>
      <div className="col-span-10">
        <input
          type="text"
          className="w-1/2 p-1 border border-gray-400 rounded-l-full"
        />
        <button className="bg-gray-100 py-1 px-5 border border-gray-400 rounded-r-full hover:bg-gray-200">
          🔍
        </button>
      </div>
      <div className="h-8">
        <img
          src="src/assets/user-icon.webp"
          className="h-12 p-2 -my-1 border border-gray-400 rounded-full "
        />
      </div>
    </div>
  );
};

export default Head;
