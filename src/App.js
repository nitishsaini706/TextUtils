import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TestForm from "./components/TestForm";
import Alert from "./components/Alert";


function App() {

  const [mode,setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showalert = (message,type)=>{

    setalert({
      msg:message,
      type :type
    });

    setTimeout(() => {
      setalert(null);
    }, 1800);

  }
  const toggleredmode = ()=> {
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor ="#6f0000";
      showalert("red mode enabled","primary");
    }
    else{
      setMode('light');  
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enbled" , "primary");

    }
  }

  const toggleMode = () =>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = "#050A30";
      showalert("Dark mode has been enbled" , "primary");
    }
    else{
      setMode('light');  
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enbled" , "primary");


    }
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} toggleredmode={toggleredmode}/>
      <Alert alert={alert} />

      <div className="container my-3">
      <TestForm mode={mode} toggleMode={toggleMode}/>
      </div>
    </>
  );
}

export default App;
