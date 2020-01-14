import React from 'react';
import '../../css/trello_basic/trello_basic.css';

export default class Trello_Basic extends React.Component {
	/** https://medium.com/better-programming/creating-trellos-ui-with-css-grid-ed1fbfcd9448 **/
	render() {
		return (
			<div>
				<div className='base'>
					<div className='header'>
						<div className='left-aligned'>
							<div className='button'>Home</div>
							<div className='button'>Boards</div>
							<div className='button'>Search bar</div>
						</div>
						<div className='logo button'>Logo</div>
						<div className='right-aligned'>
							<div className='button'>Add</div>
							<div className='button'>Info</div>
							<div className='button'>Bell</div>
							<div className='button'>Gear</div>
							<div className='button'>Avatar</div>
						</div>
					</div>
					<div className='board'>
						<div className='board-header'>
							<div className='left'>
								<div className='board-header-text'>Board Title</div>
								<div className='button'>Star</div>
								<div className='button'>Personal</div>
								<div className='button'>Private</div>
							</div>
							<div className='right'>
								<div className='button'>Show menu</div>
								<div className='button'>Butler</div>
							</div>
						</div>
						<div className='board-lists'>
							<div className='board-list'>
								<div className='list-title'>List title</div>
								<div className='card'>Card 1</div>
								<div className='card'>Card 2</div>
								<div className='card'>Card 3</div>
								<div className='card'>Card 4</div>
								<div className='card'>Card 5</div>
								<div className='add-card'>+ Add another card</div>
							</div>
							<div className='board-list'>
								<div className='list-title'>List title</div>
								<div className='card'>Card 1</div>
								<div className='card'>Card 2</div>
								<div className='card'>Card 3</div>
								<div className='card'>Card 4</div>
								<div className='card'>Card 5</div>
								<div className='card'>Card 6</div>
								<div className='card'>Card 7</div>
								<div className='card'>Card 8</div>
								<div className='card'>Card 9</div>
								<div className='add-card'>+ Add another card</div>
							</div>
							<div className='board-list'>
								<div className='list-title'>List title</div>
								<div className='card'>Card 1</div>
								<div className='card'>Card 2</div>
								<div className='card'>Card 3</div>
								<div className='card'>Card 4</div>
								<div className='card'>Card 5</div>
								<div className='card'>Card 6</div>
								<div className='card'>Card 7</div>
								<div className='add-card'>+ Add another card</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
