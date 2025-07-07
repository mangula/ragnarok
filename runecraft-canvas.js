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
	for (;0;) {

	}
}


const alfa = {
    "T0AB.png": {
        "x": 555,
        "y": 6,
        "w": 58,
        "h": 48
    }
};

image = new Image();

image.src = "skin_texture0_level2.png";

image.addEventListener('load', () => {
   console.log('%cimage loaded', 'color:red; background:yellow;font-size:2em');
   
   ctxGame.drawImage(image, 0,0);
   ctxGrid.drawImage(image, 555, 6, 58, 48, 0, 0, 58, 48);
});


canvasGame.addEventListener('mousemove', (event) => {
    //console.log(event.x, event.y)
    document.getElementById('coord').innerHTML = event.x + ' ' + event.y;
})
canvasGame.addEventListener('mousedown', (event) => {
    //console.log(event.x, event.y)
    console.log(document.getElementById('coord').innerHTML);
})