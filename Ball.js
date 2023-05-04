class Ball{
	constructor (posX = 200, posY = 200, speedX = 0.2, speedY = 0.2,
				radius = 10, bounceEffect = 0.01, color = 'yellow') {
					
		this.posX = posX;
		this.posY = posY;
		this.speedX = speedX;
		this.speedY = speedY;
		this.radius = radius;
		this.bounceEffect = bounceEffect;
		this.color = color;
	}
	
	draw() {
		colorCircle(this.posX,this.posY,this.radius,this.color);
	}
	
	move(deltaTime) {
		//console.log(this.posY);
		this.posX += this.speedX*deltaTime;
		this.posY += this.speedY*deltaTime;
		
		//collision ball - walls
		if(this.posX <= 0) //left wall
			this.speedX = -this.speedX;
		if(this.posX >= canvas.width) //right wall
			this.speedX = -this.speedX;
		if(this.posY <= 0) {//top wall
			this.speedY = -this.speedY;
		}
		if(this.posY >= canvas.height) { //bottom wall
			this.posX = 200;
			this.posY = 200;
		}
	}
}

/*var ballX = 400, ballY = 300;
var ballSpeedX = 0.2, ballSpeedY = 0.2;
const BOUNCE_EFFECT = 0.01;

function ballMove(deltaTime) {
	//ball movement
	
}

function ballPaddleHandling() {
	//collision ball - paddle
	/*var paddleLeftEdgeX = paddleX - paddleWidth/2; 
	var paddleRightEdgeX = paddleLeftEdgeX + paddleWidth;
	var paddleTopEdgeY = canvas.height - paddleHeight - PADDLE_DIST_FROM_EDGE;
	var paddleBottomEdgeY = paddleTopEdgeY + paddleHeight;
	
	if (ballY > paddleTopEdgeY &&
		ballY < paddleBottomEdgeY &&
		ballX > paddleLeftEdgeX &&
		ballX < paddleRightEdgeX) {
		
		var centerXpaddle = paddleX;
		var distFromCenter = ballX - centerXpaddle;
		
		ballSpeedX = distFromCenter*BOUNCE_EFFECT;		
		ballSpeedY *= -1;
	}
	
}

function ballBrickHandling(deltaTime) {
	var brickColumn = Math.floor(ballX/BRICK_WIDTH);
	var brickRow = Math.floor(ballY/BRICK_HEIGHT);
	var brickUnderBall = rowColToArrayIndex(brickColumn,brickRow);
	
	if(brickColumn >= 0 && brickColumn < BRICK_COLUMNS && 
	   brickRow >= 0 && brickRow < BRICK_ROWS) {
		if(brickGrid[brickUnderBall]) {
			brickGrid[brickUnderBall] = false;
			
			var prevBallX = ballX - ballSpeedX*deltaTime;
			var prevBallY = ballY - ballSpeedY*deltaTime;
			var prevBallColumn = Math.floor(prevBallX/BRICK_WIDTH);
			var prevBallRow = Math.floor(prevBallY/BRICK_HEIGHT);
			
			if(prevBallColumn != brickColumn)
				ballSpeedX *= -1;
			if(prevBallRow != brickRow)
				ballSpeedY *= -1;
		}
	}
	
}
*/