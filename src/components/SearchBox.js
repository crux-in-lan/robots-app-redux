import React from 'react';

const SearchBox = (props) => {
	const {onSearchChange} = props;
	return (
		<input type='search' onChange={onSearchChange}/>
	)
}

export default SearchBox;