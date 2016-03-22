$(document).ready(function () {
    console.log("Hello World");
    var c = document.getElementById("canvas");
    var ctx = c.getContext('2d');

    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect (10, 10, 55, 50);
});
