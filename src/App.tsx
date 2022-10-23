import "./App.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import About from "./components/About";
import Cards from "./components/Cards";
import NewCards from "./components/NewCards";
import EditCard from "./components/EditCard";
import MyCards from "./components/MyCards";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<About />} />
          <Route path="/newcard" element={<NewCards />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/mycards">
            <Route index element={<MyCards />} />
            <Route path="edit/:id" element={<EditCard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
