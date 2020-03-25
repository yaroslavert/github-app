import React from 'react'
import * as Icons from './data'

export default props => {
	const { component, ...attrs } = props
	let Component = null

	if (Icons[component]) {
		Component = Icons[component]
	}

	return Component !== null && <Component {...attrs} />
}
