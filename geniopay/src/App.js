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

   
   	<div className= {" grid grid-cols-12 font-nunito"} >

  		<div className={" xs:hidden sm:hidden md:hidden lg:flex col-span-3"}>
  			<SideBar currentSection={currentSection} switcher={changeCurrentSection} />
  		</div>

   		<div className={"col-span-9"}>

           <div> 
                 <NavBar navHeading={ currentSection } /> 
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

  );
}

export default App;