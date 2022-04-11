import Form from "./components/Form.jsx";
import Home from "./components/Main.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/Main" element={<Main />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
