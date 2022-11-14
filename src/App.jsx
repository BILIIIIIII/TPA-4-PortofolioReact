import "./assets/css/App.css";

import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
// import About from "./pages/About";
// import Blogs from "./pages/Blogs";
import Home from "./pages/Home";
// import Skills from "./pages/Skills";
import Routers from "./Routers";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Navbar />
      {/* <About /> */}
      <Routers />
      {/* <Skills />
      <Blogs /> */}
      <Footer />
    </div>
  );
}

export default App;
