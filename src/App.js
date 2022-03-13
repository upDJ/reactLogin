import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";

import Register from './pages/registration';
import { Login } from './pages/login';
import Initialize from './components/button';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={null} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Initialize/>
    </div>
  );
}

export default App;

