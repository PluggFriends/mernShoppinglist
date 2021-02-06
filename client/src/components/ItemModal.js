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
import { v4 as uuidv4 } from 'uuid';

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

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();

		const newItem = {
			id: uuidv4(),
			name: this.state.name,
		};
		//add item via addItem action
		this.props.addItem(newItem);

		//closes modal
		this.toggle();
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
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Add to List</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for='item'>Item</Label>
								<Input
									type='text'
									name='name'
									id='item'
									placeholder='Add item'
									onChange={this.onChange}
								/>
								<Button
									className='modalAddItem-btn'
									color='dark'
									block
								>
									Add Item
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => ({ item: state.item });

export default connect(mapStateToProps, { addItem })(ItemModal);
