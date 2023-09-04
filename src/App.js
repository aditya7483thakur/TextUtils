import './App.css';
import About from './components/About';
import React from 'react';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const darkMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (

    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} darkMode={darkMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path='/about' element={<About />}></Route>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter your text below to analyze it." mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

