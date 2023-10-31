import "./App.css";
import Navbar from "./components/Navbar";
import famousTaco from "./assets/insidefamoustaco.jpeg";
import facebookIcon from "./assets/facebook.png";
import ImageSwiper from "./components/Swiper";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  return (
    <>
      <Navbar />
      <Homepage/>
      <Footer/>
    </>
  );
}

export default App;
