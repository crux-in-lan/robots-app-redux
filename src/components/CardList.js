import React from 'react';
import Card from './Card';

const CardList = (props) => {
	const {filteredRobots} = props;
	return (
		<div>
			{
				filteredRobots.map(robot => {
					return <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} imageUrl={`https://robohash.org/${robot.id}`}/>
				})
			}
		</div>
	)
}

export default CardList;