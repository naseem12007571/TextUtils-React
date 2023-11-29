//import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import { Link } from 'react-router-dom';
// import { Router } from 'react-router-dom';
import { 
  BrowserRouter as Router, 
  Routes,
  Route,
  
} from 'react-router-dom';

function App() {
  const [mode, setMode]=useState('light');
  const[alert,setAlert]=useState("null");
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("dark mode has been enabled","success");
      document.title='Textutils-Dark Mode';
      // setInterval(() => {
      //   document.title='Textutils-is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Textutils-Update Now';
       
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode has been enabled","success");
      document.title='Textutils-Light Mode';
      // setInterval(() => {
      //   document.title='Textutils-is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Textutils-Update Now';
       
      // }, 1500);
    }
  }
  
  return (
  <>
{/* <Navbar /> */}
  <Router>
   <Navbar title="Textutiles" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
<div className="container my-3">
   <Routes>
    <Route exact path="/about" element={<About mode={mode}/>}/>
      {/* { <About/> */}
    {/* </Route> */} 
    <Route exact path="/"element={<Textform showAlert={showAlert} heading="Try TextUtils-Word counter, character counter, remove extra spaces"/>}/>
   
    {/* </Route> */}
   </Routes>
</div>
</Router>
  </>
  );
}

export default App;
