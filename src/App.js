import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';

import { Home } from "./pages/home/Home";
import { ErrorBoundary } from './ErrorBoundary';

function App() {
  return (
      <ErrorBoundary>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/react_elearning/search" element={<Home />} />
              <Route
                path="*"
                element={<Navigate to="/react_elearning/search" replace />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
  );
}

export default App;
