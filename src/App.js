// Functional component
// import Header from "./components/Header";
// import Content from "./components/Content";
// import Footer from "./components/Footer";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Product from "./components/Product.js";
import Car from "./components/car/Car.js";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {

  // const message = "Assalamualaikum bang!";

  return (
    <div>
      <p>Ini app.js</p>
      {/* <Header/>
      <Content name="Ayam" age="6"/>
      <Footer/> */}
      <Router>
        <Routes>
          <Route path="/" element={App}/>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/cars" element={<Car/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
