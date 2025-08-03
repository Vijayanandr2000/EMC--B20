import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { MainContent } from "./utils/Constant/MainContent";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main MainContent={MainContent} />
      <Footer />
    </>
  );
};

export default App;
