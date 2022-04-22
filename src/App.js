import { Route, Routes, Navigate } from 'react-router-dom';
import {Home} from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </div>
  );
}

export default App;
