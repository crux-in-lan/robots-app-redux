import React from 'react';

const Card = (props) => {
	const {id, name, imageUrl, email} = props;
	return (
		<div>
			<img alt='robot' src={imageUrl} style={{width: '200px', height: 'auto'}}/>
			<h2>{id}</h2>
			<h2>{name}</h2>
			<h2>{email}</h2> 
		</div>
	)
}

export default Card;