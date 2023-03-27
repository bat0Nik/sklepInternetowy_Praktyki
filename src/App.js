import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar} from './components/navbar'
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { HpVictus } from "./pages/products-pages/hp-victus";
import { ContextProvider } from "./context/context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/hp-victus" element={<HpVictus />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
