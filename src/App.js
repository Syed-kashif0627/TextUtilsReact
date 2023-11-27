
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  
  const toggleMode = (color) => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = color;
      showAlert("Dark mode has been Enabled", "success");
      // document.title='TextUtils- Dark Mode'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success")
     // document.title='TextUtils- Light Mode'
    }
  }
  
    const [alert,setAlert]=useState(null);

    const showAlert= (message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1800
      )
    }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/> }>
          </Route>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
