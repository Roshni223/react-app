import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
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
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled!!", "success");
      document.title = "Text Utils - Light";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      document.body.style.color = "white";
      showAlert("Dark mode enabled!!", "success");
      document.title = "Text Utils - Dark";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
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
