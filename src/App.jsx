import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import Topbar from "./components/topbar/Topbar";
import { useContext, useState } from "react";
import { ThemeContext } from "./context";
import Menu from "./components/menu/Menu";
// import { ThemeProvider } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const [openMenu, setOpenMenu] = useState(false);

  return <div style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
    <Topbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
    <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Contact />
  </div>;
};

export default App;