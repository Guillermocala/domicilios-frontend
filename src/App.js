import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import MisRutas from "./MisRutas";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DomiciliosContextProvider } from "./context/DomiciliosContext";
import { MensajerosContextProvider } from "./context/MensajerosContext";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <MensajerosContextProvider>
          <DomiciliosContextProvider>
            <MisRutas />
          </DomiciliosContextProvider>
        </MensajerosContextProvider>
      </div>
      <Footer />
    </Router>
  );
}