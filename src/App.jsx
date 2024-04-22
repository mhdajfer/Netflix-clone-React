import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import RowComponent from "./Components/RowComponent";

function App() {
  return (
    <>
      <div className="bg-gray-800 h-[2000px]">
        <Navbar />
        <Banner />
        <RowComponent />
      </div>
    </>
  );
}

export default App;
