import React from 'react';

import '../../css/pages/tetris.css';
import '../../css/fonts/press_start_2p_font.css';

import { COLS, BLOCK_SIZE, ROWS, KEY, POINTS, LEVEL } from './libs/constants';
import { Board } from './libs/board';

// https://medium.com/@michael.karen/learning-modern-javascript-with-tetris-92d532bcd057
export default class Simple_Tetris extends React.Component {
	private canvasEl: any;
	private canvasNextEl: any;
	private board: any;
	private ctx: any;
	private ctxNext: any;
	private requestId: any;

	constructor(props: any) {
		super(props);
		this.canvasEl = React.createRef();
		this.canvasNextEl = React.createRef();
	}
	componentDidMount() {
		const canvas: any = this.canvasEl.current;
		this.ctx = canvas.getContext('2d');
		// Calculate size of canvas from constants.
		this.ctx.canvas.width = COLS * BLOCK_SIZE;
		this.ctx.canvas.height = ROWS * BLOCK_SIZE;
		// Scale blocks
		this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

		const canvasNext = this.canvasNextEl.current;
		this.ctxNext = canvasNext.getContext('2d');
		// Size canvas for four blocks.
		this.ctxNext.canvas.width = 4 * BLOCK_SIZE;
		this.ctxNext.canvas.height = 4 * BLOCK_SIZE;
		this.ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);

		this.board = new Board(this.ctx, this.ctxNext);

		this.initNext();
	}
	initNext = () => {
		// Calculate size of canvas from constants.
		this.ctxNext.canvas.width = 4 * BLOCK_SIZE;
		this.ctxNext.canvas.height = 4 * BLOCK_SIZE;
		this.ctxNext.scale(BLOCK_SIZE, BLOCK_SIZE);
	};
	addEventListener = () => {
		document.addEventListener('keydown', (event) => {
			if (event.keyCode === KEY.P) {
				this.pause();
			}
			if (event.keyCode === KEY.ESC) {
				this.gameOver();
			} else if (this.board.moves[event.keyCode]) {
				event.preventDefault();
				// Get new state
				let p = this.board.moves[event.keyCode](this.board.piece);
				if (event.keyCode === KEY.SPACE) {
					// Hard drop
					while (this.board.valid(p)) {
						this.board.account.score += POINTS.HARD_DROP;
						this.board.piece.move(p);
						p = this.board.moves[KEY.DOWN](this.board.piece);
					}
					this.board.piece.hardDrop();
				} else if (this.board.valid(p)) {
					this.board.piece.move(p);
					if (event.keyCode === KEY.DOWN) {
						this.board.account.score += POINTS.SOFT_DROP;
					}
				}
			}
		});
	};

	resetGame = () => {
		this.board.account.score = 0;
		this.board.account.lines = 0;
		this.board.account.level = 0;
		this.board.reset();
		this.board.time = { start: 0, elapsed: 0, level: LEVEL[this.board.account.level] };
	};

	play = () => {
		this.addEventListener();
		this.resetGame();
		this.board.time.start = performance.now();
		// If we have an old game running a game then cancel the old
		if (this.requestId) {
			cancelAnimationFrame(this.requestId);
		}

		this.animate();
	};
	animate = (now = 0) => {
		this.board.time.elapsed = now - this.board.time.start;
		if (this.board.time.elapsed > this.board.time.level) {
			this.board.time.start = now;
			if (!this.board.drop()) {
				this.gameOver();
				return;
			}
		}

		// Clear board before drawing new state.
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

		this.board.draw();
		this.requestId = requestAnimationFrame(this.animate);
	};

	gameOver = () => {
		cancelAnimationFrame(this.requestId);
		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(1, 3, 8, 1.2);
		this.ctx.font = '1px Arial';
		this.ctx.fillStyle = 'red';
		this.ctx.fillText('GAME OVER', 1.8, 4);
	};

	pause = () => {
		if (!this.requestId) {
			this.animate();
			return;
		}

		cancelAnimationFrame(this.requestId);
		this.requestId = null;

		this.ctx.fillStyle = 'black';
		this.ctx.fillRect(1, 3, 8, 1.2);
		this.ctx.font = '1px Arial';
		this.ctx.fillStyle = 'yellow';
		this.ctx.fillText('PAUSED', 3, 4);
	};

	render() {
		return (
			<div className='grid'>
				<canvas id='board' className='game-board' ref={this.canvasEl} />
				<div className='right-column'>
					<div>
						<h1>TETRIS</h1>
						<p>
							Score: <span id='score'>0</span>
						</p>
						<p>
							Lines: <span id='lines'>0</span>
						</p>
						<p>
							Level: <span id='level'>0</span>
						</p>
						<canvas id='next' className='next' ref={this.canvasNextEl} />
					</div>
					<button onClick={this.play} className='play-button'>
						Play
					</button>
				</div>
			</div>
		);
	}
}
