import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeaderRouting from './component/layout';
import "./App.css";
import Release from './component/release/Release';


function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
        <Route  path='' element = { <Release  /> } />
          <Route path = '/*' element = { <HeaderRouting /> } />
        </Routes>
      </Router>
      <div>
        <ToastContainer autoClose={4000} />
      </div>
    </div>
  );
}

export default App;

