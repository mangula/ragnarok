const canvasBackground = document.getElementById("canvasBackground")
const canvasGame = document.getElementById("canvasGame");
const canvasUI = document.getElementById("canvasUI");
const canvasGrid = document.getElementById("canvasGrid");

const ctxGame = canvasGame.getContext("2d");
const ctxGrid = canvasGrid.getContext("2d");

const rows = 7;
const cols = rows;
const height = 880, width = 1600;
const zoom = 1.75;
const rockBlanks = 2;
const gravity = 3;
canvasUI.height = canvasBackground.height = canvasGame.height = height;
canvasUI.width = canvasBackground.width = canvasGame.width = width;

const cellHeight = 60 * zoom;
const gridWidth = cols * cellHeight;
const gridHeight = rows * cellHeight;
canvasGrid.height = gridHeight;
canvasGrid.width = gridWidth;


const stripBool = Array(rows * 2 + rockBlanks).fill(1).map(a=>Array(cols).fill(0));
const symbolsPositionsY = Array(rows * 2 + rockBlanks).fill(1).map(a=>Array(cols).fill(0));;

let spinImageBool = 1, spinning = 0;

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

const positionSpin = {x:1165 + 100 /2, y:745 + 110/2};
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

const reelStrips = Array(rows * 2 + rockBlanks).fill(1).map(a=>Array(cols).fill(numberOfSymbols));

//console.log(reelStrips.map(a=>a.join(' ')).join('\n'));

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

const bacgroundImage = new Image();

bacgroundImage.src = "background.jpg";
bacgroundImage.addEventListener('load', ()=>{
    canvasBackground.getContext('2d').drawImage(bacgroundImage,0,0, 1279, 720, 0, 0, 1279 * 1.25, 720 * 1.25)
});

const UIImage1 = new Image();
UIImage1.src = "skin_texture0_level1.png";
UIImage1.addEventListener('load', ()=>{
    canvasUI.getContext('2d').drawImage(UIImage1, 192, 686, 196, 238, 80, 450, 196 * 1.25, 238 * 1.25)
    canvasUI.getContext('2d').drawImage(UIImage1, 486, 1246, 104, 44, 134, 720, 104 * 1.25, 44 * 1.25);
    canvasUI.getContext('2d').drawImage(UIImage1, 697, 1246, 104, 44, 138, 425, 104 * 1.25, 44 * 1.25);
    canvasUI.getContext('2d').drawImage(UIImage1, 600, 390, 210, 90, 1250, 20, 210 * 1.25, 90 * 1.25);

});

const UIImage2 = new Image();
UIImage2.src = "feature_preview_texture0_level1.png";
UIImage2.addEventListener('load', ()=>{
    canvasUI.getContext('2d').drawImage(UIImage2, 0, 320, 260, 300, 95, 165, 260 * 0.8, 300 * 0.8);
});

const UIImage3 = new Image();
UIImage3.src = "skin_texture3_level1.png";
UIImage3.addEventListener('load', ()=>{
    canvasUI.getContext('2d').drawImage(UIImage3, 700, 0, 195, 120, 85, 20, 195 * 1.25, 103 * 1.25);
});

const UIImage4 = new Image();
UIImage4.src = "feature_preview_texture1_level1.png";
UIImage4.addEventListener('load', ()=>{
    canvasUI.getContext('2d').drawImage(UIImage4, 290, 557, 270, 560, 1180, 160, 270 * 1.4, 560 * 1.4);
    canvasUI.getContext('2d').drawImage(UIImage4, 280, 410, 940, 150, 1150, 700, 940 * 1.4, 150 * 1.4);
    UIImage5.addEventListener('load', ()=>{
        canvasUI.getContext('2d').drawImage(UIImage5, 0, 115, 1020, 109, 150, 735, 1020 * 1.25, 109 * 1.25);//UI BET
        drawSpin();
        //drawHoverSpin();
        canvasUI.getContext('2d').drawImage(UIImage5, 1060, 0, 70, 75, 1292, 785, 70 * 1.25, 75 * 1.25);//auto button
        canvasUI.getContext('2d').drawImage(UIImage5, 1210, 0, 70, 75, 182, 785, 70 * 1.25, 75 * 1.25);//info button
        //canvasUI.getContext('2d').drawImage(UIImage5, 280, 410, 940, 150, 1150, 700, 940 * 1.4, 150 * 1.4);
    });
});

const UIImage5 = new Image();
UIImage5.src = "menu_texture0_level1.png";



function drawSpin(){
  canvasUI.getContext('2d').drawImage(UIImage5, 414, 0, 100, 110, 1165, 745, 100 * 1.25, 110 * 1.25);//spin button
}
function drawSpinHover(){
  canvasUI.getContext('2d').drawImage(UIImage5, 518, 0, 100, 110, 1165, 745, 100 * 1.25, 110 * 1.25);//spin button  
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


canvasUI.addEventListener('mousemove', (event1) => {
  const event = {x:event1.layerX, y:event1.layerY};
    document.getElementById('coord').innerHTML = event.x + ' ' + event.y;
    
    if(spinning){
      return;
    }
    const dist = ( (event.x - positionSpin.x) ** 2 + (event.y - positionSpin.y)**2)**.5;
    //console.log(event, event.x, event.y, dist)
    if (dist < 50) {
      //console.log('SPIN');
      if (spinImageBool) {
          drawSpinHover();
          spinImageBool = 0;
      }
    } else if(!spinImageBool){
      drawSpin();
      spinImageBool = 1;
    }
})
canvasUI.addEventListener('mousedown', (event) => {
    //console.log(event.x, event.y)
    //console.log(document.getElementById('coord').innerHTML);
    if (spinning == 0 && spinImageBool == 0) {
      spinning = 1;
      spinImageBool = 1;
      drawSpin();
      animateDrop();
      //console.log("SPIN");
    }
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
        
        for (c=0; c<cols; c++) {
            if (reelStrips[r][c] == numberOfSymbols) {
                continue;
            }
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



function animateSymbolTimeout(row, col, time){
    setTimeout(()=>{
        //console.log(col,row);
        stripBool[row][col] = 1;
        animateSymbol(col, row);
    }, time);
}

let symbolsDropped = 0;
function animateDrop(){
    symbolsDropped = 0;
    
    let eko = 0;
    //if(0)
    for(let r = rows * 2 + rockBlanks; r--;){
        //const cLimit = 0;
        for (let c=0; c<cols; c++) {
            const row = c + r;
            if (row >= rows * 2 + rockBlanks) {
              break;
            }

            animateSymbolTimeout(row, c, eko * 20);
        }
        eko++;
    }
    //if(0)
    for (let c = 1; c < cols; c++) {
        let col = c;

            console.log(c);
        for(let r = 0; r < cols; r++, col++){
            const row = r;
            if (row >= rows * 2 + rockBlanks || col >= cols) {
              break;
            }

            animateSymbolTimeout(row, col, eko * 20);
            
            
        }
        eko++;
    }
    
    let interval = setInterval(()=>{
        drawSymbols();
        if (symbolsDropped == (rows * 2 + rockBlanks) * cols) {
            clearInterval(interval);
            console.log('ALL SYMBOLS DROPPED');
            console.log(reelStrips.map(a=>a.join(' ')).join('\n'));
            spinning = 0;
            dropSymbols();
            addNewSymbols();
            setInitSymbolPositionsY();
        }
    }, 33);
    
}


