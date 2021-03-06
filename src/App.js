import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import FetchRandomUser from "./API_FETCH/FetchRandomUser";
import Homepage from "./Pages/Homepage";

import CMS from "./Pages/CMS";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Navbar />
        </nav>

        <Route path="/" exact component={Homepage}></Route>

        <Route path="/API">
          <FetchRandomUser />
        </Route>
        <Route path="/CMS">
          <CMS />
        </Route>
      </div>
    </Router>
  );
}

export default App;
