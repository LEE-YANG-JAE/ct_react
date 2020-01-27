import { COLORS, SHAPES } from "./constants";

export class Piece {
    x: any;
    y: any;
    color: any;
    shape: any;
    ctx: any;
    typeId: any;
    hardDropped: any;
  
    constructor(ctx: any) {
      this.ctx = ctx;
      this.spawn();
    }
  
    spawn() {
      this.typeId = this.randomizeTetrominoType(COLORS.length - 1);
      this.shape = SHAPES[this.typeId];
      this.color = COLORS[this.typeId];
      this.x = 0;
      this.y = 0;
      this.hardDropped = false;
    }
  
    draw() {
      this.ctx.fillStyle = this.color;
      this.shape.forEach((row: any, y: any) => {
        row.forEach((value: any, x: any) => {
          if (value > 0) {
            this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
          }
        });
      });
    }
  
    move(p: any) {
      if(!this.hardDropped){
        this.x = p.x;
        this.y = p.y;
      }
      this.shape = p.shape;
    }
  
    hardDrop(){
      this.hardDropped = true;
    }
  
    setStartingPosition() {
      this.x = this.typeId === 4 ? 4 : 3;
    }
  
    randomizeTetrominoType(noOfTypes: any) {
      return Math.floor(Math.random() * noOfTypes + 1);
    }
  }