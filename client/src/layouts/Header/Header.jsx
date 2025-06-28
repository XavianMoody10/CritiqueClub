import { FaRegCircleUser as UserIcon } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className=" sticky top-0 w-full py-5 z-10 bg-[#eaeaea]">
      <div className=" w-[90%] max-w-[1500px] mx-auto flex justify-end">
        <UserIcon size={30} />
      </div>
    </header>
  );
};
