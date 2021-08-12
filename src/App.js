import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MisRutas from "./MisRutas";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return(
    <Router>
      <Header />
      <div>

      <MisRutas />
      
      </div>
      <Footer />
    </Router>
  );
}