
import React from 'react';


const Bcard = (props) => { return (<div className={"w-full"}>

							<div className={"border-2 border-greyBorder rounded-lg flex items-center justify-between p-4"}>
								<div className={"flex flex-col w-full"}>
									<div className={"flex justify-between"}>
										<div className={"flex items-center"}>
											<div className={"bg-bgGrey rounded-full h-8 w-8 flex items-center justify-center mr-2"}>{"€"}</div>
											<div className={"text-grey text-sm"}>{"Cameron Williamson"}</div>
										</div>
										<div className={"hover:cursor-pointer"}><img src="/assets/menuIcon.svg" alt="menu icon" /></div>
									</div>
									<div className={"flex flex-col mt-4"}>

										<div className={"font-bold text-sm "}>{"PL9XXXXXXXXXXXX75"}</div>
										<div className={"flex justify-start items-center"}>
											<div className={"font-bold mr-4  text-sm"}>{"Cameron Williamson"}</div>
											<div className={"text-grey text-xs"}>{"EUR"}</div>
										</div>

									</div>
									<div className={"flex justify-between mt-6"}>
										<div className={"flex items-center hover:cursor-pointer"}>
											<svg className={"mr-1 w-4"} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M4.93337 4.21344L10.5934 2.32677C13.1334 1.4801 14.5134 2.86677 13.6734 5.40677L11.7867 11.0668C10.52 14.8734 8.44004 14.8734 7.17337 11.0668L6.61337 9.38677L4.93337 8.82677C1.1267 7.5601 1.1267 5.48677 4.93337 4.21344Z" stroke="grey" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
												<path d="M6.73999 9.10036L9.12666 6.70703" stroke="#017189" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
											<span className={"text-grey text-xs"}>{"Pay"}</span>
										</div>
										<div className={"flex items-center hover:cursor-pointer"}>
											<svg className={'mr-1 w-4 fill-transparent'} viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
												<path className={'stroke-grey'} d="M6.10667 7.78833C6.04001 7.78167 5.96001 7.78167 5.88668 7.78833C4.30001 7.735 3.04001 6.435 3.04001 4.835C3.04001 3.20167 4.36001 1.875 6.00001 1.875C7.63334 1.875 8.96001 3.20167 8.96001 4.835C8.95334 6.435 7.69334 7.735 6.10667 7.78833Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
												<path className={'stroke-grey'} d="M10.94 3.20703C12.2333 3.20703 13.2733 4.2537 13.2733 5.54036C13.2733 6.80036 12.2733 7.82703 11.0267 7.8737C10.9733 7.86703 10.9133 7.86703 10.8533 7.8737" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
												<path className={'stroke-grey'} d="M2.77332 10.247C1.15999 11.327 1.15999 13.087 2.77332 14.1604C4.60666 15.387 7.61332 15.387 9.44666 14.1604C11.06 13.0804 11.06 11.3204 9.44666 10.247C7.61999 9.02703 4.61332 9.02703 2.77332 10.247Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
												<path className={'stroke-grey'} d="M12.2267 13.875C12.7067 13.775 13.16 13.5817 13.5333 13.295C14.5733 12.515 14.5733 11.2283 13.5333 10.4483C13.1667 10.1683 12.72 9.98167 12.2467 9.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
											</svg>
											<span className={"text-grey text-xs"}>{"Set as default"}</span>
										</div>
										<div className={"flex items-center hover:cursor-pointer"}>
											<img className={'mr-1 w-4'} src="/assets/trash.svg" alt="trash icon" />
											<span className={"text-red text-xs"}>{"Remove"}</span>
										</div>
									</div>
								</div>

							</div>
						</div>); }


export default Bcard;
