import React from "react";

import Header from "./Header";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				{ this.props.children}
			</div>
		);
	}
}
