import React from 'react';



const Card = (props) => {

	return (

			<div className={"block rounded-xl " + props.bgColor + " " + "p-4 m-1 w-full col-span-12 md:col-span-1"}>
				<div className={"flex justify-between"}>
					<div className={"block"}>
						<div className={"text-sm"}>{props.cardName}</div>
						<div className={"text-xs"}>{props.currency}</div>
					</div>
					<div className={"ml-16"}>
							<img alt="currenncy flag" className="inline-block h-6 w-8 rounded-full ring-0" src={"/assets/" + props.currency + "flag" + ".svg"} />
					</div>
				</div>
				<div className={"mt-8 font-bold"}>{props.amount}</div>
			</div>

		);
}

export default Card;