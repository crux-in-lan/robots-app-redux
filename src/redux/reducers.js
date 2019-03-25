import {
		CHANGE_SEARCH_FIELD,
		REQUEST_ROBOTS_PENDING,
		REQUEST_ROBOTS_SUCCEED,
		REQUEST_ROBOTS_FAILED
} from './constants';

const initialStateSearch = {
	searchField: ''
}

export const searchRobots = (state=initialStateSearch, action={}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			return {...state,searchField: action.payload};
		break;
		default:
			return state;
	}
}

const initialStateRequest = {
	robots: [],
	isPending: true
}

export const requestRobots = (state=initialStateRequest, action={}) => {
	switch(action.type) {
		case REQUEST_ROBOTS_PENDING:
			return {...state,isPending: true};
		break;
		case REQUEST_ROBOTS_SUCCEED:
			return {...state,isPending: false, robots: action.payload};
		break;
		case REQUEST_ROBOTS_FAILED:
			return {...state,isPending: false, error: action.payload};
		break;
		default:
			return state;
	}
}