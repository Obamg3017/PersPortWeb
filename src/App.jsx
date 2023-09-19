import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./routes/About";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import SinglePortProject from "./routes/SinglePortProject";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<SinglePortProject />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
