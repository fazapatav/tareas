import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListaTareas from "./ListaTareas";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login></Login>}>
          {" "}
        </Route>
        <Route path="/tareas" element={<ListaTareas></ListaTareas>}>
          {" "}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
