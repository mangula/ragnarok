const canvasBackground = document.getElementById("canvasBackground")
const canvasGame = document.getElementById("canvasGame");
const canvasUI = document.getElementById("canvasUI");
const canvasGrid = document.getElementById("canvasGrid");

const ctxGame = canvasGame.getContext("2d");
const ctxGrid = canvasGrid.getContext("2d");
const ctxUI = canvasUI.getContext("2d");

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
   //console.log('%cimage loaded', 'color:red; background:yellow;font-size:2em');
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
    ctxUI.drawImage(UIImage1, 192, 686, 196, 238, 80, 450 - 30, 196 * 1.25, 238 * 1.25);//history
    ctxUI.drawImage(UIImage1, 486, 1246, 104, 44, 134, 720 - 30, 104 * 1.25, 44 * 1.25);//down
    ctxUI.drawImage(UIImage1, 697, 1246, 104, 44, 138, 425 - 30, 104 * 1.25, 44 * 1.25);//up
    ctxUI.drawImage(UIImage1, 600, 390, 210, 90, 1250, 20, 210 * 1.25, 90 * 1.25);//logo
});

const UIImage2 = new Image();
UIImage2.src = "feature_preview_texture0_level1.png";
UIImage2.addEventListener('load', ()=>{
    ctxUI.drawImage(UIImage2, 0, 320, 260, 300, 95, 140, 260 * 0.8, 300 * 0.8);//circle
});

const UIImage3 = new Image();
UIImage3.src = "skin_texture3_level1.png";
UIImage3.addEventListener('load', ()=>{
    ctxUI.drawImage(UIImage3, 700, 0, 195, 120, 85, 5, 195 * 1.25, 103 * 1.25);//top left 
});

const UIImage4 = new Image();
UIImage4.src = "feature_preview_texture1_level1.png";

const UIImage5 = new Image();
UIImage5.src = "menu_texture0_level1.png";

const UIImage6 = new Image();
UIImage6.src = "skin_texture2_level1.png";

const UIImage7 = new Image();
UIImage7.src = "skin_texture1_level1.png";

UIImage4.addEventListener('load', ()=>{
    ctxUI.drawImage(UIImage4, 290, 557, 270, 560, 1180, 100, 270 * 1.4, 560 * 1.4);//hero
    ctxUI.drawImage(UIImage4, 280, 410, 940, 150, 1000, 650, 940 * 1.6, 150 * 1.6);//clif
    UIImage5.addEventListener('load', ()=>{
        ctxUI.drawImage(UIImage5, 0, 115, 1020, 109, 150, 735, 1020 * 1.25, 109 * 1.25);//UI BET
        drawSpin();
        //drawHoverSpin();
        ctxUI.drawImage(UIImage5, 1060, 0, 70, 75, 1292, 785, 70 * 1.25, 75 * 1.25);//auto button
        ctxUI.drawImage(UIImage5, 1210, 0, 70, 75, 182, 785, 70 * 1.25, 75 * 1.25);//info button

        ctxUI.drawImage(UIImage5, 1024, 160, 33, 45, 982, 802, 33 * 1.4, 45 * 1.4);//right
        ctxUI.drawImage(UIImage5, 1180, 160, 33, 45, 525, 802, 33 * 1.4, 45 * 1.4);//left
        const buttonZoomX = 1.20, buttonZoomY = 1.35;
        ctxUI.drawImage(UIImage5, 1340, 174, 71, 42, 733, 803, 71 * buttonZoomX, 42 * (buttonZoomY - 0.1));//center
        ctxUI.drawImage(UIImage5, 1400, 0, 71, 42, 650, 804, 71 * buttonZoomX, 42 * buttonZoomY);//center left
        ctxUI.drawImage(UIImage5, 1400, 0, 71, 42, 568, 804, 71 * buttonZoomX, 42 * buttonZoomY);//center left

        ctxUI.drawImage(UIImage5, 1400, 0, 71, 42, 815, 804, 71 * buttonZoomX, 42 * buttonZoomY);//center right
        ctxUI.drawImage(UIImage5, 1400, 0, 71, 42, 897, 804, 71 * buttonZoomX, 42 * buttonZoomY);//center right
    });
    UIImage6.addEventListener('load', ()=>{
        ctxUI.drawImage(UIImage6, 545, 255, 250, 115, 1200, 580, 250 * 1.25, 115 * 1.25);//bonus path
        ctxUI.drawImage(UIImage6, 600, 925, 100, 100, 1439, 582, 100 * 0.5, 100 * 0.5);//bonus circle
        drawBonusPath();
    });
    UIImage7.addEventListener('load', ()=>{
        //ctxUI.drawImage(UIImage6, 545, 255, 250, 115, 1200, 580, 250 * 1.25, 115 * 1.25);//bonus path
        //drawPath();
        drawSymbols();
    });
});




