import React from 'react';
import { XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries} from 'react-vis';


const FXCentre = (props) => {

		const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];

	return (
		<div>
		<div className={"mt-4 pl-8 flex justify-start px-4 text-grey"}>
						<div className={"cursor-pointer flex items-center mr-10"}>
							<img src="/assets/swap.svg" alt="exchange icon" />
							<span className={"ml-3"}>{"Balance Exchange"}</span>
						</div>
						<div className={"cursor-pointer items-center flex mr-10"}>
							<img src="/assets/dollarIcon.svg" alt="dollar icon" />
							<span className={"ml-3"}>{"Forward Rate"}</span>
						</div>
						<div className={"cursor-pointer items-center flex "}>
							<img src="/assets/sendAlt.svg" alt="sendAlt icon" />
							<span className={"ml-3"}>{"Convert & Send"}</span>
						</div>
						
		</div>
				
				<div className={"mt-4 flex justify-start"}>

					<div className={"flex flex-col mr-6"}>

							<div>{"Amount"}</div>
							<div className={"my-2 flex p-2 border-solid border-2 bg-searchBG border-greyBorder focus-within:border-teal rounded-lg items-center"}>
								{/*<div className={"mr-4"}> <img src="./assets/search.svg" alt="search icon" /></div>*/}
								<div className={"grow"}>
									<input className={"mr-8 rounded-lg bg-searchBG border-none outline-0"} placeholder={"$0.00"} type="text" name="search" id="search" />
								</div>
							</div>
							<div className={"text-grey"}><span>{"Exchange rate:"}</span><span className={"font-bold"}>{" $1 = N20"}</span></div>

					</div>

					<div className={"flex flex-col mr-6"}>

							<div>{"From"}</div>
							<div className={"my-2 flex p-2 border-solid border-2 bg-searchBG border-greyBorder focus-within:border-teal rounded-lg items-center"}>
								<div className={"mr-4"}> <img src="./assets/usFlagAlt.svg" alt="usFlagAlt icon" /></div>
								<div className={"grow"}>
									<input className={"mr-8 rounded-lg bg-searchBG border-none outline-0 text-s font-bold"} placeholder={"USD - US Dollar"} type="text" name="search" id="search" />
								</div>
							</div>
							<div className={"text-grey"}><span>{"You send:"}</span><span className={"font-bold"}>{" $0.00"}</span></div>

					</div>

					<div className={"flex flex-col justify-end mr-6"}>
						<svg className={"w-6"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.83632 16.8396L17.4541 16.8396" stroke="#55676B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M7.93262 20.9173L3.83595 16.8395L7.93262 12.7617" stroke="#55676B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M20.167 6.91115L6.54921 6.91115" stroke="#55676B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M16.0713 2.8335L20.168 6.91127L16.0713 10.9891" stroke="#55676B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

					</div>

					<div className={"flex flex-col"}>

							<div>{"To"}</div>
							<div className={"my-2 flex p-2 border-solid border-2 bg-searchBG border-greyBorder focus-within:border-teal rounded-lg items-center"}>
								<div className={"mr-4"}> <img src="./assets/EURFlagAlt.svg" alt="EURFlag icon" /></div>
								<input className={"mr-8 rounded-lg bg-searchBG border-none outline-0"} placeholder={"EUR - Euro"} type="select" name="search" id="search" />
									<svg className={"w-2"} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M1.5 1.75L6 6.25L10.5 1.75" stroke="#55676B" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
									</svg>
								<div className={"grow"}>

								</div>
							</div>
							<div className={"text-grey"}><span>{"They recieve:"}</span><span className={"font-bold"}>{" €0.00"}</span></div>

					</div>

				</div>

				<div className={"flex justify-end items-center mt-8"}>
					<div className={"flex mr-8"}>
						<span className={"text-grey mr-2"}>{"Fees:"}</span>
						<span className={"font-bold text-grey"}>{"$0.00"}</span>
					</div>
					<button className={"active:bg-bright-teal bg-buttonActive rounded-lg p-3"}>
						<div className={"flex items-center"}>
							<div className={"mr-2"}>
								<svg className={"w-4"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M4.93337 4.21344L10.5934 2.32677C13.1334 1.4801 14.5134 2.86677 13.6734 5.40677L11.7867 11.0668C10.52 14.8734 8.44004 14.8734 7.17337 11.0668L6.61337 9.38677L4.93337 8.82677C1.1267 7.5601 1.1267 5.48677 4.93337 4.21344Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
									<path d="M6.73999 9.10036L9.12666 6.70703" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>

							</div>
							<div className={"text-white font-bold"}>{"Convert & Send"}</div>
						</div>
					</button>
				</div>


				<div className={"mt-4 flex justify-start px-4 text-grey"}>
					
						<span className={"cursor-pointer border-b-2 border-teal mr-8"}>{"Live Rates"}</span>
						<div className={"cursor-pointer mr-8"}>{"Other Companies Rates"}</div>
						
				</div>

				<div className={'text-grey mt-8'}>{"Rates are updated every 5 seconds"}</div>

				<div className={"grid grid-cols-4 mt-5"}>
					<div className={"border-b border-silver font-bold pb-2"}>{"Currency"}</div>
					<div className={"border-b border-silver font-bold pb-2"}>{"Rate"}</div>
					<div className={"border-b border-silver font-bold pb-2"}>{"Change(24hrs)"}</div>
					<div className={"border-b border-silver font-bold pb-2"}>{"Chart(24hrs)"}</div>

					<div className={"mt-4 flex items-center text-grey"}><img className={'mr-2 w-8'} src="/assets/USDFlag.svg" alt="us Flag" />{"USD US Dollar"}</div>
					<div className={"mt-4 flex items-center"}> {"1.605923"}</div>
					<div className={"mt-4 flex items-center text-green"}>{"+0.53%"}</div>
					<div className={"mt-4 flex items-center"}><svg width="110" height="42" viewBox="0 0 110 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 30.4033C0.5 30.4033 9.59152 28.6163 10.2409 30.4033C10.8903 32.1902 15.6525 33.2623 15.6525 33.2623C15.6525 33.2623 21.7135 30.4033 24.3111 29.5098C26.9087 28.6163 30.1557 30.4033 30.1557 30.4033C30.1557 30.4033 38.1649 25.2212 38.5978 27.5442C39.0307 29.8672 47.6893 27.5442 47.6893 27.5442C47.6893 27.5442 51.8021 23.0769 54.3997 24.149C56.9973 25.2212 58.9455 21.6474 58.9455 21.6474H64.3571C64.3571 21.6474 62.6254 20.0391 64.3571 17.8948C66.0888 15.7505 69.1193 13.7849 69.1193 13.7849H73.2321L77.5614 15.3931L80.159 12.3554C79.0045 11.9384 77.3883 10.8186 80.159 9.67501C82.9298 8.53138 85.3542 7.53071 86.22 7.17332C86.4365 7.7094 87.1292 8.4599 88.1682 7.17332C89.2072 5.88674 91.776 3.18254 92.9304 1.99126C92.9304 1.99126 92.9304 1.99133 94.2292 1.0978C95.528 0.204279 106.639 5.62129 109.5 9.67484" stroke="#22C55E" stroke-width="1.11392"/>
<path d="M10.2409 30.4033C10.8903 32.1902 15.6525 33.2623 15.6525 33.2623C15.6525 33.2623 21.7135 30.4033 24.3111 29.5098C26.9087 28.6163 30.1557 30.4033 30.1557 30.4033C30.1557 30.4033 38.1649 25.2212 38.5978 27.5442C39.0307 29.8672 47.6893 27.5442 47.6893 27.5442C47.6893 27.5442 51.8021 23.0769 54.3997 24.149C56.9973 25.2212 58.9455 21.6474 58.9455 21.6474H64.3571C64.3571 21.6474 62.6254 20.0391 64.3571 17.8948C66.0888 15.7505 69.1193 13.7849 69.1193 13.7849H73.2321L77.5614 15.3931L80.159 12.3554C79.0045 11.9384 77.3883 10.8186 80.159 9.67501L86.22 7.17332C86.4365 7.7094 87.1292 8.4599 88.1682 7.17332C89.2072 5.88674 91.7759 3.18254 92.9304 1.99126C92.9304 1.99126 92.9304 1.99133 94.2292 1.0978C95.528 0.20428 106.639 5.62129 109.5 9.67483V42H0.5V30.4033C0.5 30.4033 9.59152 28.6163 10.2409 30.4033Z" fill="url(#paint0_linear_1042_1658)"/>
<defs>
<linearGradient id="paint0_linear_1042_1658" x1="51.0509" y1="-15.2061" x2="51.1739" y2="42.0001" gradientUnits="userSpaceOnUse">
<stop stop-color="#2FA2B9" stop-opacity="0.12"/>
<stop offset="1" stop-color="#2FA2B9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
</div>

					<div className={"mt-4 flex items-center text-grey"}><img className={'mr-2 w-8'} src="/assets/EURFlag.svg" alt="us Flag" />{"USD US Dollar"}</div>
					<div className={"mt-4 flex items-center"}> {"1.605923"}</div>
					<div className={"mt-4 flex items-center text-red"}>{"-1.03%"}</div>
					<div className={"mt-4 flex items-center"}><svg width="110" height="42" viewBox="0 0 110 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M109.5 30.4033C109.5 30.4033 100.408 28.6163 99.7591 30.4033C99.1097 32.1902 94.3475 33.2623 94.3475 33.2623C94.3475 33.2623 88.2865 30.4033 85.6889 29.5098C83.0913 28.6163 79.8443 30.4033 79.8443 30.4033C79.8443 30.4033 71.8351 25.2212 71.4022 27.5442C70.9693 29.8672 62.3107 27.5442 62.3107 27.5442C62.3107 27.5442 58.1979 23.0769 55.6003 24.149C53.0027 25.2212 51.0545 21.6474 51.0545 21.6474H45.6429C45.6429 21.6474 47.3746 20.0391 45.6429 17.8948C43.9112 15.7505 40.8807 13.7849 40.8807 13.7849H36.7679L32.4386 15.3931L29.841 12.3554C30.9955 11.9384 32.6117 10.8186 29.841 9.67501C27.0702 8.53138 24.6458 7.53071 23.78 7.17332C23.5635 7.7094 22.8708 8.4599 21.8318 7.17332C20.7928 5.88674 18.224 3.18254 17.0696 1.99126C17.0696 1.99126 17.0696 1.99133 15.7708 1.0978C14.472 0.204279 3.3611 5.62129 0.499999 9.67484" stroke="#DC2626" stroke-width="1.11392"/>
<path d="M99.7591 30.4033C99.1097 32.1902 94.3475 33.2623 94.3475 33.2623C94.3475 33.2623 88.2865 30.4033 85.6889 29.5098C83.0913 28.6163 79.8443 30.4033 79.8443 30.4033C79.8443 30.4033 71.8351 25.2212 71.4022 27.5442C70.9693 29.8672 62.3107 27.5442 62.3107 27.5442C62.3107 27.5442 58.1979 23.0769 55.6003 24.149C53.0027 25.2212 51.0545 21.6474 51.0545 21.6474H45.6429C45.6429 21.6474 47.3746 20.0391 45.6429 17.8948C43.9112 15.7505 40.8807 13.7849 40.8807 13.7849H36.7679L32.4386 15.3931L29.841 12.3554C30.9955 11.9384 32.6117 10.8186 29.841 9.67501L23.78 7.17332C23.5635 7.7094 22.8708 8.4599 21.8318 7.17332C20.7928 5.88674 18.2241 3.18254 17.0696 1.99126C17.0696 1.99126 17.0696 1.99133 15.7708 1.0978C14.472 0.20428 3.3611 5.62129 0.5 9.67483V42H109.5V30.4033C109.5 30.4033 100.408 28.6163 99.7591 30.4033Z" fill="url(#paint0_linear_1042_1126)"/>
<defs>
<linearGradient id="paint0_linear_1042_1126" x1="58.9491" y1="-15.2061" x2="58.8261" y2="42.0001" gradientUnits="userSpaceOnUse">
<stop stop-color="#EF4444" stop-opacity="0.12"/>
<stop offset="1" stop-color="#EF4444" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
</div>

					<div className={"mt-4 flex items-center text-grey"}><img className={'mr-2 w-8'} src="/assets/GBPFlag.svg" alt="us Flag" />{"USD US Dollar"}</div>
					<div className={"mt-4 flex items-center"}> {"1.605923"}</div>
					<div className={"mt-4 flex items-center text-red"}>{"-0.25%"}</div>
					<div className={"mt-4 flex items-center"}><svg width="110" height="42" viewBox="0 0 110 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M109.5 30.4033C109.5 30.4033 100.408 28.6163 99.7591 30.4033C99.1097 32.1902 94.3475 33.2623 94.3475 33.2623C94.3475 33.2623 88.2865 30.4033 85.6889 29.5098C83.0913 28.6163 79.8443 30.4033 79.8443 30.4033C79.8443 30.4033 71.8351 25.2212 71.4022 27.5442C70.9693 29.8672 62.3107 27.5442 62.3107 27.5442C62.3107 27.5442 58.1979 23.0769 55.6003 24.149C53.0027 25.2212 51.0545 21.6474 51.0545 21.6474H45.6429C45.6429 21.6474 47.3746 20.0391 45.6429 17.8948C43.9112 15.7505 40.8807 13.7849 40.8807 13.7849H36.7679L32.4386 15.3931L29.841 12.3554C30.9955 11.9384 32.6117 10.8186 29.841 9.67501C27.0702 8.53138 24.6458 7.53071 23.78 7.17332C23.5635 7.7094 22.8708 8.4599 21.8318 7.17332C20.7928 5.88674 18.224 3.18254 17.0696 1.99126C17.0696 1.99126 17.0696 1.99133 15.7708 1.0978C14.472 0.204279 3.3611 5.62129 0.499999 9.67484" stroke="#DC2626" stroke-width="1.11392"/>
<path d="M99.7591 30.4033C99.1097 32.1902 94.3475 33.2623 94.3475 33.2623C94.3475 33.2623 88.2865 30.4033 85.6889 29.5098C83.0913 28.6163 79.8443 30.4033 79.8443 30.4033C79.8443 30.4033 71.8351 25.2212 71.4022 27.5442C70.9693 29.8672 62.3107 27.5442 62.3107 27.5442C62.3107 27.5442 58.1979 23.0769 55.6003 24.149C53.0027 25.2212 51.0545 21.6474 51.0545 21.6474H45.6429C45.6429 21.6474 47.3746 20.0391 45.6429 17.8948C43.9112 15.7505 40.8807 13.7849 40.8807 13.7849H36.7679L32.4386 15.3931L29.841 12.3554C30.9955 11.9384 32.6117 10.8186 29.841 9.67501L23.78 7.17332C23.5635 7.7094 22.8708 8.4599 21.8318 7.17332C20.7928 5.88674 18.2241 3.18254 17.0696 1.99126C17.0696 1.99126 17.0696 1.99133 15.7708 1.0978C14.472 0.20428 3.3611 5.62129 0.5 9.67483V42H109.5V30.4033C109.5 30.4033 100.408 28.6163 99.7591 30.4033Z" fill="url(#paint0_linear_1042_1247)"/>
<defs>
<linearGradient id="paint0_linear_1042_1247" x1="58.9491" y1="-15.2061" x2="58.8261" y2="42.0001" gradientUnits="userSpaceOnUse">
<stop stop-color="#EF4444" stop-opacity="0.12"/>
<stop offset="1" stop-color="#EF4444" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
</div>

					<div className={"mt-4 flex items-center text-grey"}><img className={'mr-2 w-8'} src="/assets/EURFlag.svg" alt="us Flag" />{"USD US Dollar"}</div>
					<div className={"mt-4 flex items-center"}> {"1.605923"}</div>
					<div className={"mt-4 flex items-center text-green"}>{"+0.84%"}</div>
					<div className={"mt-4 flex items-center"}><svg width="110" height="42" viewBox="0 0 110 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 30.4033C0.5 30.4033 9.59152 28.6163 10.2409 30.4033C10.8903 32.1902 15.6525 33.2623 15.6525 33.2623C15.6525 33.2623 21.7135 30.4033 24.3111 29.5098C26.9087 28.6163 30.1557 30.4033 30.1557 30.4033C30.1557 30.4033 38.1649 25.2212 38.5978 27.5442C39.0307 29.8672 47.6893 27.5442 47.6893 27.5442C47.6893 27.5442 51.8021 23.0769 54.3997 24.149C56.9973 25.2212 58.9455 21.6474 58.9455 21.6474H64.3571C64.3571 21.6474 62.6254 20.0391 64.3571 17.8948C66.0888 15.7505 69.1193 13.7849 69.1193 13.7849H73.2321L77.5614 15.3931L80.159 12.3554C79.0045 11.9384 77.3883 10.8186 80.159 9.67501C82.9298 8.53138 85.3542 7.53071 86.22 7.17332C86.4365 7.7094 87.1292 8.4599 88.1682 7.17332C89.2072 5.88674 91.776 3.18254 92.9304 1.99126C92.9304 1.99126 92.9304 1.99133 94.2292 1.0978C95.528 0.204279 106.639 5.62129 109.5 9.67484" stroke="#22C55E" stroke-width="1.11392"/>
<path d="M10.2409 30.4033C10.8903 32.1902 15.6525 33.2623 15.6525 33.2623C15.6525 33.2623 21.7135 30.4033 24.3111 29.5098C26.9087 28.6163 30.1557 30.4033 30.1557 30.4033C30.1557 30.4033 38.1649 25.2212 38.5978 27.5442C39.0307 29.8672 47.6893 27.5442 47.6893 27.5442C47.6893 27.5442 51.8021 23.0769 54.3997 24.149C56.9973 25.2212 58.9455 21.6474 58.9455 21.6474H64.3571C64.3571 21.6474 62.6254 20.0391 64.3571 17.8948C66.0888 15.7505 69.1193 13.7849 69.1193 13.7849H73.2321L77.5614 15.3931L80.159 12.3554C79.0045 11.9384 77.3883 10.8186 80.159 9.67501L86.22 7.17332C86.4365 7.7094 87.1292 8.4599 88.1682 7.17332C89.2072 5.88674 91.7759 3.18254 92.9304 1.99126C92.9304 1.99126 92.9304 1.99133 94.2292 1.0978C95.528 0.20428 106.639 5.62129 109.5 9.67483V42H0.5V30.4033C0.5 30.4033 9.59152 28.6163 10.2409 30.4033Z" fill="url(#paint0_linear_1042_808)"/>
<defs>
<linearGradient id="paint0_linear_1042_808" x1="51.0509" y1="-15.2061" x2="51.1739" y2="42.0001" gradientUnits="userSpaceOnUse">
<stop stop-color="#2FA2B9" stop-opacity="0.12"/>
<stop offset="1" stop-color="#2FA2B9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
</div>

					<div className={"mt-4 flex items-center text-grey"}><img className={'mr-2 w-8'} src="/assets/EURFlag.svg" alt="eur Flag" />{"USD US Dollar"}</div>
					<div className={"mt-4 flex items-center"}> {"1.605923"}</div>
					<div className={"mt-4 flex items-center text-green"}>{"+2.44%"}</div>
					<div className={"mt-4 flex items-center"}><svg width="110" height="42" viewBox="0 0 110 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.5 30.4033C0.5 30.4033 9.59152 28.6163 10.2409 30.4033C10.8903 32.1902 15.6525 33.2623 15.6525 33.2623C15.6525 33.2623 21.7135 30.4033 24.3111 29.5098C26.9087 28.6163 30.1557 30.4033 30.1557 30.4033C30.1557 30.4033 38.1649 25.2212 38.5978 27.5442C39.0307 29.8672 47.6893 27.5442 47.6893 27.5442C47.6893 27.5442 51.8021 23.0769 54.3997 24.149C56.9973 25.2212 58.9455 21.6474 58.9455 21.6474H64.3571C64.3571 21.6474 62.6254 20.0391 64.3571 17.8948C66.0888 15.7505 69.1193 13.7849 69.1193 13.7849H73.2321L77.5614 15.3931L80.159 12.3554C79.0045 11.9384 77.3883 10.8186 80.159 9.67501C82.9298 8.53138 85.3542 7.53071 86.22 7.17332C86.4365 7.7094 87.1292 8.4599 88.1682 7.17332C89.2072 5.88674 91.776 3.18254 92.9304 1.99126C92.9304 1.99126 92.9304 1.99133 94.2292 1.0978C95.528 0.204279 106.639 5.62129 109.5 9.67484" stroke="#22C55E" stroke-width="1.11392"/>
<path d="M10.2409 30.4033C10.8903 32.1902 15.6525 33.2623 15.6525 33.2623C15.6525 33.2623 21.7135 30.4033 24.3111 29.5098C26.9087 28.6163 30.1557 30.4033 30.1557 30.4033C30.1557 30.4033 38.1649 25.2212 38.5978 27.5442C39.0307 29.8672 47.6893 27.5442 47.6893 27.5442C47.6893 27.5442 51.8021 23.0769 54.3997 24.149C56.9973 25.2212 58.9455 21.6474 58.9455 21.6474H64.3571C64.3571 21.6474 62.6254 20.0391 64.3571 17.8948C66.0888 15.7505 69.1193 13.7849 69.1193 13.7849H73.2321L77.5614 15.3931L80.159 12.3554C79.0045 11.9384 77.3883 10.8186 80.159 9.67501L86.22 7.17332C86.4365 7.7094 87.1292 8.4599 88.1682 7.17332C89.2072 5.88674 91.7759 3.18254 92.9304 1.99126C92.9304 1.99126 92.9304 1.99133 94.2292 1.0978C95.528 0.20428 106.639 5.62129 109.5 9.67483V42H0.5V30.4033C0.5 30.4033 9.59152 28.6163 10.2409 30.4033Z" fill="url(#paint0_linear_1042_781)"/>
<defs>
<linearGradient id="paint0_linear_1042_781" x1="51.0509" y1="-15.2061" x2="51.1739" y2="42.0001" gradientUnits="userSpaceOnUse">
<stop stop-color="#2FA2B9" stop-opacity="0.12"/>
<stop offset="1" stop-color="#2FA2B9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
</div>


					<div className={"cursor-pointer mt-8 flex items-center text-buttonActive font-bold"}> 
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6 12H18" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							<path d="M12 18V6" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

					 <span>{"Add Currency"}</span></div>
					<div className={"mt-4 flex items-center text-green"}></div>
					<div className={"mt-4 flex items-center"}></div>





				</div>





			




		</div>
		);
}

export default FXCentre;

