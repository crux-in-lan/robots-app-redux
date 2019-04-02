import React from 'react';
import './ToolTip.css';

const ToolTip = (props) => {
	return (
		<div class="tooltip">
			{props.children}
			<span class="tooltiptext">{props.comment}</span>
		</div>
	)
}

export default ToolTip;