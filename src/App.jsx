import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import useLenis from "./hooks/useLenis";
import "./index.css";

function App() {
  useLenis();

  return (
    <div className="relative bg-[#050505] antialiased min-h-screen">
      <Navbar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;