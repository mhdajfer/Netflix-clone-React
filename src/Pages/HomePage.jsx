import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import RowComponent from "../Components/RowComponent";
import Footer from "../Components/Footer";

function HomePage() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Banner />
      <RowComponent
        url={import.meta.env.VITE_MOVIES_ANIMATION}
        title="Trending"
      />
      <RowComponent
        url={import.meta.env.VITE_MOVIES_ACTION}
        title="Action"
        size="h-32"
        rowSize="h-[250px]"
      />
      <RowComponent
        url={import.meta.env.VITE_MOVIES_ADVENTURE}
        title="Horror"
      />
      <Footer />
    </div>
  );
}
export default HomePage;
