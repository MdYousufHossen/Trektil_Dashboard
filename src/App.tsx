import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Orders from "./components/Orders";
import Review from "./components/Review";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Orders />} />
          <Route path="/chart" element={<Review />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
