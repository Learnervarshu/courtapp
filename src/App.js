import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./components/Login";
import { ClientReg } from "./components/ClientReg";
import { LawyerReg } from "./components/LawyerReg";
import { ClientDashboard } from "./components/ClientDashboard";
import { LawyerDashboard } from "./components/LawyerDashboard";
import Chatbot from "./components/ChatBot";
import Userlogin from "./components/Userlogin";
import { Lawyersearch } from "./components/Lawyersearch";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Lawyersearch/>} />
          <Route index path="/Signup" element={<Userlogin />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/clientReg" element={<ClientReg />} />
          <Route path="/clientDashboard" element={<ClientDashboard />} />
          <Route path="/lawyerDashboard" element={<LawyerDashboard/>} /> 
          <Route path="/lawyerReg" element={<LawyerReg />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;