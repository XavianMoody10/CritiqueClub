import { FaRegCircleUser as UserIcon } from "react-icons/fa6";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className=" sticky top-0 w-full py-5 z-10 bg-[#eaeaea]">
      <div className=" w-[90%] max-w-[1500px] mx-auto flex justify-between items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120} />
        </Link>
        <UserIcon size={30} />
      </div>
    </header>
  );
};
