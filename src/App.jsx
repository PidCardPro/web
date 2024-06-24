import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import image1 from "./assets/img/bg11.png";
import image2 from "./assets/img/bg22.png";
import { ContentOne } from "./components/ContentOne";
import { ContentTwo } from "./components/ContentTwo";
import { MobileDisplay } from "./components/MobileDisplay";
import { ContentThree } from "./components/ContentThree";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import { Element } from "react-scroll";
import { ContentFour } from "./components/ContentFour";
import { Router } from "./router/Router";

const AppContainer = () => {
  return <Router />;
};
function App() {
  const estiloConFondo = {
    backgroundImage: `url(${image1})`,
    backgroundSize: "cover",
    width: "100%",
    height: "1070px",
    overflow: "hidden",
  };
  const estiloConFondo1 = {
    backgroundColor: "#098009",
  };
  const estiloConFondo2 = {
    backgroundColor: "#098009",
  };

  return (
<AppContainer />
  );
}

export default App;
