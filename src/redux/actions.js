import {
		CHANGE_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCEED,
		REQUEST_ROBOTS_FAILED
} from './constants';

export const setSearchField = (text) => {
	return {
		type: CHANGE_SEARCH_FIELD,
		payload: text
	}
}

export const setRobots = () => (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users/')
    .then(response => response.json())
    .then(result => {
      dispatch({type: REQUEST_ROBOTS_SUCCEED, payload: result});
    })
    .catch(err => {
    	dispatch({type: REQUEST_ROBOTS_FAILED, payload: `Unable to fetch robots from API: ${err}`});
    })
}