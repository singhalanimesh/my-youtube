import { useSelector } from "react-redux";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen)
    return (
      <div className="p-2 w-20">
        <ul className=" p-2 flex flex-col items-center">
          <MdHomeFilled size={25} className="mt-4" />
          <li className="pb-4">Home</li>
          <SiYoutubeshorts size={25} className="mt-4" />
          <li className="pb-4">Shorts</li>
          <MdSubscriptions size={25} className="mt-4" />
          <li className="pb-4 text-xs">Subscriptions</li>
          <BsLayoutTextWindowReverse size={25} className="mt-4" />
          <li className="pb-4">You</li>
        </ul>
      </div>
    );

  return (
    <div className="p-5 w-32">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-5">You</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
