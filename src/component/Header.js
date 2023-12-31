import { useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/Url";
import dummy from "../utils/Usercontext";
const Header = () => {
  const user = useContext(dummy);
  console.log(user, "this is header render ");
  console.log('thisisthelifecycle-header')
  return (
    <div className=" flex w-full h-20 items-center justify-around border-b-2 shadow-lg">
      <div className="flex h-full">
        <div className="flex h-full  items-center">
          <Link to={"/"}>
            <img src={LOGO_URL} alt="logo" className="h-[49px] w-[85px]" />
          </Link>
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-bold text-sky-950 text-sm underline underline-offset-8 font-text">
            Other
          </p>
          <p className="font-light text-xs text-gray-500">
            Bangalore,Karnataka,India
          </p>
        </div>
      </div>
      <ul className="flex justify-center gap-4 items-center">
        <li className="text-base text-sky-950 font-normal">
          <Link to={"/"}>Search</Link>
        </li>
        <li className="text-base text-sky-950 font-normal">
          <Link to={"/about"}>Offers</Link>
        </li>
        <li className="text-base text-sky-950 font-normal">
          <Link to={"/contact"}>Help</Link>
        </li>
        <li className="text-base text-sky-950 font-normal">
          <Link to={"/contact"}>Sign in</Link>
        </li>
        <li className="text-base text-sky-950 font-normal">
          <Link to={"/contact"}>Cart</Link>
          {user.userName}
        </li>
      </ul>
    </div>
  );
};

export default Header;
