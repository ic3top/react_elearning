import { Route, Routes, Navigate } from 'react-router-dom';
import {Home} from "./pages/home/Home";
import {MovieDetails} from "./pages/movie-details/MovieDetails";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/search" element={<Home />} />
        <Route
          path="*"
          element={<Navigate to="/search" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
