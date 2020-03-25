import React, { PureComponent } from 'react'
import Modal from 'components/modal'

export class ModalToggle extends PureComponent {
	state = {
		isOpen: true,
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.isOpen !== prevState.isOpen) {
			this.setState({ isOpen: true })
		}
	}

	handleCancel = () => {
		this.setState({ isOpen: false })
	}

	render() {
		const { content, title, mode } = this.props
		const { isOpen } = this.state
		return (
			<>
				<Modal
					isOpen={isOpen}
					onClose={this.handleCancel}
					title={title}
					mode={mode}
				>
					{content}
					<button onClick={this.handleCancel}>Close</button>
				</Modal>
			</>
		)
	}
}
