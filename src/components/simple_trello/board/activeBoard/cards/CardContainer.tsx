import React, { Component } from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import { submitNewCard } from '../../../../../redux/actions/index';
import BoardTitleInput from '../../boardCreation/BoardTitleInput';
import Card from './Card';
import uniqueId from 'lodash/uniqueId';

type Props = {
	listId: any;
};
class CreateCardContainer extends Component<Props> {
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

function mapStateToProps({ activeBoardData }: any) {
	return { activeBoardData };
}

export default (connect(mapStateToProps, { submitNewCard })(CreateCardContainer));
