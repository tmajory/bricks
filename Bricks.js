const BRICK_WIDTH = 100;
const BRICK_HEIGHT = 50;
const BRICK_GAP = 5;

const BRICK_COLUMNS = 8;
const BRICK_ROWS = 3;

var brickGrid = Array(BRICK_COLUMNS*BRICK_ROWS).fill(true);

function drawBricks() {
	for (var i=0; i < BRICK_COLUMNS; i++) {
		for (var j = 0; j < BRICK_ROWS; j++) {
			var arrayIndex = rowColToArrayIndex(i,j);
			if(brickGrid[arrayIndex])
				colorRect(BRICK_WIDTH*i,BRICK_HEIGHT*j,BRICK_WIDTH-BRICK_GAP,
				BRICK_HEIGHT-BRICK_GAP,'blue');
		}
	}
}