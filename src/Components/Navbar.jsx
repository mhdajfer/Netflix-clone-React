import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <>
      <div className="flex justify-between p-2 items-center px-6 ">
        <img
          className="w-32"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        />
        <div>
          <ul className="flex space-x-3 font-extralight">
            <li>Movies</li>
            <li>Shows</li>
            <li>TV shows</li>
          </ul>
        </div>
        <CgProfile size={24} />
      </div>
    </>
  );
}

export default Navbar;
