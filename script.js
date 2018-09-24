var c = document.getElementById('can');
var ctx = c.getContext("2d");

var xPos = [80];
var yPos = [0];

c.addEventListener("click", function addDrop(event){
  var x = event.clientX - c.offsetLeft;
  var y = event.clientY - c.offsetTop;
  xPos.push(x);
  yPos.push(0);
}, false);


//sxediazoume grafiko
setInterval(function () {
  //katharizoume ton canvas
  ctx.clearRect(0, 0, c.width, c.height);

  //sxediazoume to fontou
  ctx.fillStyle = "rgb(204, 247, 255)";
  ctx.fillRect(0, 0, c.width, c.height);

  //grasidi
  ctx.fillStyle = "green";
  ctx.fillRect(0, c.height-20, c.width, c.height);

for( var i=0 ; i < xPos.length; i++){

  //spiti
  ctx.fillStyle = "#f4e6be";
  ctx.fillRect(50, c.height-20, 100, -80);
  ctx.fillStyle = "black";
  //porta
  ctx.fillStyle = "rgb(120, 80, 20)";
  ctx.fillRect(50+40, c.height-20, 20, -40);
  //parathyro
  ctx.fillStyle = "rgb(224, 199, 146)";
  ctx.fillRect(50+10, c.height-20-70, 25, 25);
  ctx.fillRect(50+65, c.height-20-70, 25, 25);
  //stegi

  ctx.fillStyle = "brown";
  ctx.beginPath();0
  ctx.moveTo(40, c.height-20-80);
  ctx.lineTo(40+120, c.height-20-80);
  ctx.lineTo(100, c.height-20-120);
  ctx.fill();


  //sxediazoume stagona
  ctx.fillStyle = "rgb(0, 200, 255)";
  ctx.beginPath();
  ctx.arc(xPos[i], yPos[i], 5, 0*Math.PI, 2*Math.PI);
  ctx.fill();
  //kylaei i stagwna
  yPos[i] += 5;
  //an vgei ektos canva xekinaei apo panw
  if (yPos[i] > c.height-22) {
    yPos[i] = 0;
  }
}
  //prosthetoume stagones me to pontikiou
  function addDrop(event){
    xPos.push(event.clientX);
    yPos.push(event.clientY);
  }

}, 10);
