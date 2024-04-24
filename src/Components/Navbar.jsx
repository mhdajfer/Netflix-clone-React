import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 text-white w-full h-16 flex justify-between p-2 items-center px-6 ">
        <img
          className="w-32 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <div>
          <ul className="flex space-x-3 font-extralight ">
            <li className="cursor-pointer hover:text-gray-200">Movies</li>
            <li className="cursor-pointer hover:text-gray-200">Shows</li>
            <li className="cursor-pointer hover:text-gray-200">TV shows</li>
          </ul>
        </div>
        <CgProfile size={24} className="cursor-pointer" />
      </div>
    </>
  );
}

export default Navbar;
