import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("#ffffff");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = (color) => {
    setMode(color);
    let backgroundColor;
    if (color === "#000435") {
      // Light navy blue
      backgroundColor = "rgb(42, 52, 82)";
    } else if (color === "#06402B") {
      // Light dark green
      backgroundColor = "rgb(56, 105, 61)";
    } else if (color === "#000000") {
      // Light black (gray)
      backgroundColor = "rgb(43, 48, 48)";
    } else {
      backgroundColor = color;  // Default color
    }

    document.body.style.backgroundColor = backgroundColor;
    document.body.style.color = color === "#ffffff" ? "black" : "white";
  };

  useEffect(() => {
    document.body.style.color = mode === "#ffffff" ? "black" : "white";
  }, [mode]);

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode}
                  toggleMode={toggleMode} />} />
          <Route
            path="/"
            element={
              <div className="container my-3">
                <Textform
                  heading="Enter your text to Analyse"
                  mode={mode}
                  toggleMode={toggleMode}
                  alert={alert}
                  showAlert={showAlert}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
