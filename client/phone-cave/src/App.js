
import './App.css';
import { Routes, Route } from "react-router-dom";
import AllPhonesPage from './pages/AllPhonesPage';
import PhoneDetails from './components/PhoneDetails';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<AllPhonesPage/>} />
      <Route path="/:phoneId" element={<PhoneDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
