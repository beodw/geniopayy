import React, { useState } from 'react';
import './App.css';
import SideBar from './components/sideBar/sideBar.js';
import Dashboard from './components/contentHolder/dashboard/dashboard.js';
import NotYetImpl from './components/contentHolder/notYetImpl.js';
import NavBar from './components/contentHolder/navBar/navBar.js';
import Wallet from './components/contentHolder/wallet/wallet.js';
import FXCentre from './components/contentHolder/fxCentre/fxCentre.js';
import Beneficiaries from './components/contentHolder/beneficiaries/beneficiaries.js';

const App = (props) => {

  const [currentSection,changeCurrentSection] = useState('Dashboard');

  return (

   
   	<div className= {"w-full font-nunito"} >

  		<div className={'grid grid-cols-12 '}>
      <div className={"h-screen overflow-y-scroll hidden md:block lg:flex col-span-4"}>
        <SideBar currentSection={currentSection} switcher={changeCurrentSection} />
      </div>

      <div className={"col-span-12 md:col-span-8 "}>

           <div> 
                 <NavBar currentSection={currentSection} switcher={changeCurrentSection} navHeading={ currentSection } /> 
           </div>

           <div className={' px-8 py-8'}>

           { 

            currentSection === "Dashboard" ?  <Dashboard /> : 
             currentSection === "Wallet" ? <Wallet /> :
             currentSection === "FX Centre" ? <FXCentre /> :
             currentSection === "Beneficiaries" ? <Beneficiaries /> 
             : <NotYetImpl />  

           }
                
            </div>
      </div>
      </div>
	</div>

  );
}

export default App;