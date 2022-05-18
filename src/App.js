// Functional component
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {

  // const message = "Assalamualaikum bang!";

  return (
    <div>
      <Header/>
      <Content name="Ayam" age="6"/>
      <Footer/>
    </div>
  );
}

export default App;
