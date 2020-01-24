import React, { Component } from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import { submitNewCard } from '../../../../../redux/actions/index';
import BoardTitleInput from '../../boardCreation/BoardTitleInput';
import Card from './Card';
import uniqueId from 'lodash/uniqueId';

type Props = {
	handleSubmit?: any;
	listId?: any;
};
class CardContainer extends Component<Props> {
	submit = (values: any) => {
		const { listId, submitNewCard }: any = this.props;
		let cardName = `cardName_${listId}`;
		submitNewCard(values[cardName], uniqueId('cardItem_'), listId);
	};

	renderCards = () => {
		const { activeBoardData, listId }: any = this.props;
		return activeBoardData.listItems[listId].cards.map((card: any, i: any) => {
			return (
				<Card
					key={i}
					title={card.name}
					cardId={card.cardId}
					listId={card.listId}
					isArchived={card.isArchived}
				/>
			);
		});
	};

	render() {
		const { handleSubmit, listId } = this.props;
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

const validate = (values: any, props?: any) => {
    const errors:any = {};

    if (!values.cardName) {
        errors.cardName = 'oops!';
    }

    return errors;
}

const afterSubmit = (result: any, dispatch: any) => {
    dispatch(reset('cardName'));
}

function mapStateToProps({ activeBoardData }: any) {
	return { activeBoardData };
}

export default reduxForm({
    validate,
    form: 'cardName',
    onSubmitSuccess: afterSubmit,
})(connect(mapStateToProps, { submitNewCard })(CardContainer));
