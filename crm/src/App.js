import './App.css';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Message from "./components/MessageVolume/message";
import Home from "./components/Home/Home";

function App() {
  return (
          <Router>
              <Routes>
                  <Route path="/" element={<Navbar/>} />
                  <Route path="/message" element={<Message/>} />
                  <Route path="/home" element={<Home/>} />

              </Routes>
          </Router>
  
  );
}

export default App;