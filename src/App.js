import { Route, Routes, Navigate } from 'react-router-dom';
import {Home} from "./pages/home/Home";
import {MovieDetails} from "./pages/movie-details/MovieDetails";
import {Header} from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path=":id" element={<MovieDetails />} />
          <Route path="" element={<Header />} />
        </Route>
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
