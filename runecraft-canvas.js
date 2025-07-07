const canvasGame = document.getElementById("canvasGame");
const canvasGrid = document.getElementById("canvasGrid");
const ctxGame = canvasGame.getContext("2d");
const ctxGrid = canvasGrid.getContext("2d");

const rows = 7;
const cols = rows;
const height = 800, width = 1200;

const numberOfSymbols = 8;
canvasGame.height = height;
canvasGame.width = width;

const cellHeight = 50;
const gridWidth = cols * cellHeight;
const gridHeight = rows * cellHeight;
canvasGrid.height = gridHeight;
canvasGrid.width = gridWidth;

const reelStrips = Array(rows * 2).fill(1).map(a=>Array(cols).fill(0));

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
			reelStrips[r + rows][c] = reelStrips[r][c];
		}
	}	
}

function printStrip(){
	console.log(reelStrips.map(a=>a.join(' ')).join('\n'));
}
function renderGrid(){
	for (;;) {

	}
}


alfa = "T0AB.png": {
    "frame": {
        "x": 550,
        "y": 765,
        "w": 185,
        "h": 50
    }
};