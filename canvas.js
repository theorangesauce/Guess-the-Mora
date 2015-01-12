//Canvas code found on http://stackoverflow.com/questions/2368784/draw-by-mouse-with-html5-canvas
//answered Dec 6 '11 by user1083202, edited May 12 by Austin Brunkhorst

var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var style = "black",
    width = 4;

function canvasStart() {
    canvas = document.getElementById('draw');
    ctx = canvas.getContext("2d");
    w = canvas.width;
	console.log(w);
    h = canvas.height;
	console.log(h);
	
    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
		//console.log(e.clientX+", "+e.clientY);
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = style;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.closePath();
}



function findxy(res, e) {
    debug_update(prevX, prevY, currX, currY, e.clientX, e.clientY);
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
            prevX = currX;
            prevY = currY;

        flag = true;
        dot_flag = false;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
            prevX = currX;
            prevY = currY;
        }
    }
}
function debug_update( pX, pY, nX, nY, cX, cY) {
  sp=document.getElementById('pX');
  sp.innerHTML = pX;
  sp=document.getElementById('pY');
  sp.innerHTML = pY;
  sp=document.getElementById('nX');
  sp.innerHTML = nX;
  sp=document.getElementById('nY');
  sp.innerHTML = nY;
  sp=document.getElementById('cX');
  sp.innerHTML = cX;
  sp=document.getElementById('cY');
  sp.innerHTML = cY;
}