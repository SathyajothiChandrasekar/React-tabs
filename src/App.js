import './App.css';
import {Tabs} from "./components/Tabs"
import { useState, createContext } from 'react';
 export const AppContext=createContext(null) //cretaeontext

function App() {
  const [tab, setTab] = useState(1); //tab state

  //toggle function
  const active=(index)=>{
    setTab(index);
  }

  return (
    <div className='mainContainer'>
      <AppContext.Provider value={{tab, active}} >
      {/* tab component */}
         <Tabs /> 
      </AppContext.Provider>
   
    </div>
  );
}

export default App;
