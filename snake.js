
const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load images

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

const anotherFoodImg = new Image();
anotherFoodImg.src = "img/poisonfood.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

//create another snake

let anothersnake = [];

anothersnake[0] = {
    x : 7 * box,
    y : 8 * box
};

let anothersnake1 = [];

anothersnake1[0] = {
    x : 7 * box,
    y : 9 * box
};
let anothersnake2 = [];

anothersnake2[0] = {
    x : 7 * box,
    y : 10 * box
};

let anothersnake3 = [];

anothersnake3[0] = {
    x : 7 * box,
    y : 11 * box
};
let anothersnake4 = [];

anothersnake4[0] = {
    x : 7 * box,
    y : 12 * box
};

let anothersnake5 = [];

anothersnake5[0] = {
    x : 7 * box,
    y : 13 * box
};



// create the food

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

let food1 = {
    x1 : Math.floor(Math.random()*17+1) * box,
    y1 : Math.floor(Math.random()*15+3) * box
}

// create the score var

let score = 0;

//control the snake

let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        left.play();
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
        up.play();
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        right.play();
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
        down.play();
    }
}

// cheack collision function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true;
        }
    }
    return false;
}

// draw everything to the canvas

function draw(){
    
    ctx.drawImage(ground,1,1);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
		
		if(snake[i].x == 224 && snake[i].y == 256 || snake[i].x == 224 && snake[i].y == 288 || snake[i].x == 224 && snake[i].y == 320 || snake[i].x == 224 && snake[i].y == 352 || snake[i].x == 224 && snake[i].y == 384 || snake[i].x == 224 && snake[i].y == 416)
		{
			clearInterval(game);
			dead.play();
			up.src = "";
			right.src = "";
			left.src = "";
			down.src = "";
		}
    }

    for( let i = 0; i < anothersnake.length ; i++){
        ctx.fillStyle = ( i == 0 )? "red" : "black";
        ctx.fillRect(anothersnake[i].x,anothersnake[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(anothersnake[i].x,anothersnake[i].y,box,box);
    }

    for( let i = 0; i < anothersnake1.length ; i++){
        ctx.fillStyle = ( i == 0 )? "red" : "black";
        ctx.fillRect(anothersnake1[i].x,anothersnake1[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(anothersnake1[i].x,anothersnake1[i].y,box,box);
    }

    for( let i = 0; i < anothersnake2.length ; i++){
        ctx.fillStyle = ( i == 0 )? "red" : "black";
        ctx.fillRect(anothersnake2[i].x,anothersnake2[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(anothersnake2[i].x,anothersnake2[i].y,box,box);
    }

    for( let i = 0; i < anothersnake3.length ; i++){
        ctx.fillStyle = ( i == 0 )? "red" : "black";
        ctx.fillRect(anothersnake3[i].x,anothersnake3[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(anothersnake3[i].x,anothersnake3[i].y,box,box);
    }
    
    for( let i = 0; i < anothersnake4.length ; i++){
        ctx.fillStyle = ( i == 0 )? "red" : "black";
        ctx.fillRect(anothersnake4[i].x,anothersnake4[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(anothersnake4[i].x,anothersnake4[i].y,box,box);
    }
    
    for( let i = 0; i < anothersnake5.length ; i++){
        ctx.fillStyle = ( i == 0 )? "red" : "black";
        ctx.fillRect(anothersnake5[i].x,anothersnake5[i].y,box,box);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(anothersnake5[i].x,anothersnake5[i].y,box,box);
    };
    
    
    ctx.drawImage(foodImg, food.x, food.y);
    ctx.drawImage(foodImg, food1.x1, food1.y1); // change 26-feb

    
    // old head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    
    // which direction
    if( d == "LEFT") snakeX -= box;
    if( d == "UP") snakeY -= box;
    if( d == "RIGHT") snakeX += box;
    if( d == "DOWN") snakeY += box;

    
    
    // if the snake eats the food
    if(snakeX == food.x && snakeY == food.y || snakeX == food.y && snakeY == food.x) //change-26-feb
    {
        score++;
        eat.play();
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box
        }
        // we don't remove the tail
    }else{
        // remove the tail
        snake.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
    
    // game over
    
    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17*box || collision(newHead,snake)){
        clearInterval(game);
		dead.play();
		up.src = "";
		right.src = "";
		left.src = "";
		down.src = "";
    }
    
    snake.unshift(newHead);
    
    ctx.fillStyle = "white";
    ctx.font = "45px Changa one";
    ctx.fillText(score,2*box,1.6*box);
}

// call draw function every 100 ms

let game = setInterval(draw,100);




















