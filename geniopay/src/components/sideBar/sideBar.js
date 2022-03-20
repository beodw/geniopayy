import React from 'react';
import SideBarButton from './sideBarButton';

const SideBar = (props) => {

		const dashboardIcon = (
									<svg className={ props.currentSection === "Dashboard" ? ' w-6 fill-teal' : ' w-6 fill-teal stroke-white' } viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
										<path stroke-width="0.5" d="M22 8.56102V4.02102C22 2.61102 21.36 2.04102 19.77 2.04102H15.73C14.14 2.04102 13.5 2.61102 13.5 4.02102V8.55102C13.5 9.97102 14.14 10.531 15.73 10.531H19.77C21.36 10.541 22 9.97102 22 8.56102Z"/>
										<path stroke-width="0.5" d="M22 19.811V15.771C22 14.181 21.36 13.541 19.77 13.541H15.73C14.14 13.541 13.5 14.181 13.5 15.771V19.811C13.5 21.401 14.14 22.041 15.73 22.041H19.77C21.36 22.041 22 21.401 22 19.811Z"/>
										<path stroke-width="0.5" d="M10.5 8.56102V4.02102C10.5 2.61102 9.86 2.04102 8.27 2.04102H4.23C2.64 2.04102 2 2.61102 2 4.02102V8.55102C2 9.97102 2.64 10.531 4.23 10.531H8.27C9.86 10.541 10.5 9.97102 10.5 8.56102Z"/>
										<path stroke-width="0.5" d="M10.5 19.811V15.771C10.5 14.181 9.86 13.541 8.27 13.541H4.23C2.64 13.541 2 14.181 2 15.771V19.811C2 21.401 2.64 22.041 4.23 22.041H8.27C9.86 22.041 10.5 21.401 10.5 19.811Z" />
									</svg>

							  );
		const walletIcon = (
									<svg className={ 'w-6 fill-transparent'  } viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
										<path className={ props.currentSection === "Wallet" ? 'stroke-teal': 'stroke-white'} d="M8.66666 6.54102H4.66666" stroke-width="0.5" />
										<path className={ props.currentSection === "Wallet" ? 'stroke-teal': 'stroke-white'} d="M14.6667 7.8538V9.22717C14.6667 9.59384 14.3734 9.89381 14 9.90715H12.6933C11.9733 9.90715 11.3134 9.38048 11.2534 8.66048C11.2134 8.24048 11.3734 7.84715 11.6534 7.57381C11.9 7.32048 12.24 7.17383 12.6134 7.17383H14C14.3734 7.18716 14.6667 7.48713 14.6667 7.8538Z" stroke-width="0.5"/>
										<path className={ props.currentSection === "Wallet" ? 'stroke-teal': 'stroke-white'} stroke-width="0.5"  d="M11.6533 7.57499C11.3733 7.84833 11.2133 8.24166 11.2533 8.66166C11.3133 9.38166 11.9733 9.90833 12.6933 9.90833H14V10.875C14 12.875 12.6667 14.2083 10.6667 14.2083H4.66668C2.66668 14.2083 1.33334 12.875 1.33334 10.875V6.20833C1.33334 4.395 2.42668 3.12833 4.12668 2.915C4.30001 2.88833 4.48001 2.875 4.66668 2.875H10.6667C10.84 2.875 11.0067 2.88166 11.1667 2.90833C12.8867 3.10833 14 4.38167 14 6.20833V7.17501H12.6133C12.24 7.17501 11.9 7.32166 11.6533 7.57499Z" />
									</svg>

							);

		const cardIcon = (
									<svg className={' w-6 active:stroke-teal focus:stroke-teal fill-transparent stroke-white'} viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
										<path className={ props.currentSection === "Cards" ? 'stroke-teal': 'stroke-white'} d="M1.33334 6.21094H14.6667" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
										<path className={ props.currentSection === "Cards" ? 'stroke-teal': 'stroke-white'} d="M4 11.5449H5.33333" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
										<path className={ props.currentSection === "Cards" ? 'stroke-teal': 'stroke-white'} d="M7 11.5449H9.66667" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
										<path className={ props.currentSection === "Cards" ? 'stroke-teal': 'stroke-white'} d="M4.29334 2.87695H11.7C14.0733 2.87695 14.6667 3.46362 14.6667 5.80362V11.277C14.6667 13.617 14.0733 14.2036 11.7067 14.2036H4.29334C1.92668 14.2103 1.33334 13.6236 1.33334 11.2836V5.80362C1.33334 3.46362 1.92668 2.87695 4.29334 2.87695Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
						);
		const fxCentreIcon = (
									<svg className={' w-6'} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path className={ props.currentSection === "FX Centre" ? 'stroke-teal': 'stroke-white'} d="M5.78125 10.0936C5.78125 10.9536 6.44125 11.6469 7.26125 11.6469H8.93458C9.64792 11.6469 10.2279 11.0403 10.2279 10.2936C10.2279 9.48026 9.87458 9.19359 9.34792 9.00693L6.66125 8.07359C6.13458 7.88693 5.78125 7.60026 5.78125 6.78693C5.78125 6.04026 6.36125 5.43359 7.07458 5.43359H8.74792C9.56792 5.43359 10.2279 6.12693 10.2279 6.98693" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
										<path className={ props.currentSection === "FX Centre" ? 'stroke-teal': 'stroke-white'} d="M8 4.54102V12.541" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
										<path className={ props.currentSection === "FX Centre" ? 'stroke-teal': 'stroke-white'} d="M10 15.2083H6.00001C2.66668 15.2083 1.33334 13.875 1.33334 10.5417V6.54167C1.33334 3.20833 2.66668 1.875 6.00001 1.875H10C13.3333 1.875 14.6667 3.20833 14.6667 6.54167V10.5417C14.6667 13.875 13.3333 15.2083 10 15.2083Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
							);
		const beneficiariesIcon = (

								<svg className={' w-6 fill-transparent'} viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
									<path className={ props.currentSection === "Beneficiaries" ? 'stroke-teal': 'stroke-white'} d="M6.10667 7.78833C6.04001 7.78167 5.96001 7.78167 5.88668 7.78833C4.30001 7.735 3.04001 6.435 3.04001 4.835C3.04001 3.20167 4.36001 1.875 6.00001 1.875C7.63334 1.875 8.96001 3.20167 8.96001 4.835C8.95334 6.435 7.69334 7.735 6.10667 7.78833Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
									<path className={ props.currentSection === "Beneficiaries" ? 'stroke-teal': 'stroke-white'} d="M10.94 3.20703C12.2333 3.20703 13.2733 4.2537 13.2733 5.54036C13.2733 6.80036 12.2733 7.82703 11.0267 7.8737C10.9733 7.86703 10.9133 7.86703 10.8533 7.8737" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
									<path className={ props.currentSection === "Beneficiaries" ? 'stroke-teal': 'stroke-white'} d="M2.77332 10.247C1.15999 11.327 1.15999 13.087 2.77332 14.1604C4.60666 15.387 7.61332 15.387 9.44666 14.1604C11.06 13.0804 11.06 11.3204 9.44666 10.247C7.61999 9.02703 4.61332 9.02703 2.77332 10.247Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
									<path className={ props.currentSection === "Beneficiaries" ? 'stroke-teal': 'stroke-white'} d="M12.2267 13.875C12.7067 13.775 13.16 13.5817 13.5333 13.295C14.5733 12.515 14.5733 11.2283 13.5333 10.4483C13.1667 10.1683 12.72 9.98167 12.2467 9.875" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
			);

	const perksIcon = (
								<svg className={' w-6 fill-transparent'} viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
									<path className={ props.currentSection === "Perks" ? 'stroke-teal': 'stroke-white'} d="M2.77992 10.7415L5.79992 13.7615C7.03992 15.0015 9.05325 15.0015 10.2999 13.7615L13.2266 10.8349C14.4666 9.59487 14.4666 7.58154 13.2266 6.33487L10.1999 3.32154C9.56659 2.6882 8.69325 2.3482 7.79992 2.39487L4.46658 2.55487C3.13325 2.61487 2.07325 3.67487 2.00658 5.00154L1.84658 8.33487C1.80658 9.23487 2.14659 10.1082 2.77992 10.7415Z" stroke="white" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
									<path className={ props.currentSection === "Perks" ? 'stroke-teal': 'stroke-white'} d="M6.33326 8.54036C7.25374 8.54036 7.99993 7.79417 7.99993 6.8737C7.99993 5.95322 7.25374 5.20703 6.33326 5.20703C5.41279 5.20703 4.6666 5.95322 4.6666 6.8737C4.6666 7.79417 5.41279 8.54036 6.33326 8.54036Z" stroke="white" stroke-width="0.5" stroke-linecap="round"/>
								</svg>
					 );

		return (

			<div className={"w-full h-full bg-teal flex flex-col px-8 pt-2"}>

				<div className={" mb-2 px-10"}>
						<div className={'text-white'}> 	<img alt={"logo"} className={'w-full'} src={'/assets/logo.svg'} /> </div>
				</div>

				<div className={" bg-bright-teal mb-2 rounded-lg px-7 pt-7 pb-6 text-white my-6"}>
						<div className={'flex border-b pb-3 mb-4'}>
							<img alt={"wallet icon"} className={'w-10'} src={'/assets/wallet-icon.svg'} />
							<div className={'flex flex-col grow px-4'}>
								<span className={'text-lg font-nunito'}>Wallet Balance</span>
								<span className={'font-bold text-lg'}>$15,001.00</span>
							</div>

							<svg className={'w-6'} viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
							
									<path d="M14.1666 6.64146C12.6266 4.22146 10.3733 2.82812 7.99992 2.82812C6.81325 2.82812 5.65992 3.17479 4.60659 3.82146C3.55325 4.47479 2.60659 5.42812 1.83325 6.64146C1.16659 7.68812 1.16659 9.38812 1.83325 10.4348C3.37325 12.8615 5.62659 14.2481 7.99992 14.2481C9.18659 14.2481 10.3399 13.9015 11.3933 13.2548C12.4466 12.6015 13.3933 11.6481 14.1666 10.4348C14.8333 9.39479 14.8333 7.68812 14.1666 6.64146ZM7.99992 11.2348C6.50659 11.2348 5.30659 10.0281 5.30659 8.54146C5.30659 7.05479 6.50659 5.84812 7.99992 5.84812C9.49325 5.84812 10.6933 7.05479 10.6933 8.54146C10.6933 10.0281 9.49325 11.2348 7.99992 11.2348Z" stroke-width="0.5" fill="white"/>
									<path d="M8.0001 6.63477C6.95343 6.63477 6.1001 7.4881 6.1001 8.54143C6.1001 9.5881 6.95343 10.4414 8.0001 10.4414C9.04676 10.4414 9.90676 9.5881 9.90676 8.54143C9.90676 7.49477 9.04676 6.63477 8.0001 6.63477Z" stroke-width="0.5" fill='white'/>
							
							</svg>
							
							
						</div>
						<div className={'flex border-b pb-3 mb-2'}>
							<img alt={"star icon"} className={'w-10'} src={'/assets/star.svg'} />
							<div className={'flex flex-col grow px-4'}>
								<span>Awarded Points</span>
								<span className={'font-bold text-lg'}>35</span>
							</div>
						</div>
						<div className={'grid grid-cols-2 gap-2 mt-4'}>
							<button className={'bg-pink p-3 rounded-lg active:bg-teal'}>Pay-In</button>
							<button className={'bg-white text-teal p-3 rounded-lg active:bg-teal active:text-white'}>Pay-Out</button>
						</div>

				</div>

				<div className={" mb-2 text-white pt-8"}>
						<div className={''}>
					  		<SideBarButton 
						  		name={"Dashboard"} 
						  		selected={ props.currentSection === "Dashboard" ? true : false } 
						  		icon={dashboardIcon} 
						  		onClick={props.switcher}
						  		index={'Dashboard'}

					  		/>

					  		<SideBarButton 
						  		name={"Wallet"} 
						  		selected={ props.currentSection === "Wallet" ? true : false } 
						  		icon={walletIcon}
						  		onClick={props.switcher}
						  		index={'Wallet'} 

					  		/>

					  		<SideBarButton 
						  		name={"Cards"} 
						  		selected={ props.currentSection === "Cards" ? true : false } 
						  		icon={cardIcon}
						  		onClick={props.switcher}
						  		index={'Cards'} 

					  		/>

					  		<SideBarButton 
						  		name={"FX Centre"} 
						  		selected={ props.currentSection === "FX Centre" ? true : false } 
						  		icon={fxCentreIcon}
						  		onClick={props.switcher}
						  		index={'FX Centre'} 

					  		/>

					  		<SideBarButton 
						  		name={"Beneficiaries"} 
						  		selected={ props.currentSection === "Beneficiaries" ? true : false } 
						  		icon={beneficiariesIcon}
						  		onClick={props.switcher}
						  		index={'Beneficiaries'} 

					  		/>


					  		<SideBarButton 
						  		name={"Perks"} 
						  		selected={ props.currentSection === "Perks" ? true : false } 
						  		icon={perksIcon}
						  		onClick={props.switcher}
						  		index={'Perks'} 

					  		/>


				  		</div>

				</div>

				<div className={"bg-beige mb-2 rounded-lg p-8 my-6 "}>
						
						<div className={'flex pb-3 mb-2'}>
							<img alt={"horn icon"} className={'w-16 object-contain'} src={'/assets/horn.png'} />
							<div className={'flex flex-col grow px-2'}>
								<span className={'font-bold text-lg'}>Refer and earn</span>
								<span>Use the below link to invite friends.</span>
							</div>
							
						</div>
						<div className={'grid grid-cols-1 mt-2'}>
							<button className={'bg-teal p-4 rounded-lg active:bg-bright-teal text-white font-bold'}>Invite Friends</button>
							
						</div>

				</div>

			</div>

		);

}

export default SideBar;