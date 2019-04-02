import React from 'react';
import ToolTip from './ToolTip';
import './footer.css';
const Footer = (props) => {
	return (
		<fieldset>
			<legend><h2>Footer:</h2></legend>
			<p>
				<h4>Contact:</h4> 
				<ul>					
					<li>
						<ToolTip comment={'nicksona.in.lan@gmail.com'}>
							<a href='mailto:nicksona.in.lan@gmail.com'>Email</a>
						</ToolTip>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/nikola-vasilev-ab1161b9/'>LinkedIn</a>
					</li>
				</ul>
			</p>
			<p>
				<h4>gitHub Repo:</h4>
				<ul>
					<li><a href='https://github.com/crux-in-lan/robots-app-redux'>Front End</a></li>
					{
					// <li><a href='https://github.com/crux-in-lan/face-detect-app-api'>Back End</a></li>
					// <li><a href=''>Database</a></li>
					}
				</ul>
			</p>
		</fieldset>
	)
}

export default Footer;