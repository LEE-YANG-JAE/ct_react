import { Piece } from './piece';
import { COLS, BLOCK_SIZE, ROWS, KEY, LINES_PER_LEVEL, LEVEL, COLORS, ROTATION, POINTS } from './constants';

export class Board {
	ctx: any;
	ctxNext: any;
	grid: any;
	piece: any;
	next: any;
	requestId: any;
	time: any;

	moves = {
		[KEY.LEFT]: (p: any) => ({ ...p, x: p.x - 1 }),
		[KEY.RIGHT]: (p: any) => ({ ...p, x: p.x + 1 }),
		[KEY.DOWN]: (p: any) => ({ ...p, y: p.y + 1 }),
		[KEY.SPACE]: (p: any) => ({ ...p, y: p.y + 1 }),
		[KEY.UP]: (p: any) => this.rotate(p, ROTATION.RIGHT),
		[KEY.Q]: (p: any) => this.rotate(p, ROTATION.LEFT)
	};

	accountValues = {
		score: 0,
		level: 0,
		lines: 0
	};

	updateAccount(key: any, value: any) {
		let element = document.getElementById(key);
		if (element) {
			element.textContent = value;
		}
	}

	account = new Proxy(this.accountValues, {
		set: (target: any, key, value) => {
			target[key] = value;
			this.updateAccount(key, value);
			return true;
		}
	});

	constructor(ctx: any, ctxNext: any) {
		this.ctx = ctx;
		this.ctxNext = ctxNext;
		this.init();
	}

	init() {
		// Calculate size of canvas from constants.
		this.ctx.canvas.width = COLS * BLOCK_SIZE;
		this.ctx.canvas.height = ROWS * BLOCK_SIZE;

		// Scale so we don't need to give size on every draw.
		this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
	}

	reset() {
		this.grid = this.getEmptyGrid();
		this.piece = new Piece(this.ctx);
		this.piece.setStartingPosition();
		this.getNewPiece();
	}

	getNewPiece() {
		this.next = new Piece(this.ctxNext);
		this.ctxNext.clearRect(0, 0, this.ctxNext.canvas.width, this.ctxNext.canvas.height);
		this.next.draw();
	}

	draw() {
		this.piece.draw();
		this.drawBoard();
	}

	drop() {
		let p = this.moves[KEY.DOWN](this.piece);
		if (this.valid(p)) {
			this.piece.move(p);
		} else {
			this.freeze();
			this.clearLines();
			if (this.piece.y === 0) {
				// Game over
				return false;
			}
			this.piece = this.next;
			this.piece.ctx = this.ctx;
			this.piece.setStartingPosition();
			this.getNewPiece();
		}
		return true;
	}

	clearLines() {
		let lines = 0;

		this.grid.forEach((row: any, y: any) => {
			// If every value is greater than 0.
			if (row.every((value: any) => value > 0)) {
				lines++;

				// Remove the row.
				this.grid.splice(y, 1);

				// Add zero filled row at the top.
				this.grid.unshift(Array(COLS).fill(0));
			}
		});

		if (lines > 0) {
			// Calculate points from cleared lines and level.

			this.account.score += this.getLinesClearedPoints(lines);
			this.account.lines += lines;

			// If we have reached the lines for next level
			if (this.account.lines >= LINES_PER_LEVEL) {
				// Goto next level
				this.account.level++;

				// Remove lines so we start working for the next level
				this.account.lines -= LINES_PER_LEVEL;

				// Increase speed of game
				this.time.level = LEVEL[this.account.level];
			}
		}
	}

	valid(p: any) {
		return p.shape.every((row: any, dy: any) => {
			return row.every((value: any, dx: any) => {
				let x = p.x + dx;
				let y = p.y + dy;
				return value === 0 || (this.insideWalls(x) && this.aboveFloor(y) && this.notOccupied(x, y));
			});
		});
	}

	freeze() {
		this.piece.shape.forEach((row: any, y: any) => {
			row.forEach((value: any, x: any) => {
				if (value > 0) {
					this.grid[y + this.piece.y][x + this.piece.x] = value;
				}
			});
		});
	}

	drawBoard() {
		this.grid.forEach((row: any, y: any): any => {
			row.forEach((value: any, x: any) => {
				if (value > 0) {
					this.ctx.fillStyle = COLORS[value];
					this.ctx.fillRect(x, y, 1, 1);
				}
			});
		});
	}

	getEmptyGrid() {
		return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
	}

	insideWalls(x: any) {
		return x >= 0 && x < COLS;
	}

	aboveFloor(y: any) {
		return y <= ROWS;
	}

	notOccupied(x: any, y: any) {
		return this.grid[y] && this.grid[y][x] === 0;
	}

	rotate(piece: any, direction: any) {
		// Clone with JSON for immutability.
		let p = JSON.parse(JSON.stringify(piece));
		if (!piece.hardDropped) {
			// Transpose matrix
			for (let y = 0; y < p.shape.length; ++y) {
				for (let x = 0; x < y; ++x) {
					[ p.shape[x][y], p.shape[y][x] ] = [ p.shape[y][x], p.shape[x][y] ];
				}
			}
			// Reverse the order of the columns.
			if (direction === ROTATION.RIGHT) {
				p.shape.forEach((row: any) => row.reverse());
			} else if (direction === ROTATION.LEFT) {
				p.shape.reverse();
			}
		}

		return p;
	}

	getLinesClearedPoints(lines: any, level?: any) {
		const lineClearPoints =
			lines === 1
				? POINTS.SINGLE
				: lines === 2 ? POINTS.DOUBLE : lines === 3 ? POINTS.TRIPLE : lines === 4 ? POINTS.TETRIS : 0;

		return (this.account.level + 1) * lineClearPoints;
	}
}
