
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//  Routes,
//   Route,
// } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('white')
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type )=>{

    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const handletoggle=()=>{
    if(mode === 'white'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark Mode Has Been Enabled" , "success");

      
    }
    else{
      setMode('white')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Been Enabled" , "success");
    }
  }
  return (
  <>
  
<Navbar  title="TextUtils" aboutText="About TextUtils" moding={mode} togglered={handletoggle}/>
<div className="container my-3">
  <Alert  alert = {alert}/>
  {/* <Routes>
          <Route exact path="/about"   element = {<About />}/>
          <Route exact path="/"     element = {<Textform  alerthere={showAlert} heading="Enter the text to analyze" moding={mode} />}/>
        </Routes> */}
<Textform  alerthere={showAlert} heading="Enter the text to analyze" moding={mode} />
</div> 

</>
  );
}

export default App;
