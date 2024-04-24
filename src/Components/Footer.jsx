import { SiNetflix } from "react-icons/si";
function Footer() {
  return (
    <footer className="bg-black text-white py-6 h-64 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <SiNetflix size={30} color="red" />
            <span className="ml-2 font-semibold">Netflix</span>
          </div>
          <nav className="me-12 mt-[4rem]">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  TV Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Movies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Latest
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  My List
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className=" absolute bottom-5 text-sm ">© 2024 Netflix Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;
