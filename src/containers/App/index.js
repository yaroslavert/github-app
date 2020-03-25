import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import UserList from 'containers/UserList';
import UserInfo from 'containers/UserInfo';
import UserRepos from 'containers/UserRepos';

class App extends Component {

	render() {
		return (
			<>
				<Switch>
					<Route path="/" exact component={UserList} />
					<Route path="/:id" exact component={UserInfo} />
					<Route path="/:id/repos" exact component={UserRepos} />
					<Redirect to='/' />
				</Switch>
			</>
		)
	}
}

export default App;
