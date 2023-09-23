import { NewPost } from "./components/NewPost";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

export function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<NewPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  )

}
