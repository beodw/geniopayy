import React from 'react';
import SideBar from '../../sideBar/sideBar.js';



const NavBar = (props) => {





	return (

			<div className={"w-full items-center grid grid-cols-1 md:grid-cols-2 p-4"}>

				<div className={'flex block md:hidden py-4'}>

					<h1 className={"text-lg text-grey font-bold flex-grow"}>{props.navHeading === "Dashboard" ? "Welcome, Huss Smith" : props.navHeading}</h1>
				<button id={'mobile-menu-button'} onClick={() => { document.querySelector(".mobile-menu").classList.toggle('hidden'); }}>Switch</button>
				</div>

				<div className={'mobile-menu hidden flex py-4'}>
					{console.log(props)}
					<SideBar currentSection={props.currentSection} switcher={props.switcher} />
				</div>

				<div className={"items-center flex justify-end grow"}>
					<div className={"grid grid-cols-2 "}> 
						
						<div className={"flex p-2 border-solid border bg-searchBG border-greyBorder focus-within:border-teal rounded-2xl items-center"}>
							<div className={"mr-4"}> <img src="./assets/search.svg" alt="search icon" /></div>
							<div className={"grow"}>
								<input className={"mr-8 rounded-lg bg-searchBG border-none outline-0"} placeholder={"Search"} type="text" name="search" id="search" />
							</div>
						</div>
						<div className={"ml-2 flex"}>
							<div className={"flex items-center"}>
								<img className={'cursor-pointer w-4'} src="./assets/tree.svg" alt="tree icon" />
								<div className={"ml-2"}>
									<span className={"text-xs text-grey"}>{"0 Planted"}</span>
								</div>
							</div>
							<div className={" ml-2 flex items-center"}>
								<div className={"mr-2"}>
									<img className={'cursor-pointer w-4'} src="./assets/notifications.svg" alt="bell icon" />
								</div>
								<div className={"cursor-pointer flex items-center"}>
									<div className={""}>
										<img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
									</div>
									<div className={'block mx-2'}>
											<h6 className={"text-xs text-green"}>{"Verified"}</h6>
											<h6 className={"text-xs font-bold"}>{"Huss Smith"}</h6>
									</div>
									<div className={""}>
										<img className={'w-2'} src="./assets/downwardArrow.svg" alt="downward arrow" />
									</div>
								</div>
							</div>
						</div>
						
					</div>
				</div>

			</div>
		);
}

export default NavBar;