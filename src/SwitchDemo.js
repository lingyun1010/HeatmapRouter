import React from 'react';
import {Switch,Route,withRouter} from 'react-router-dom';
import SearchList from './searchList';


const About = () =>(
	<div> AboutPage </div>
);

const SwitchDemo = ({value}) => (
	<div>
		<Switch>
			<Route exact path = {"/"+value} render={props => (<SearchList {...props} value={value}/>)}/>
			<Route exact path="/about" component={About}/>
		</Switch>

	</div>
);

export default SwitchDemo