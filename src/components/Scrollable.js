import React from 'react';

const Scrollable = (props) => {
	// const {par1, par2} = props;
	return (
		<div style={{overflow: 'scroll', height: '500px', border: '5px solid black'}}>
			{props.children}
		</div>
	)
}

export default Scrollable;