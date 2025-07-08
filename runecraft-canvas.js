const canvasGame = document.getElementById("canvasGame");
const canvasGrid = document.getElementById("canvasGrid");
const ctxGame = canvasGame.getContext("2d");
const ctxGrid = canvasGrid.getContext("2d");

const rows = 7;
const cols = rows;
const height = 900, width = 1600;
const zoom = 1.75;
const rockBlanks = 2;
const gravity = 1;
canvasGame.height = height;
canvasGame.width = width;

const cellHeight = 60 * zoom;
const gridWidth = cols * cellHeight;
const gridHeight = rows * cellHeight;
canvasGrid.height = gridHeight;
canvasGrid.width = gridWidth;

const reelStrips = Array(rows * 2 + rockBlanks).fill(1).map(a=>Array(cols).fill(0));

const symbolsPositionsY = Array(rows * 2 + rockBlanks).fill(1).map(a=>Array(cols).fill(0));;

function addNewSymbols(){
	for (let r=0; r<rows; r++) {
		for (let c=0; c<cols; c++) {
			reelStrips[r][c] = Math.random() * numberOfSymbols << 0;
		}
	}
}

function dropSymbols() {
	for (let r=0; r<rows; r++) {
		for (let c=0; c<cols; c++) {
			reelStrips[r + rows + rockBlanks][c] = reelStrips[r][c];
		}
	}	
}

function printStrip(){
	console.log(reelStrips.map(a=>a.join(' ')).join('\n'));
}
function renderGrid(){
	for (;0;) {

	}
}


const alfa = [
    { "x": 552, "y": 0, "w": 60, "h": 60},
    { "x": 552, "y": 62,"w": 60, "h": 60},
    { "x": 552, "y": 124,"w": 60, "h": 60},
    { "x": 552, "y": 190,"w": 60, "h": 60},
        
    { "x": 203, "y": 896,"w": 60, "h": 60},
    { "x": 137, "y": 896,"w": 60, "h": 60},
    { "x": 74, "y": 896,"w": 60, "h": 60},
    { "x": 82, "y": 960,"w": 60, "h": 60},
    { "x": 144, "y": 960,"w": 60, "h": 60},
];


const numberOfSymbols = alfa.length;

image = new Image();

image.src = "skin_texture0_level2.png";

image.addEventListener('load', () => {
   console.log('%cimage loaded', 'color:red; background:yellow;font-size:2em');
   startGame();
   return;
   ctxGame.drawImage(image, 0,0);
   //ctxGrid.drawImage(image, 555, 6, 58, 48, 0, 0, 58, 48);
   ctxGame.beginPath();
   ctxGame.strokeStyle = 'lime';
   let i = 0,j=0;
   for (const index in alfa) {
          const data = alfa[index];
          ctxGame.rect(data.x, data.y, data.w, data.h);
          ctxGame.stroke();
          ctxGrid.drawImage(image, data.x, data.y, data.w, data.h, i * cellHeight + 5 * i, j * cellHeight + j*5, data.w, data.h);
          i++;
          if (i%5 == 0) {
              j++;
              i=0;
          }
   }
});


canvasGame.addEventListener('mousemove', (event) => {
    //console.log(event.x, event.y)
    document.getElementById('coord').innerHTML = event.x + ' ' + event.y;
})
canvasGame.addEventListener('mousedown', (event) => {
    //console.log(event.x, event.y)
    console.log(document.getElementById('coord').innerHTML);
})


function setInitSymbolPositionsY(){
    for (let r=0; r<reelStrips.length; r++) {
        
        for (c=0; c<cols; c++) {
            //const data = alfa[reelStrips[r][c]];
            symbolsPositionsY[r][c] = cellHeight * (r - rows - rockBlanks);
            //ctxGrid.drawImage(image, data.x, data.y, data.w, data.h, cellHeight * c, cellHeight * (r-rows - rockBlanks), data.w * zoom, data.h * zoom);
        }
    }
}


function startGame(){
    addNewSymbols();
    dropSymbols();
    addNewSymbols();
    setInitSymbolPositionsY();
    drawSymbols();
    
}

function drawSymbols(){
    ctxGrid.clearRect(0, 0, cols * cellHeight, rows * cellHeight);
    //console.log('drawSymbols');
    //for (let r=rows + rockBlanks; r<reelStrips.length; r++) {
    for (let r=0; r<reelStrips.length; r++) {
        if (r>=rows && r<rows+rockBlanks) {
            continue;
        }
        for (c=0; c<cols; c++) {
            const symbolY = symbolsPositionsY[r][c];
            if (symbolY > cellHeight * (rows * 2 + rockBlanks)) {
                continue;
            }
            if (symbolY + cellHeight < 0) {
                continue;
            }
            const data = alfa[reelStrips[r][c]];
            ctxGrid.drawImage(image, data.x, data.y, data.w, data.h, cellHeight * c, symbolY, data.w * zoom, data.h * zoom);
        }
    }
}

let symbolsDropped = 0
function animateDrop(){
    symbolsDropped = 0;
    
    for (let c = 0; c < cols; c++) {
        for(let r = 0; r < rows * 2 + rockBlanks; r++){
            //setTimeout();
            animateSymbol(c, r);
        }
    }
    
    let interval = setInterval(()=>{
        drawSymbols();
        if (symbolsDropped == (rows * 2 + rockBlanks) * cols) {
            clearInterval(interval);
            console.log('ALL SYMBOLS DROPPED');
        }
    }, 33);
    
}

function animateSymbol(col, row){
    let velocity = 0;
    let limit = cellHeight * (rows + rockBlanks);
    let interval = setInterval(()=>{
        velocity += gravity;
        symbolsPositionsY[row][col] += velocity;
        
        //symbolsPositionsY[col][row]
        limit -= velocity;
        if (limit <= 0) {
            symbolsPositionsY[row][col] += limit;
            clearInterval(interval);
            symbolsDropped++;
        };
        //drawSymbols();
    }, 33);
}

setTimeout(()=>{
    animateDrop();
},1000);
