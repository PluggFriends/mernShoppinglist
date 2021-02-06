//this is a container component. a container component is a component that is hooked to redux. A container uses state from redux

import React, { Component } from 'react';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';

class ItemModal extends Component {
	state = {
		modal: false,
		name: '',
	};
	toggle = () => {
		this.setState({
			modal: !this.state.modal,
		});
	};
	render() {
		return (
			<div>
				<Button
					className='addItem-btn'
					color='dark'
					onClick={this.toggle}
				>
					Add Item
				</Button>
				<Modal></Modal>
			</div>
		);
	}
}

export default connect()(ItemModal);
