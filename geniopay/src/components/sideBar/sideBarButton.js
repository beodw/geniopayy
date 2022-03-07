import React from 'react';
// import { useNavigate } from 'react-router-dom';

const SideBarButton = (props) => {

		// var navigate = useNavigate();

		var staticClassNames = 'flex flex-row gap-4 rounded-lg p-4';

		var dynamicClassNames = props.selected ? 'bg-white text-teal ' : ' hover:bg-bright-teal active:bg-white active:text-teal focus:text-teal fill-white active:fill-teal focus:fill-teal';

		return (
				

					
								<a onClick={()=> { props.onClick(props.index); /*navigate(props.name);*/ } } className={staticClassNames + ' ' + dynamicClassNames}>
									{props.icon}
									<span className={'grow font-bold font-nunito'}>{props.name}</span>
								</a>
					

				
		);
}


export default SideBarButton;