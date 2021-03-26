var makeRain = 0;
var goUp = 0;

var c = document.getElementById("can");
var ctx = c.getContext("2d");
c.width = 600;
c.height = 400;

var cloudDownDo = [-10, -10, -10, -10, -10];
var cloudDownEnabler = [0, 0, 0, 0, 0];
var posCenter = (((c.width * 1) / 5) * 1) / 2;

var xPos = [];
var yPos = [];

// -------------------- EVENT LISTENERS ------------------------

//prostheti tis sidetagmenes tis neas STAGONAS (meta apo click)
c.addEventListener(
    "click",
    function addDrop(event) {
        makeRain = 1;
        var x = event.clientX - c.offsetLeft;
        var y = event.clientY - c.offsetTop;
        xPos.push(x);
        yPos.push(c.height / 10);

        //elegxouome poio sinefo tha katevei
        if (x < (c.width * 1) / 5) {
            //posCenter = (c.width*1/5);
            cloudDownEnabler[0] = 1;
        } else if (x > (c.width * 1) / 5 && x < (c.width * 2) / 5) {
            //posCenter = (c.width*2/5);
            cloudDownEnabler[1] = 1;
        } else if (x > (c.width * 2) / 5 && x < (c.width * 3) / 5) {
            //posCenter = (c.width*3/5);
            cloudDownEnabler[2] = 1;
        } else if (x > (c.width * 3) / 5 && x < (c.width * 4) / 5) {
            //posCenter = (c.width*4/5);
            cloudDownEnabler[3] = 1;
        } else if (x > (c.width * 4) / 5) {
            //posCenter = (c.width*4/5);
            cloudDownEnabler[4] = 1;
        }
    },
    false
);

//xekinaei MPORA
var stormBtn = document.getElementById("stormButton");
stormBtn.addEventListener(
    "click",
    function makeStorm(event) {
        makeRain = 1;

        //vazoume tyxaies syntetagmenes gia tis stagones
        for (var i = 0; i < 30; i++) {
            xPos[i] = Math.floor(Math.random() * c.width);
            yPos[i] = Math.floor(Math.random() * c.height);
        }
        //katevazoume ola ta synnefa
        for (var i = 0; i < 5; i++) {
            cloudDownEnabler[i] = 1;
        }
    },
    false
);

//stamataei ti VROXI (meta apo click)
var bd = document.getElementById("bd");
bd.addEventListener(
    "click",
    function stopRain(event) {
        xPos.length = 0;
        yPos.length = 0;

        //reset clowdDownEnable = 0
        for (var i = 0; i < 5; i++) {
            cloudDownEnabler[i] = 0;
            cloudDownDo[i] = -10;
        }
        makeRain = 0;
        //cloudFallDown = 0;
    },
    false
);

//sxediazoume grafiko -------------SET INTERVAL ---------------
setInterval(function() {
    //katharizoume ton canvas
    ctx.clearRect(0, 0, c.width, c.height);

    //sxediazoume to fonto
    if (makeRain == 1) {
        //skouro VROXERO fonto
        ctx.fillStyle = "rgb(186, 220, 226) ";
        ctx.fillRect(0, 0, c.width, c.height);
    } else {
        //kanoniko FOTEINO fonto
        ctx.fillStyle = "rgb(204, 247, 255)";
        ctx.fillRect(0, 0, c.width, c.height);
    }

    //grasidi
    ctx.fillStyle = "green";
    ctx.fillRect(0, c.height - 20, c.width, c.height);

    //spiti
    ctx.fillStyle = "#f4e6be";
    ctx.fillRect(50, c.height - 20, 100, -80);
    ctx.fillStyle = "black";
    //porta
    ctx.fillStyle = "rgb(120, 80, 20)";
    ctx.fillRect(50 + 40, c.height - 20, 20, -40);
    //parathyro
    ctx.fillStyle = "rgb(224, 199, 146)";
    ctx.fillRect(50 + 10, c.height - 20 - 70, 25, 25);
    ctx.fillRect(50 + 65, c.height - 20 - 70, 25, 25);
    //stegi
    ctx.fillStyle = "brown";
    ctx.beginPath();
    ctx.moveTo(40, c.height - 20 - 80);
    ctx.lineTo(40 + 120, c.height - 20 - 80);
    ctx.lineTo(100, c.height - 20 - 120);
    ctx.fill();

    if (makeRain == 1) {
        //metakinoude ta Clouds -------------
        for (var cloudWho = 0; cloudWho < 5; cloudWho++) {
            if (cloudDownEnabler[cloudWho] == 1) {
                ctx.fillStyle = "#a1a4a8";
                ctx.beginPath();
                ctx.arc(
                    -40 + posCenter + (cloudWho * c.width * 1) / 5,
                    -10 + cloudDownDo[cloudWho],
                    22,
                    0 * Math.PI,
                    2 * Math.PI
                );
                ctx.arc(
                    -20 + posCenter + (cloudWho * c.width * 1) / 5,
                    -10 + cloudDownDo[cloudWho],
                    27,
                    0 * Math.PI,
                    2 * Math.PI
                );
                ctx.arc(
                    posCenter + (cloudWho * c.width * 1) / 5,
                    -10 + cloudDownDo[cloudWho],
                    32,
                    0 * Math.PI,
                    2 * Math.PI
                );
                ctx.arc(
                    +20 + posCenter + (cloudWho * c.width * 1) / 5,
                    -10 + cloudDownDo[cloudWho],
                    27,
                    0 * Math.PI,
                    2 * Math.PI
                );
                ctx.arc(
                    +40 + posCenter + (cloudWho * c.width * 1) / 5,
                    -10 + cloudDownDo[cloudWho],
                    25,
                    0 * Math.PI,
                    2 * Math.PI
                );
                //ctx.arc( 100+cloudWho*100, -10+cloudDownDo[cloudWho], 40, 0*Math.PI, 2*Math.PI);
                //ctx.arc( 100+cloudWho*100, -10+cloudDownDo[cloudWho], 40, 0*Math.PI, 2*Math.PI);
                ctx.fill();

                //elegxoume an ftanei sti thesi tou to CLOUD
                if (cloudDownDo[cloudWho] <= c.height / 10) {
                    cloudDownDo[cloudWho] += 1;
                }
            }
        }

        //ftiaxnoume ti VROXI ---------------
        //sxediazoume tis STAGONES me ti seira
        for (var i = 0; i < xPos.length; i++) {
            //sxediazoume stagona
            ctx.fillStyle = "rgb(0, 200, 255)";
            ctx.beginPath();
            ctx.arc(xPos[i], yPos[i], 5, 0 * Math.PI, 2 * Math.PI);
            ctx.fill();
            //kylaei i stagwna
            yPos[i] += 5;
            //an vgei ektos canva xekinaei apo panw
            if (yPos[i] > c.height - 22) {
                yPos[i] = c.height / 10;
            }
        }
    }
}, 10);
//stamataei ------------- SET INTERVAL -----------------------
