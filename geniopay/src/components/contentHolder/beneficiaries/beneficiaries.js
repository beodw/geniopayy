import React from 'react';

import Bcard from "./bCard.js";

const Beneficiaries = (props) => {

	return (
		<div>
				<div className={"flex justify-between items-center"}>
					<h1 className={"font-bold"}>{'Your Beneficiary (s)'}</h1>
					<button className={"active:bg-bright-teal bg-buttonActive rounded-lg p-3"}>
						<div className={"flex"}>
							<div><img src="/assets/plusIcon.svg" alt="plus icon" /></div>
							<div className={"text-white font-bold"}>{"Add New Beneficiary"}</div>
						</div>
					</button>
				</div>


				<div className={"mt-4 grid grid-cols-1 md:grid-cols-5 px-4 text-grey"}>
						<div className={"cursor-pointer mr-8"}>{"Own Accounts"}</div>
						<span className={"cursor-pointer border-b-2 border-teal mr-8"}>{"Third Party accounts"}</span>
						<span className={"cursor-pointer mr-8"}>{"Borderless Recipient"}</span>
						<span className={"cursor-pointer mr-8"}>{"Mobile Money Recipients"}</span>
				</div>

				<div className={"mt-8 grid grid-cols-1 md:grid-cols-2 justify-between items-center"}>

					<div className={"font-bold"}>{"53  Beneficiaries"}</div>
					<div className={"flex justify-end"}>
						<div className={"flex p-2 border-solid border bg-searchBG border-greyBorder focus-within:border-teal rounded-2xl items-center"}>
							<div className={"mr-4"}> <img src="/assets/search.svg" alt="search icon" /></div>
							<div className={"grow"}>
								<input className={"mr-8 bg-searchBG rounded-lg border-none outline-0"} placeholder={"Search"} type="text" name="search" id="search" />
							</div>
						</div>

						<div className={"ml-4 cursor-pointer flex items-center"}>
							<span className={"mr-2 text-xs md:text-sm"}>{"Sort by: "}</span>
							<span className={"text-buttonActive mr-2"}>{"All"}</span>

							<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path className={"stroke-buttonActive"} d="M1.5 1.75L6 6.25L10.5 1.75" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>

						</div>

					</div>

				</div>

				<div className={"w-full mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"}>

				<Bcard />
				<Bcard />
				<Bcard />
				<Bcard />
				<Bcard />
				<Bcard />
				<Bcard />
				<Bcard />
				<Bcard />

{/*
					<div className={"mt-4 grid grid-cols-4 gap-1"}>

						<div className={"text-grey"}>{"Ledger Balance"}</div>
						<div className="">{"2,000,000.50"}</div>
						<div className="">{"Total Incoming"}</div>
						<div className="">{"€2,000,000.50"}</div>

						<div className={"text-grey"}>{"Blocked Balance"}</div>
						<div className="">{"€0.00"}</div>
						<div className="">{"Total Outgoing"}</div>
						<div className="">{"€5,000,000.50"}</div>

					</div>

					<div className={"flex justify-center mt-4"}>
						<div className={"cursor-pointer hover:bg-highlighted border-teal border rounded p-4 mr-2"}>
								<div className={"flex"}>
									<img src="/assets/sendIcon.svg" alt="send icon" className={"mr-2"} />
									<span className={"text-buttonActive font-bold"}>{"Payment"}</span>
								</div>
						</div>

						<div className={"cursor-pointer hover:bg-highlighted border-teal border rounded p-4 mr-2"}>
								<div className={"flex"}>
									<img src="/assets/downArrow.svg" alt="down arrow icon" className={"mr-2"} />
									<span className={"text-buttonActive font-bold"}>{"Pay In"}</span>
								</div>
						</div>

						<div className={"cursor-pointer hover:bg-highlighted border-teal border rounded p-4"}>
								<div className={"flex"}>
									<img src="/assets/exchangeArrows.svg" alt="exchange icon" className={"mr-2"} />
									<span className={"text-buttonActive font-bold"}>{"Exchange"}</span>
								</div>
						</div>
					</div>

					<div className={"cursor-pointer flex items-center mt-4"}>
						<span className={"text-buttonActive mr-2"}>{"More Options"}</span>

						<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className={"stroke-buttonActive"} d="M1.5 1.75L6 6.25L10.5 1.75" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

					</div>

					<div className={"mt-6 flex justify-start px-4 text-grey"}>
						<div className={"cursor-pointer border-b-2 border-teal mr-3 px-2"}>{"Activity"}</div>
						<span className={"cursor-pointer mr-3"}>{"Transactions"}</span>
						<span className={"cursor-pointer"}>{"Invoices"}</span>
					</div>

					<div className={"cursor-pointer flex items-center justify-end mt-4"}>
						<span className={"text-buttonActive mr-2"}>{"Month"}</span>

						<svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className={"stroke-buttonActive"} d="M1.5 1.75L6 6.25L10.5 1.75" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

					</div>

					<div className={"mt-6 block"}>
					<div className={'flex flex-row-reverse'}>

					<div>
						<div className={"flex"}>
							<div className={"ml-8"}>
								<img src="/assets/payOut.svg" alt="pay out icon" />
							</div>
							<div className={"flex flex-col"}>
							<div className={"text-xs text-grey"}>{"Pay Out"}</div>
							<div className={"text-sm font-bold"}>{"$72,600.00"}</div>
							</div>
						</div>
					</div>
					<div>
						<div className={"flex"}>
								<div className={"ml-8"}>
									<img src="/assets/payIn.svg" alt="pay in icon" />
								</div>
								<div className={"flex flex-col"}>
								<div className={"text-xs text-grey"}>{"Pay In"}</div>
								<div className={"text-sm font-bold"}>{"$4,600.00"}</div>
								</div>
							</div>
						</div>	
					<div>
						<div className={"flex"}>
							<div className={"mr-2"}>
								<img src="/assets/totalTransIcon.svg" alt="total transaction icon" />
							</div>
							<div className={"flex flex-col"}>
							<div className={"text-xs text-grey"}>{"Total Transactions"}</div>
							<div className={"text-sm font-bold"}>{"$88,600.00"}</div>
							</div>
						</div>
					</div>

					</div>
				  
			        
				</div>*/}

				{/*</div>*/}

				</div>
		</div>
		);
}

export default Beneficiaries;

