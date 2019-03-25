import React, {Component} from 'react';

class ErrorBondry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}
	render() {
		const {hasError} = this.state;
		
			if(hasError) {
				return (
					<div>
						<h2>Component Have Error</h2>
					</div>
				)
			} else 	{
				return(
					this.props.children
				);
			}
	}
}

export default ErrorBondry;