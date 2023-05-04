class World{

    constructor(lag = 0, lastFrameTimeMs = 0,
        maxFPS = 60, timeStep = 1000/maxFPS, ){

        this.lag = lag;
        this.lastFrameTimeMs = lastFrameTimeMs;
        this.maxFPS = maxFPS;
        this.timeStep = timeStep;
        this.canvas = null;

    }    


    getCanvas(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }     
        
         
    mainLoop(timeStamp) {
        // max FPS control
        if(timeStamp < lastFrameTimeMs + timeStep) {
            requestAnimationFrame(this.mainLoop.bind(this));
            return;
        }
        
        //pattern game loop
        lag += timeStamp - lastFrameTimeMs;
        lastFrameTimeMs = timeStamp;

        while (lag >= timeStep) {
            this.move(timeStep);
            lag -= timeStep;
        }
        this.draw();
        requestAnimationFrame(this.mainLoop.bind(this));
    }


    move(deltaTime) {
        for (var i = 0; i < entities.length; i++)
            entities[i].this.move(deltaTime);
    }
    
    draw(){
        //background
        colorRect(0,0,this.canvas.width, this.canvas.height, 'black');

        var paddle = new Paddle(340,120,20,40);
        var ball = new Ball();

        for (var i = 0; i < entities.length; i++)
            entities[i].this.draw();
    }
    
    rowColToArrayIndex(col,row) {
        return col + BRICK_COLUMNS*row;
    }
}

