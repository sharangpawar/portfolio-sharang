import "./App.css";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";
import ContactMe from "./PortfolioContainer/ContactMe/ContactMe";
import Home from "./PortfolioContainer/Home/Home";
import Resume from "./PortfolioContainer/Resume/Resume";
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";

function App() {
  return (
    <div className="App">
      {/* <PortfolioContainer /> */}
      <ToastContainer />
      <Home />
      <AboutMe />
      <Resume />
      <Testimonial />
      <ContactMe />
    </div>
  );
}

export default App;
