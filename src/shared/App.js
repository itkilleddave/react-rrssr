import React, { Component } from 'react';
import Grid from './Grid'
import routes from './routes'
import { Route } from 'react-router-dom'

class App extends Component {

	render() {
		return(
			<div>
			<Grid data={this.props.data} />
			</div>
			)
	}
}

export default App