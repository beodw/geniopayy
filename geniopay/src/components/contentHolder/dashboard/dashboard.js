import React from 'react';
import Card from './card.js';

import '../../../../node_modules/react-vis/dist/style.css';
import { XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  LineMarkSeries} from 'react-vis';



const Dashboard = (props) => {

	const data = [
      {x: '0', y: '8'},
      {x: 1, y: '5'},
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

			<div className={"block"}>
				<div className={"block"}>
					<div className={"flex justify-between"}>
						<span className={"font-bold"}>{"Wallet (5)"}</span>
						<button className={"text-buttonActive font-bold text-sm"}>{"View all wallets"}</button>
					</div>

					<div className={"grid grid-cols-12 md:grid-cols-3  gap-4 mt-2"}>
						<Card bgColor={"bg-cardCream"} currency={"USD"} amount={"$10,250.00"} cardName={"Personal account"} />
						<Card bgColor={"bg-cardPink"} currency={"EUR"} amount={"€4,000.53"} cardName={"EUR Wallet"} />
						<Card bgColor={"bg-cardGreen"} currency={"GBP"} amount={"£10,250.00"} cardName={"Personal account"} />
					</div>

					<div className={"mt-2"}>
						<div>
							<div className={"font-bold"}>{"Quick Links"}</div>
							<div className={"text-sm text-grey"}>{"You frequently used actions for easy access."}</div>
						</div>

						<div className={"mt-4 grid grid-cols-3 md:grid-cols-7 gap-2"}>
							<div className={"mr-2 flex flex-col border-solid border border-silver rounded-lg p-4 justify-items-center items-center"}>
								<div><img src="/assets/newWalletIcon.svg" alt="new wallet icon" /></div>
								<div className={"text-center"}>{"Add new Wallet"}</div>
							</div>
							<div className={"mr-2 flex flex-col border-solid border border-silver rounded-lg p-4 justify-items-center items-center"}>
								<div><img src="/assets/newCardIcon.svg" alt="new card icon" /></div>
								<div className={"text-center"}>{"Add new Card"}</div>
							</div>
							<div className={"mr-2 flex flex-col border-solid border border-silver rounded-lg p-4 justify-items-center items-center"}>
								<div><img src="/assets/balanceExchange.svg" alt="balanceExchange icon" /></div>
								<div className={"text-center"}>{"Balance Exchange"}</div>
							</div>
							<div className={"mr-2 flex flex-col border-solid border border-silver rounded-lg p-4 justify-items-center items-center"}>
								<div><img src="/assets/transToAccIcon.svg" alt="trans to acc icon" /></div>
								<div className={"text-center"}>{"Transfer to Account"}</div>
							</div>
							<div className={"mr-2 flex flex-col border-solid border border-silver rounded-lg p-4 justify-items-center items-center"}>
								<div><img src="/assets/genVoucherIcon.svg" alt="Gen vouch icon" /></div>
								<div className={"text-center"}>{"Generate Voucher"}</div>
							</div>
							<div className={"mr-2 flex flex-col border-solid border border-silver rounded-lg p-4 justify-items-center items-center"}>
								<div><img src="/assets/mobileMoney.svg" alt="mobile money icon" /></div>
								<div className={"text-center"}>{"Mobile Money"}</div>
							</div>
							<div className={"flex flex-col border-solid border border-silver rounded-lg p-4 justify-items-center items-center"}>
								<div><img src="/assets/paymentLinkIcon.svg" alt="mobile money icon" /></div>
								<div>{"Payment Link"}</div>
							</div>
						</div>
					</div>
				</div>

				<div className={"mt-4"}>
					<div className={"flex justify-between"}>
						<div className={"flex items-center"}>
							<span className={"mr-4 font-bold"}>{"Activity"}</span>
							<button className={"flex items-center"}>
								<span className={"text-buttonActive text-sm mr-2"}>{"Month"}</span>
								<svg className={"w-3 stroke-buttonActive"} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.5 1.75L6 6.25L10.5 1.75" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</button>
						</div>
						<button className={"text-buttonActive font-bold text-sm"}>{"View Transaction History"}</button>
					</div>
					
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
				    {/*<XYPlot width={800} height={400}>
					      <VerticalGridLines style={ {strokeDasharray:"5,5",} } />
					      <XAxis />
					      <YAxis />
					      <LineMarkSeries
					        className="linemark-series-example-2"
					        curve={'curveMonotoneX'}
					        data={data}
					      />

				    </XYPlot>*/}
				    <svg className={'w-full'} viewBox="0 0 940 329" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.42158 27.415V25.105C5.48358 25.049 4.60158 24.881 3.77558 24.601C2.94958 24.307 2.22858 23.901 1.61258 23.383L2.32658 21.661C2.99858 22.193 3.71258 22.592 4.46858 22.858C5.23858 23.124 6.10658 23.257 7.07258 23.257C8.17858 23.257 8.99758 23.047 9.52958 22.627C10.0756 22.207 10.3486 21.668 10.3486 21.01C10.3486 20.45 10.1596 20.009 9.78158 19.687C9.40358 19.351 8.76658 19.085 7.87058 18.889L5.70758 18.427C4.44758 18.147 3.50258 17.692 2.87258 17.062C2.24258 16.418 1.92758 15.564 1.92758 14.5C1.92758 13.702 2.10958 12.995 2.47358 12.379C2.85158 11.763 3.37658 11.259 4.04858 10.867C4.72058 10.475 5.51158 10.23 6.42158 10.132V7.78H8.14358V10.132C8.87158 10.202 9.57858 10.384 10.2646 10.678C10.9646 10.958 11.5666 11.35 12.0706 11.854L11.3776 13.513C10.8316 12.981 10.2156 12.589 9.52958 12.337C8.84358 12.071 8.08758 11.938 7.26158 11.938C6.29558 11.938 5.51858 12.169 4.93058 12.631C4.35658 13.093 4.06958 13.695 4.06958 14.437C4.06958 15.011 4.25158 15.466 4.61558 15.802C4.97958 16.138 5.56058 16.397 6.35858 16.579L8.52158 17.041C9.86558 17.321 10.8666 17.776 11.5246 18.406C12.1826 19.022 12.5116 19.841 12.5116 20.863C12.5116 22.025 12.1056 22.977 11.2936 23.719C10.4816 24.447 9.43158 24.888 8.14358 25.042V27.415H6.42158ZM21.0084 25V21.997H14.3514V20.38L21.3864 10.195H23.1714V20.17H25.3344V21.997H23.1714V25H21.0084ZM21.0084 20.17V13.597L16.5144 20.17H21.0084ZM27.4472 25V10.195H29.5682V19.225H29.6102L34.0622 14.752H36.6872L31.7732 19.687L37.0652 25H34.4192L29.6102 20.317H29.5682V25H27.4472Z" fill="#2B4146"/>
<path d="M6.42158 105.517V103.207C5.48358 103.151 4.60158 102.983 3.77558 102.703C2.94958 102.409 2.22858 102.003 1.61258 101.485L2.32658 99.7626C2.99858 100.295 3.71258 100.694 4.46858 100.96C5.23858 101.226 6.10658 101.359 7.07258 101.359C8.17858 101.359 8.99758 101.149 9.52958 100.729C10.0756 100.309 10.3486 99.7696 10.3486 99.1116C10.3486 98.5516 10.1596 98.1106 9.78158 97.7886C9.40358 97.4526 8.76658 97.1866 7.87058 96.9906L5.70758 96.5286C4.44758 96.2486 3.50258 95.7936 2.87258 95.1636C2.24258 94.5196 1.92758 93.6656 1.92758 92.6016C1.92758 91.8036 2.10958 91.0966 2.47358 90.4806C2.85158 89.8646 3.37658 89.3606 4.04858 88.9686C4.72058 88.5766 5.51158 88.3316 6.42158 88.2336V85.8816H8.14358V88.2336C8.87158 88.3036 9.57858 88.4856 10.2646 88.7796C10.9646 89.0596 11.5666 89.4516 12.0706 89.9556L11.3776 91.6146C10.8316 91.0826 10.2156 90.6906 9.52958 90.4386C8.84358 90.1726 8.08758 90.0396 7.26158 90.0396C6.29558 90.0396 5.51858 90.2706 4.93058 90.7326C4.35658 91.1946 4.06958 91.7966 4.06958 92.5386C4.06958 93.1126 4.25158 93.5676 4.61558 93.9036C4.97958 94.2396 5.56058 94.4986 6.35858 94.6806L8.52158 95.1426C9.86558 95.4226 10.8666 95.8776 11.5246 96.5076C12.1826 97.1236 12.5116 97.9426 12.5116 98.9646C12.5116 100.127 12.1056 101.079 11.2936 101.821C10.4816 102.549 9.43158 102.99 8.14358 103.144V105.517H6.42158ZM19.4334 103.291C18.4394 103.291 17.4944 103.144 16.5984 102.85C15.7024 102.542 14.9534 102.115 14.3514 101.569L15.1074 99.8886C15.7654 100.421 16.4444 100.813 17.1444 101.065C17.8444 101.317 18.5864 101.443 19.3704 101.443C20.3784 101.443 21.1414 101.226 21.6594 100.792C22.1914 100.358 22.4574 99.7346 22.4574 98.9226C22.4574 98.1106 22.1914 97.5086 21.6594 97.1166C21.1414 96.7246 20.3854 96.5286 19.3914 96.5286H17.1024V94.7016H19.1814C20.0634 94.7016 20.7564 94.4776 21.2604 94.0296C21.7784 93.5816 22.0374 92.9656 22.0374 92.1816C22.0374 91.4676 21.7994 90.9216 21.3234 90.5436C20.8474 90.1516 20.1684 89.9556 19.2864 89.9556C17.7884 89.9556 16.4794 90.4946 15.3594 91.5726L14.6034 89.9136C15.1774 89.3396 15.8914 88.8986 16.7454 88.5906C17.6134 88.2686 18.5164 88.1076 19.4544 88.1076C20.9384 88.1076 22.0934 88.4506 22.9194 89.1366C23.7454 89.8086 24.1584 90.7466 24.1584 91.9506C24.1584 92.7626 23.9484 93.4766 23.5284 94.0926C23.1224 94.7086 22.5554 95.1566 21.8274 95.4366C22.7094 95.6606 23.3884 96.0946 23.8644 96.7386C24.3404 97.3686 24.5784 98.1456 24.5784 99.0696C24.5784 100.372 24.1164 101.401 23.1924 102.157C22.2824 102.913 21.0294 103.291 19.4334 103.291ZM27.4472 103.102V88.2966H29.5682V97.3266H29.6102L34.0622 92.8536H36.6872L31.7732 97.7886L37.0652 103.102H34.4192L29.6102 98.4186H29.5682V103.102H27.4472Z" fill="#2B4146"/>
<path d="M6.42158 183.616V181.306C5.48358 181.25 4.60158 181.082 3.77558 180.802C2.94958 180.508 2.22858 180.102 1.61258 179.584L2.32658 177.862C2.99858 178.394 3.71258 178.793 4.46858 179.059C5.23858 179.325 6.10658 179.458 7.07258 179.458C8.17858 179.458 8.99758 179.248 9.52958 178.828C10.0756 178.408 10.3486 177.869 10.3486 177.211C10.3486 176.651 10.1596 176.21 9.78158 175.888C9.40358 175.552 8.76658 175.286 7.87058 175.09L5.70758 174.628C4.44758 174.348 3.50258 173.893 2.87258 173.263C2.24258 172.619 1.92758 171.765 1.92758 170.701C1.92758 169.903 2.10958 169.196 2.47358 168.58C2.85158 167.964 3.37658 167.46 4.04858 167.068C4.72058 166.676 5.51158 166.431 6.42158 166.333V163.981H8.14358V166.333C8.87158 166.403 9.57858 166.585 10.2646 166.879C10.9646 167.159 11.5666 167.551 12.0706 168.055L11.3776 169.714C10.8316 169.182 10.2156 168.79 9.52958 168.538C8.84358 168.272 8.08758 168.139 7.26158 168.139C6.29558 168.139 5.51858 168.37 4.93058 168.832C4.35658 169.294 4.06958 169.896 4.06958 170.638C4.06958 171.212 4.25158 171.667 4.61558 172.003C4.97958 172.339 5.56058 172.598 6.35858 172.78L8.52158 173.242C9.86558 173.522 10.8666 173.977 11.5246 174.607C12.1826 175.223 12.5116 176.042 12.5116 177.064C12.5116 178.226 12.1056 179.178 11.2936 179.92C10.4816 180.648 9.43158 181.089 8.14358 181.243V183.616H6.42158ZM15.1494 181.201V179.584L20.0844 174.292C20.7704 173.55 21.2604 172.878 21.5544 172.276C21.8624 171.674 22.0164 171.065 22.0164 170.449C22.0164 168.853 21.0784 168.055 19.2024 168.055C17.7744 168.055 16.4934 168.594 15.3594 169.672L14.5824 168.013C15.1424 167.467 15.8564 167.033 16.7244 166.711C17.5924 166.375 18.4954 166.207 19.4334 166.207C20.9594 166.207 22.1284 166.557 22.9404 167.257C23.7664 167.957 24.1794 168.958 24.1794 170.26C24.1794 171.142 23.9624 172.003 23.5284 172.843C23.1084 173.683 22.4434 174.579 21.5334 175.531L17.8794 179.374H24.7674V181.201H15.1494ZM27.4472 181.201V166.396H29.5682V175.426H29.6102L34.0622 170.953H36.6872L31.7732 175.888L37.0652 181.201H34.4192L29.6102 176.518H29.5682V181.201H27.4472Z" fill="#2B4146"/>
<path d="M6.42158 261.718V259.408C5.48358 259.352 4.60158 259.184 3.77558 258.904C2.94958 258.61 2.22858 258.204 1.61258 257.686L2.32658 255.964C2.99858 256.496 3.71258 256.895 4.46858 257.161C5.23858 257.427 6.10658 257.56 7.07258 257.56C8.17858 257.56 8.99758 257.35 9.52958 256.93C10.0756 256.51 10.3486 255.971 10.3486 255.313C10.3486 254.753 10.1596 254.312 9.78158 253.99C9.40358 253.654 8.76658 253.388 7.87058 253.192L5.70758 252.73C4.44758 252.45 3.50258 251.995 2.87258 251.365C2.24258 250.721 1.92758 249.867 1.92758 248.803C1.92758 248.005 2.10958 247.298 2.47358 246.682C2.85158 246.066 3.37658 245.562 4.04858 245.17C4.72058 244.778 5.51158 244.533 6.42158 244.435V242.083H8.14358V244.435C8.87158 244.505 9.57858 244.687 10.2646 244.981C10.9646 245.261 11.5666 245.653 12.0706 246.157L11.3776 247.816C10.8316 247.284 10.2156 246.892 9.52958 246.64C8.84358 246.374 8.08758 246.241 7.26158 246.241C6.29558 246.241 5.51858 246.472 4.93058 246.934C4.35658 247.396 4.06958 247.998 4.06958 248.74C4.06958 249.314 4.25158 249.769 4.61558 250.105C4.97958 250.441 5.56058 250.7 6.35858 250.882L8.52158 251.344C9.86558 251.624 10.8666 252.079 11.5246 252.709C12.1826 253.325 12.5116 254.144 12.5116 255.166C12.5116 256.328 12.1056 257.28 11.2936 258.022C10.4816 258.75 9.43158 259.191 8.14358 259.345V261.718H6.42158ZM15.8214 259.303V257.476H19.1814V247.018L16.5564 248.656L15.6744 247.039L19.8114 244.498H21.3444V257.476H24.4944V259.303H15.8214Z" fill="#2B4146"/>
<path d="M115.592 319.541L115.424 317.756L116.789 317.672C118.161 317.56 118.847 316.776 118.847 315.32V304.568H121.01V315.32C121.01 316.594 120.681 317.581 120.023 318.281C119.365 318.981 118.392 319.373 117.104 319.457L115.592 319.541ZM127.496 319.562C126.782 319.562 126.145 319.422 125.585 319.142C125.025 318.862 124.577 318.484 124.241 318.008C123.919 317.532 123.758 316.993 123.758 316.391C123.758 315.635 123.947 315.04 124.325 314.606C124.717 314.172 125.354 313.857 126.236 313.661C127.132 313.465 128.336 313.367 129.848 313.367H130.562V312.821C130.562 312.023 130.394 311.449 130.058 311.099C129.722 310.749 129.169 310.574 128.399 310.574C127.811 310.574 127.223 310.665 126.635 310.847C126.047 311.015 125.445 311.288 124.829 311.666L124.178 310.175C124.71 309.797 125.375 309.496 126.173 309.272C126.971 309.048 127.734 308.936 128.462 308.936C129.862 308.936 130.898 309.272 131.57 309.944C132.242 310.602 132.578 311.638 132.578 313.052V319.373H130.583V317.672C130.331 318.26 129.939 318.722 129.407 319.058C128.875 319.394 128.238 319.562 127.496 319.562ZM127.916 318.05C128.672 318.05 129.302 317.784 129.806 317.252C130.31 316.72 130.562 316.048 130.562 315.236V314.669H129.869C128.847 314.669 128.042 314.718 127.454 314.816C126.88 314.914 126.467 315.082 126.215 315.32C125.977 315.544 125.858 315.859 125.858 316.265C125.858 316.797 126.04 317.231 126.404 317.567C126.768 317.889 127.272 318.05 127.916 318.05ZM135.5 319.373V309.125H137.558V310.826C137.908 310.21 138.384 309.741 138.986 309.419C139.602 309.097 140.288 308.936 141.044 308.936C143.466 308.936 144.677 310.308 144.677 313.052V319.373H142.556V313.178C142.556 312.296 142.381 311.652 142.031 311.246C141.695 310.84 141.163 310.637 140.435 310.637C139.581 310.637 138.895 310.91 138.377 311.456C137.873 311.988 137.621 312.695 137.621 313.577V319.373H135.5Z" fill="#2B4146"/>
<path d="M236.796 319.373V304.568H246.204V306.332H238.98V311.057H245.763V312.821H238.98V319.373H236.796ZM252.612 319.562C250.932 319.562 249.609 319.093 248.643 318.155C247.677 317.203 247.194 315.908 247.194 314.27C247.194 313.22 247.404 312.296 247.824 311.498C248.258 310.686 248.853 310.056 249.609 309.608C250.365 309.16 251.233 308.936 252.213 308.936C253.627 308.936 254.74 309.391 255.552 310.301C256.364 311.197 256.77 312.436 256.77 314.018V314.732H249.252C249.406 316.86 250.533 317.924 252.633 317.924C253.221 317.924 253.795 317.833 254.355 317.651C254.929 317.469 255.468 317.168 255.972 316.748L256.602 318.218C256.14 318.638 255.545 318.967 254.817 319.205C254.089 319.443 253.354 319.562 252.612 319.562ZM252.297 310.427C251.415 310.427 250.715 310.7 250.197 311.246C249.679 311.792 249.364 312.52 249.252 313.43H254.985C254.943 312.478 254.691 311.743 254.229 311.225C253.767 310.693 253.123 310.427 252.297 310.427ZM264.585 319.562C263.801 319.562 263.108 319.387 262.506 319.037C261.904 318.687 261.456 318.218 261.162 317.63V319.373H259.083V304.568H261.204V310.784C261.512 310.224 261.96 309.776 262.548 309.44C263.15 309.104 263.829 308.936 264.585 308.936C265.495 308.936 266.286 309.153 266.958 309.587C267.644 310.021 268.169 310.637 268.533 311.435C268.911 312.219 269.1 313.157 269.1 314.249C269.1 315.341 268.911 316.286 268.533 317.084C268.169 317.882 267.644 318.498 266.958 318.932C266.286 319.352 265.495 319.562 264.585 319.562ZM264.06 317.924C264.942 317.924 265.642 317.609 266.16 316.979C266.692 316.349 266.958 315.439 266.958 314.249C266.958 313.059 266.692 312.156 266.16 311.54C265.642 310.91 264.942 310.595 264.06 310.595C263.178 310.595 262.471 310.91 261.939 311.54C261.421 312.156 261.162 313.059 261.162 314.249C261.162 315.439 261.421 316.349 261.939 316.979C262.471 317.609 263.178 317.924 264.06 317.924Z" fill="#2B4146"/>
<path d="M360.278 319.373V304.568H362.105L367.586 314.795L373.046 304.568H374.831V319.373H372.878V308.516L368.237 317.105H366.914L362.252 308.558V319.373H360.278ZM381.369 319.562C380.655 319.562 380.018 319.422 379.458 319.142C378.898 318.862 378.45 318.484 378.114 318.008C377.792 317.532 377.631 316.993 377.631 316.391C377.631 315.635 377.82 315.04 378.198 314.606C378.59 314.172 379.227 313.857 380.109 313.661C381.005 313.465 382.209 313.367 383.721 313.367H384.435V312.821C384.435 312.023 384.267 311.449 383.931 311.099C383.595 310.749 383.042 310.574 382.272 310.574C381.684 310.574 381.096 310.665 380.508 310.847C379.92 311.015 379.318 311.288 378.702 311.666L378.051 310.175C378.583 309.797 379.248 309.496 380.046 309.272C380.844 309.048 381.607 308.936 382.335 308.936C383.735 308.936 384.771 309.272 385.443 309.944C386.115 310.602 386.451 311.638 386.451 313.052V319.373H384.456V317.672C384.204 318.26 383.812 318.722 383.28 319.058C382.748 319.394 382.111 319.562 381.369 319.562ZM381.789 318.05C382.545 318.05 383.175 317.784 383.679 317.252C384.183 316.72 384.435 316.048 384.435 315.236V314.669H383.742C382.72 314.669 381.915 314.718 381.327 314.816C380.753 314.914 380.34 315.082 380.088 315.32C379.85 315.544 379.731 315.859 379.731 316.265C379.731 316.797 379.913 317.231 380.277 317.567C380.641 317.889 381.145 318.05 381.789 318.05ZM389.372 319.373V309.125H391.43V310.952C391.962 309.734 393.068 309.055 394.748 308.915L395.441 308.873L395.588 310.679L394.307 310.805C392.445 310.987 391.514 311.946 391.514 313.682V319.373H389.372Z" fill="#2B4146"/>
<path d="M485.185 319.373L491.779 304.568H493.585L500.2 319.373H497.974L496.42 315.761H488.923L487.39 319.373H485.185ZM492.661 306.983L489.7 313.997H495.685L492.703 306.983H492.661ZM501.908 323.153V309.125H503.987V310.868C504.281 310.28 504.729 309.811 505.331 309.461C505.933 309.111 506.626 308.936 507.41 308.936C508.32 308.936 509.111 309.153 509.783 309.587C510.469 310.021 510.994 310.637 511.358 311.435C511.736 312.219 511.925 313.157 511.925 314.249C511.925 315.341 511.736 316.286 511.358 317.084C510.994 317.882 510.469 318.498 509.783 318.932C509.111 319.352 508.32 319.562 507.41 319.562C506.654 319.562 505.975 319.401 505.373 319.079C504.785 318.743 504.337 318.288 504.029 317.714V323.153H501.908ZM506.885 317.924C507.767 317.924 508.467 317.609 508.985 316.979C509.517 316.349 509.783 315.439 509.783 314.249C509.783 313.059 509.517 312.156 508.985 311.54C508.467 310.91 507.767 310.595 506.885 310.595C506.003 310.595 505.296 310.91 504.764 311.54C504.246 312.156 503.987 313.059 503.987 314.249C503.987 315.439 504.246 316.349 504.764 316.979C505.296 317.609 506.003 317.924 506.885 317.924ZM514.315 319.373V309.125H516.373V310.952C516.905 309.734 518.011 309.055 519.691 308.915L520.384 308.873L520.531 310.679L519.25 310.805C517.388 310.987 516.457 311.946 516.457 313.682V319.373H514.315Z" fill="#2B4146"/>
<path d="M611.054 319.373V304.568H613.301L618.551 314.249L623.78 304.568H625.985V319.373H623.549V309.398L619.307 317.126H617.732L613.49 309.44V319.373H611.054ZM632.372 319.583C631.63 319.583 630.965 319.443 630.377 319.163C629.803 318.869 629.348 318.477 629.012 317.987C628.69 317.497 628.529 316.944 628.529 316.328C628.529 315.572 628.725 314.977 629.117 314.543C629.509 314.095 630.146 313.773 631.028 313.577C631.91 313.381 633.093 313.283 634.577 313.283H635.312V312.842C635.312 312.142 635.158 311.638 634.85 311.33C634.542 311.022 634.024 310.868 633.296 310.868C632.722 310.868 632.134 310.959 631.532 311.141C630.93 311.309 630.321 311.575 629.705 311.939L628.949 310.154C629.313 309.902 629.74 309.685 630.23 309.503C630.734 309.307 631.259 309.16 631.805 309.062C632.365 308.95 632.89 308.894 633.38 308.894C634.878 308.894 635.991 309.244 636.719 309.944C637.447 310.63 637.811 311.701 637.811 313.157V319.373H635.354V317.735C635.116 318.309 634.738 318.764 634.22 319.1C633.702 319.422 633.086 319.583 632.372 319.583ZM632.918 317.777C633.604 317.777 634.171 317.539 634.619 317.063C635.081 316.587 635.312 315.985 635.312 315.257V314.795H634.598C633.282 314.795 632.365 314.9 631.847 315.11C631.343 315.306 631.091 315.67 631.091 316.202C631.091 316.664 631.252 317.042 631.574 317.336C631.896 317.63 632.344 317.777 632.918 317.777ZM641.297 323.153L643.187 318.953L638.924 309.104H641.717L644.594 316.286L647.534 309.104H650.18L644.006 323.153H641.297Z" fill="#017189"/>
<path d="M738.793 319.541L738.625 317.756L739.99 317.672C741.362 317.56 742.048 316.776 742.048 315.32V304.568H744.211V315.32C744.211 316.594 743.882 317.581 743.224 318.281C742.566 318.981 741.593 319.373 740.305 319.457L738.793 319.541ZM751.075 319.562C748.597 319.562 747.358 318.183 747.358 315.425V309.125H749.479V315.446C749.479 316.272 749.647 316.881 749.983 317.273C750.319 317.665 750.851 317.861 751.579 317.861C752.377 317.861 753.021 317.595 753.511 317.063C754.015 316.531 754.267 315.817 754.267 314.921V309.125H756.388V319.373H754.33V317.735C753.994 318.337 753.546 318.792 752.986 319.1C752.426 319.408 751.789 319.562 751.075 319.562ZM759.377 319.373V309.125H761.435V310.826C761.785 310.21 762.261 309.741 762.863 309.419C763.479 309.097 764.165 308.936 764.921 308.936C767.343 308.936 768.554 310.308 768.554 313.052V319.373H766.433V313.178C766.433 312.296 766.258 311.652 765.908 311.246C765.572 310.84 765.04 310.637 764.312 310.637C763.458 310.637 762.772 310.91 762.254 311.456C761.75 311.988 761.498 312.695 761.498 313.577V319.373H759.377Z" fill="#2B4146"/>
<path d="M859.233 319.541L859.065 317.756L860.43 317.672C861.802 317.56 862.488 316.776 862.488 315.32V304.568H864.651V315.32C864.651 316.594 864.322 317.581 863.664 318.281C863.006 318.981 862.033 319.373 860.745 319.457L859.233 319.541ZM871.516 319.562C869.038 319.562 867.799 318.183 867.799 315.425V309.125H869.92V315.446C869.92 316.272 870.088 316.881 870.424 317.273C870.76 317.665 871.292 317.861 872.02 317.861C872.818 317.861 873.462 317.595 873.952 317.063C874.456 316.531 874.708 315.817 874.708 314.921V309.125H876.829V319.373H874.771V317.735C874.435 318.337 873.987 318.792 873.427 319.1C872.867 319.408 872.23 319.562 871.516 319.562ZM883.157 319.562C882.037 319.562 881.197 319.247 880.637 318.617C880.091 317.987 879.818 317.063 879.818 315.845V304.568H881.939V315.719C881.939 317.105 882.506 317.798 883.64 317.798C883.808 317.798 883.962 317.791 884.102 317.777C884.256 317.763 884.41 317.735 884.564 317.693L884.522 319.394C884.046 319.506 883.591 319.562 883.157 319.562Z" fill="#2B4146"/>
<line x1="127.345" y1="2.98308" x2="127.345" y2="272.593" stroke="#F3F4F6" stroke-width="1.96615" stroke-linecap="round" stroke-dasharray="15.73 15.73"/>
<line x1="253.386" y1="2.98308" x2="253.386" y2="272.593" stroke="#F3F4F6" stroke-width="1.96615" stroke-linecap="round" stroke-dasharray="15.73 15.73"/>
<line x1="376.74" y1="2.98308" x2="376.74" y2="272.593" stroke="#F3F4F6" stroke-width="1.96615" stroke-linecap="round" stroke-dasharray="15.73 15.73"/>
<line x1="502.781" y1="2.98308" x2="502.781" y2="272.593" stroke="#F3F4F6" stroke-width="1.96615" stroke-linecap="round" stroke-dasharray="15.73 15.73"/>
<line x1="752.175" y1="2.98308" x2="752.175" y2="272.593" stroke="#F3F4F6" stroke-width="1.96615" stroke-linecap="round" stroke-dasharray="15.73 15.73"/>
<line x1="875.531" y1="2.98308" x2="875.531" y2="272.593" stroke="#F3F4F6" stroke-width="1.96615" stroke-linecap="round" stroke-dasharray="15.73 15.73"/>
<path d="M609.999 149.307C609.999 145.579 609.999 143.715 610.608 142.245C611.42 140.285 612.977 138.728 614.938 137.916C616.408 137.307 618.271 137.307 621.999 137.307H638.999C642.727 137.307 644.59 137.307 646.06 137.916C648.021 138.728 649.578 140.285 650.39 142.245C650.999 143.715 650.999 145.579 650.999 149.307V311.138H609.999V149.307Z" fill="url(#paint0_linear_311_3432)"/>
<path d="M251.252 96.2204C211.051 96.2204 124.179 5.68373 64.6826 3.84766V277.271H936.227V28.6347C912.107 32.3069 904.244 99.3237 876.731 99.3237C844.57 99.3237 775.662 67.1119 748.326 67.5848C709.733 68.2525 663.489 152.924 629.721 153.491C595.953 154.058 558.344 83.7171 502.063 83.7171C440.958 85.5531 410.013 44.4916 377.852 44.4916C342.476 44.4916 283.412 96.2204 251.252 96.2204Z" fill="url(#paint1_linear_311_3432)"/>
<path d="M64.6826 3.84766C124.179 5.6951 212.384 96.792 252.584 96.792C284.745 96.792 341.143 44.7431 376.52 44.7431C408.68 44.7431 440.958 86.0587 502.063 84.2113C558.344 84.2113 595.953 154.059 629.721 153.488C663.489 152.917 712.398 68.651 750.991 67.9792C778.327 67.5034 840.101 100.51 872.261 100.51C899.774 100.51 912.107 32.483 936.228 28.7881" stroke="#008AA8" stroke-width="5.89846" stroke-linecap="round"/>
<line x1="631.249" y1="45.2246" x2="631.249" y2="157.98" stroke="#008AA8" stroke-width="0.5"/>
<path d="M641.999 156.102C641.999 161.719 637.134 166.377 630.999 166.377C624.864 166.377 619.999 161.719 619.999 156.102C619.999 150.484 624.864 145.826 630.999 145.826C637.134 145.826 641.999 150.484 641.999 156.102Z" fill="white" stroke="#008AA8" stroke-width="2"/>
<rect x="577.999" y="22.6738" width="137" height="36.6455" rx="9.75" fill="#001B21"/>
<path d="M596.648 50.4111V48.1011C595.71 48.0451 594.828 47.8771 594.002 47.5971C593.176 47.3031 592.455 46.8971 591.839 46.3791L592.553 44.6571C593.225 45.1891 593.939 45.5881 594.695 45.8541C595.465 46.1201 596.333 46.2531 597.299 46.2531C598.405 46.2531 599.224 46.0431 599.756 45.6231C600.302 45.2031 600.575 44.6641 600.575 44.0061C600.575 43.4461 600.386 43.0051 600.008 42.6831C599.63 42.3471 598.993 42.0811 598.097 41.8851L595.934 41.4231C594.674 41.1431 593.729 40.6881 593.099 40.0581C592.469 39.4141 592.154 38.5601 592.154 37.4961C592.154 36.6981 592.336 35.9911 592.7 35.3751C593.078 34.7591 593.603 34.2551 594.275 33.8631C594.947 33.4711 595.738 33.2261 596.648 33.1281V30.7761H598.37V33.1281C599.098 33.1981 599.805 33.3801 600.491 33.6741C601.191 33.9541 601.793 34.3461 602.297 34.8501L601.604 36.5091C601.058 35.9771 600.442 35.5851 599.756 35.3331C599.07 35.0671 598.314 34.9341 597.488 34.9341C596.522 34.9341 595.745 35.1651 595.157 35.6271C594.583 36.0891 594.296 36.6911 594.296 37.4331C594.296 38.0071 594.478 38.4621 594.842 38.7981C595.206 39.1341 595.787 39.3931 596.585 39.5751L598.748 40.0371C600.092 40.3171 601.093 40.7721 601.751 41.4021C602.409 42.0181 602.738 42.8371 602.738 43.8591C602.738 45.0211 602.332 45.9731 601.52 46.7151C600.708 47.4431 599.658 47.8841 598.37 48.0381V50.4111H596.648ZM609.891 48.1851C608.197 48.1851 606.874 47.8211 605.922 47.0931C604.984 46.3651 604.515 45.3501 604.515 44.0481C604.515 43.1381 604.753 42.3681 605.229 41.7381C605.719 41.0941 606.356 40.6531 607.14 40.4151C606.44 40.1211 605.887 39.6731 605.481 39.0711C605.075 38.4551 604.872 37.7481 604.872 36.9501C604.872 35.7181 605.327 34.7521 606.237 34.0521C607.147 33.3521 608.365 33.0021 609.891 33.0021C611.431 33.0021 612.656 33.3521 613.566 34.0521C614.476 34.7521 614.931 35.7181 614.931 36.9501C614.931 37.7481 614.721 38.4551 614.301 39.0711C613.895 39.6871 613.342 40.1351 612.642 40.4151C613.44 40.6531 614.077 41.0941 614.553 41.7381C615.029 42.3681 615.267 43.1381 615.267 44.0481C615.267 45.3501 614.791 46.3651 613.839 47.0931C612.901 47.8211 611.585 48.1851 609.891 48.1851ZM609.891 39.6381C610.829 39.6381 611.557 39.4211 612.075 38.9871C612.607 38.5391 612.873 37.9301 612.873 37.1601C612.873 36.4041 612.607 35.8091 612.075 35.3751C611.557 34.9411 610.829 34.7241 609.891 34.7241C608.953 34.7241 608.225 34.9411 607.707 35.3751C607.189 35.8091 606.93 36.4041 606.93 37.1601C606.93 37.9301 607.189 38.5391 607.707 38.9871C608.225 39.4211 608.953 39.6381 609.891 39.6381ZM609.891 46.4631C612.117 46.4631 613.23 45.6091 613.23 43.9011C613.23 42.2071 612.117 41.3601 609.891 41.3601C608.799 41.3601 607.966 41.5701 607.392 41.9901C606.832 42.4101 606.552 43.0471 606.552 43.9011C606.552 45.6091 607.665 46.4631 609.891 46.4631ZM622.483 48.1851C620.789 48.1851 619.466 47.8211 618.514 47.0931C617.576 46.3651 617.107 45.3501 617.107 44.0481C617.107 43.1381 617.345 42.3681 617.821 41.7381C618.311 41.0941 618.948 40.6531 619.732 40.4151C619.032 40.1211 618.479 39.6731 618.073 39.0711C617.667 38.4551 617.464 37.7481 617.464 36.9501C617.464 35.7181 617.919 34.7521 618.829 34.0521C619.739 33.3521 620.957 33.0021 622.483 33.0021C624.023 33.0021 625.248 33.3521 626.158 34.0521C627.068 34.7521 627.523 35.7181 627.523 36.9501C627.523 37.7481 627.313 38.4551 626.893 39.0711C626.487 39.6871 625.934 40.1351 625.234 40.4151C626.032 40.6531 626.669 41.0941 627.145 41.7381C627.621 42.3681 627.859 43.1381 627.859 44.0481C627.859 45.3501 627.383 46.3651 626.431 47.0931C625.493 47.8211 624.177 48.1851 622.483 48.1851ZM622.483 39.6381C623.421 39.6381 624.149 39.4211 624.667 38.9871C625.199 38.5391 625.465 37.9301 625.465 37.1601C625.465 36.4041 625.199 35.8091 624.667 35.3751C624.149 34.9411 623.421 34.7241 622.483 34.7241C621.545 34.7241 620.817 34.9411 620.299 35.3751C619.781 35.8091 619.522 36.4041 619.522 37.1601C619.522 37.9301 619.781 38.5391 620.299 38.9871C620.817 39.4211 621.545 39.6381 622.483 39.6381ZM622.483 46.4631C624.709 46.4631 625.822 45.6091 625.822 43.9011C625.822 42.2071 624.709 41.3601 622.483 41.3601C621.391 41.3601 620.558 41.5701 619.984 41.9901C619.424 42.4101 619.144 43.0471 619.144 43.9011C619.144 45.6091 620.257 46.4631 622.483 46.4631ZM631.084 50.5791L630.16 49.8651C630.482 49.5151 630.72 49.1931 630.874 48.8991C631.028 48.6051 631.126 48.3041 631.168 47.9961H630.013V45.4971H632.512V47.1981C632.512 47.8421 632.407 48.4301 632.197 48.9621C631.987 49.5081 631.616 50.0471 631.084 50.5791ZM640.583 48.1851C638.791 48.1851 637.405 47.5481 636.425 46.2741C635.459 45.0001 634.976 43.2151 634.976 40.9191C634.976 38.3851 635.522 36.4321 636.614 35.0601C637.706 33.6881 639.218 33.0021 641.15 33.0021C641.906 33.0021 642.669 33.1561 643.439 33.4641C644.209 33.7581 644.853 34.1781 645.371 34.7241L644.615 36.3621C644.111 35.8581 643.551 35.4801 642.935 35.2281C642.333 34.9761 641.724 34.8501 641.108 34.8501C639.806 34.8501 638.805 35.3261 638.105 36.2781C637.419 37.2161 637.076 38.6231 637.076 40.4991V41.3391C637.356 40.4851 637.839 39.8201 638.525 39.3441C639.225 38.8541 640.03 38.6091 640.94 38.6091C641.808 38.6091 642.571 38.8121 643.229 39.2181C643.901 39.6241 644.426 40.1841 644.804 40.8981C645.182 41.5981 645.371 42.4031 645.371 43.3131C645.371 44.2651 645.168 45.1121 644.762 45.8541C644.356 46.5821 643.789 47.1561 643.061 47.5761C642.347 47.9821 641.521 48.1851 640.583 48.1851ZM640.457 46.4211C641.311 46.4211 642.004 46.1411 642.536 45.5811C643.068 45.0211 643.334 44.2931 643.334 43.3971C643.334 42.5011 643.068 41.7731 642.536 41.2131C642.004 40.6531 641.311 40.3731 640.457 40.3731C639.603 40.3731 638.91 40.6531 638.378 41.2131C637.846 41.7731 637.58 42.5011 637.58 43.3971C637.58 44.2931 637.846 45.0211 638.378 45.5811C638.91 46.1411 639.603 46.4211 640.457 46.4211ZM652.65 48.1851C650.928 48.1851 649.612 47.5341 648.702 46.2321C647.806 44.9161 647.358 43.0331 647.358 40.5831C647.358 38.0911 647.806 36.2081 648.702 34.9341C649.612 33.6461 650.928 33.0021 652.65 33.0021C654.386 33.0021 655.702 33.6461 656.598 34.9341C657.494 36.2081 657.942 38.0841 657.942 40.5621C657.942 43.0261 657.487 44.9161 656.577 46.2321C655.681 47.5341 654.372 48.1851 652.65 48.1851ZM652.65 46.3791C653.714 46.3791 654.505 45.9101 655.023 44.9721C655.541 44.0341 655.8 42.5641 655.8 40.5621C655.8 38.5601 655.541 37.1041 655.023 36.1941C654.519 35.2701 653.728 34.8081 652.65 34.8081C651.586 34.8081 650.795 35.2701 650.277 36.1941C649.759 37.1181 649.5 38.5741 649.5 40.5621C649.5 42.5641 649.759 44.0341 650.277 44.9721C650.795 45.9101 651.586 46.3791 652.65 46.3791ZM665.241 48.1851C663.519 48.1851 662.203 47.5341 661.293 46.2321C660.397 44.9161 659.949 43.0331 659.949 40.5831C659.949 38.0911 660.397 36.2081 661.293 34.9341C662.203 33.6461 663.519 33.0021 665.241 33.0021C666.977 33.0021 668.293 33.6461 669.189 34.9341C670.085 36.2081 670.533 38.0841 670.533 40.5621C670.533 43.0261 670.078 44.9161 669.168 46.2321C668.272 47.5341 666.963 48.1851 665.241 48.1851ZM665.241 46.3791C666.305 46.3791 667.096 45.9101 667.614 44.9721C668.132 44.0341 668.391 42.5641 668.391 40.5621C668.391 38.5601 668.132 37.1041 667.614 36.1941C667.11 35.2701 666.319 34.8081 665.241 34.8081C664.177 34.8081 663.386 35.2701 662.868 36.1941C662.35 37.1181 662.091 38.5741 662.091 40.5621C662.091 42.5641 662.35 44.0341 662.868 44.9721C663.386 45.9101 664.177 46.3791 665.241 46.3791ZM672.772 47.9961V45.4971H675.271V47.9961H672.772ZM682.817 48.1851C681.095 48.1851 679.779 47.5341 678.869 46.2321C677.973 44.9161 677.525 43.0331 677.525 40.5831C677.525 38.0911 677.973 36.2081 678.869 34.9341C679.779 33.6461 681.095 33.0021 682.817 33.0021C684.553 33.0021 685.869 33.6461 686.765 34.9341C687.661 36.2081 688.109 38.0841 688.109 40.5621C688.109 43.0261 687.654 44.9161 686.744 46.2321C685.848 47.5341 684.539 48.1851 682.817 48.1851ZM682.817 46.3791C683.881 46.3791 684.672 45.9101 685.19 44.9721C685.708 44.0341 685.967 42.5641 685.967 40.5621C685.967 38.5601 685.708 37.1041 685.19 36.1941C684.686 35.2701 683.895 34.8081 682.817 34.8081C681.753 34.8081 680.962 35.2701 680.444 36.1941C679.926 37.1181 679.667 38.5741 679.667 40.5621C679.667 42.5641 679.926 44.0341 680.444 44.9721C680.962 45.9101 681.753 46.3791 682.817 46.3791ZM695.408 48.1851C693.686 48.1851 692.37 47.5341 691.46 46.2321C690.564 44.9161 690.116 43.0331 690.116 40.5831C690.116 38.0911 690.564 36.2081 691.46 34.9341C692.37 33.6461 693.686 33.0021 695.408 33.0021C697.144 33.0021 698.46 33.6461 699.356 34.9341C700.252 36.2081 700.7 38.0841 700.7 40.5621C700.7 43.0261 700.245 44.9161 699.335 46.2321C698.439 47.5341 697.13 48.1851 695.408 48.1851ZM695.408 46.3791C696.472 46.3791 697.263 45.9101 697.781 44.9721C698.299 44.0341 698.558 42.5641 698.558 40.5621C698.558 38.5601 698.299 37.1041 697.781 36.1941C697.277 35.2701 696.486 34.8081 695.408 34.8081C694.344 34.8081 693.553 35.2701 693.035 36.1941C692.517 37.1181 692.258 38.5741 692.258 40.5621C692.258 42.5641 692.517 44.0341 693.035 44.9721C693.553 45.9101 694.344 46.3791 695.408 46.3791Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_311_3432" x1="630.499" y1="85.8434" x2="630.499" y2="311.138" gradientUnits="userSpaceOnUse">
<stop stop-color="#2FA2B9" stop-opacity="0.2"/>
<stop offset="1" stop-color="#2FA2B9" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_311_3432" x1="499.114" y1="-104.228" x2="499.751" y2="277.272" gradientUnits="userSpaceOnUse">
<stop stop-color="#2FA2B9" stop-opacity="0.12"/>
<stop offset="1" stop-color="#2FA2B9" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>

			        
				</div>
			</div>

		);
}

export default Dashboard;