function drawSpin(){
  ctxUI.drawImage(UIImage5, 414, 0, 100, 110, 1165, 745, 100 * 1.25, 110 * 1.25);//spin button
}
function drawSpinHover(){
  ctxUI.drawImage(UIImage5, 518, 0, 100, 110, 1165, 745, 100 * 1.25, 110 * 1.25);//spin hover button  
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


function checkHover(event){
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
}

const cursorPosition = {};

canvasUI.addEventListener('mousemove', (event1) => {
  const event = {x:event1.layerX, y:event1.layerY};
    document.getElementById('coord').innerHTML = event.x + ' ' + event.y;
    cursorPosition.x = event.x;
    cursorPosition.y = event.y;
    if(spinning){
      return;
    }
    checkHover(event);
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
    drawPath();
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

            //console.log(c);
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
            //console.log('ALL SYMBOLS DROPPED');
            //console.log(reelStrips.map(a=>a.join(' ')).join('\n'));
            spinning = 0;
            dropSymbols();
            addNewSymbols();
            setInitSymbolPositionsY();
            checkHover(cursorPosition);
        }
    }, 33);
    
}


const paths = [
  [
    [0,0,1,0,0,0,0],
    [0,0,1,1,1,0,0],
    [0,0,1,0,0,1,0],
    [0,0,1,0,0,1,0],
    [0,0,1,0,0,1,0],
    [0,0,1,1,1,0,0],
    [0,0,1,0,0,0,0]
  ],
  [
    [0,0,0,0,0,1,0],
    [0,0,0,1,1,1,0],
    [0,0,1,0,0,1,0],
    [0,0,1,0,0,1,0],
    [0,0,1,0,0,1,0],
    [0,0,0,1,1,1,0],
    [0,0,0,0,0,1,0]
  ],
];

let pathLevel = 0;
let path = paths[pathLevel];

function drawPath(){
    for (let r=0; r<rows; r++) {
        for (let c=0; c<cols; c++) {
            path[r][c] == 2 && ctxGrid.drawImage(UIImage7, 224, 23, 95, 95, c * cellHeight - 15, r * cellHeight - 10, 95 * 1.4, 95 * 1.4);
            path[r][c] == 1 && ctxGrid.drawImage(UIImage7, 345, 15, 95, 95, c * cellHeight - 15, r * cellHeight - 10, 95 * 1.4, 95 * 1.4);
        }
    }
}

function drawBonusPath(){
    const miniCellHeight = 10, miniCellBorder = 2;
    let targetImage, x, y;
     for (let r=0; r<rows; r++) {
         for (let c=0; c<cols; c++) {
             
             if (path[r][c] == 0) {
                 targetImage = UIImage7;
                 x = 224;
                 y = 23;
             } else if (path[r][c] == 2) {
                 targetImage = UIImage6;
                 x = 1120;
                 y = 60;
             } else {
                 targetImage = image;
                 x = 240;
                 y = 270;
             }
             ctxUI.drawImage(targetImage, x, y, miniCellHeight, miniCellHeight, 1223 + c * (miniCellHeight + miniCellBorder), 598 + r * (miniCellHeight + miniCellBorder), miniCellHeight, miniCellHeight);                  
         }
     }   
}

function resetPath() {
    for (let r=0; r<rows; r++) {
        for (let c=0; c<cols; c++) {
            if (path[r][c] == 2) { path[r][c] = 1; }
        }
    }
    pathLevel = (pathLevel + 1) % paths.length;
    path = paths[pathLevel];
}

































