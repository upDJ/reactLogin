import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Register from './pages/registration';
import {Login} from './pages/login';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;
