import LoginPage from "./pages/Loginpage";
import Dash from './Components/Dash'
import { Routes, Route} from "react-router-dom";
import Forgot from "./Components/log-uti/Forgot";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Transaction from "./Components/Transaction";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}>
        <Route path="/" element={<Dash/>}/>
        <Route path="/dash" element={<Dash/>}/>
        <Route path="/transaction" element={<Transaction/>}/>
       </Route>
      </Routes>

      <Routes>
        <Route path="/register" element={<LoginPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/forgot" element={<Forgot/>}/>
      </Routes>

    </div>
  );
};

export default App;
