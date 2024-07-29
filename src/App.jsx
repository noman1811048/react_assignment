import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home/Home";

import { HotelProvider } from "./context/HotelContext";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";


const App = () => {
  return (
    <HotelProvider>
      <Router>
        <Routes>
          <Route path="/hotel/:hotelSlug" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </HotelProvider>
  );
};

export default App;
