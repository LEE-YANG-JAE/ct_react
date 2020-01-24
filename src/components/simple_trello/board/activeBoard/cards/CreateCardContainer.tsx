import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';

import BoardTitleInput from '../../boardCreation/BoardTitleInput';
import Card from './Card';
import uniqueId from 'lodash/uniqueId';
import { submitNewCard, archiveCard } from '../../../../../redux/actions';

type Props = {
	activeBoardData: any;
	handleSubmit: any;
	listId: any;
	submitNewCard: any;
};

class CreateCardContainer extends Component<Props> {
	submit = (values: any) => {
		const { listId }: any = this.props;
		let cardName = `cardName_${listId}`;
		this.props.submitNewCard(values[cardName], uniqueId('cardItem_'), listId);
	};

	renderCards = () => {
		const { activeBoardData, listId }: any = this.props;
		return activeBoardData.listItems[listId].cards.map((card: any, i: any) => {
			return <Card key={i} title={card.name} listId={card.listId} />;
		});
	};

	render() {
		const { handleSubmit, listId }: any = this.props;
		return (
			<div>
				<form onSubmit={handleSubmit(this.submit)}>
					<label>
						<Field type='text' component={BoardTitleInput} name={`cardName_${listId}`} />
					</label>
				</form>
				{this.renderCards()}
			</div>
		);
	}
}

const validate = (values: any, props: any) => {
	const errors: any = {};
	const { listId } = props;
	let cardName = `cardName_${listId}`;

	if (!values[cardName]) {
		errors[cardName] = 'oops, give me name';
	}

	return errors;
};

const afterSubmit = (result: any, dispatch: any) => {
	dispatch(reset('card'));
};

function mapStateToProps({ activeBoardData }: any) {
	return { activeBoardData };
}

export default reduxForm({
	validate,
	form: 'card',
	onSubmitSuccess: afterSubmit
})(connect(mapStateToProps, { submitNewCard, archiveCard })(CreateCardContainer));
