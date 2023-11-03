import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import {Route, Routes} from 'react-router-dom';
import ContactPage from "./components/ContactPage";
import AboutPage from "./components/AboutPage";
import JoinOurTeamPage from "./components/JoinOurTeamPage";
import MenuPage from "./components/MenuPage";
import LocationsPage from "./components/LocationsPage";

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/join" element={<JoinOurTeamPage/>}/>
        <Route path="/menu" element={<MenuPage/>}/>
        <Route path="/locations" element={<LocationsPage/>}/>
     </Routes>
      <Footer/>
    </div>
  );
}

export default App;
