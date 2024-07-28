import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import { HotelProvider } from "./context/HotelContext";

const App = () => {
  return (
    <HotelProvider>
      <Router>
          <Routes>
          <Route path="/hotel/:hotelSlug" element={<Home/>} />
        </Routes>
      </Router>
    </HotelProvider>
  );
};

export default App;
