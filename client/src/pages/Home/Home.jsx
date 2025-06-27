import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Home = () => {
  return (
    <main className=" bg-[#eaeaea] min-h-screen flex flex-col items-center justify-center gap-4">
      <div className=" w-[80%] max-w-[550px] flex flex-col items-center justify-center gap-7">
        <img src={Logo} alt="logo" className=" w-full mx-auto" />

        <p className=" text-center font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab quos quia
          quibusdam ipsum officia eveniet Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quis, corporis?
        </p>

        <div className=" flex items-center gap-3">
          <Link
            to={"/movies"}
            className=" border-2 border-red-500 py-2 px-7 text-lg text-red-600 font-semibold rounded-sm hover:bg-red-500 hover:text-white duration-150"
          >
            Movies
          </Link>

          <Link
            to={"/tv_shows"}
            className=" border-2 border-red-500 py-2 px-7 text-lg text-red-600 font-semibold rounded-sm hover:bg-red-500 hover:text-white duration-150"
          >
            TV Shows
          </Link>
        </div>
      </div>
    </main>
  );
};
