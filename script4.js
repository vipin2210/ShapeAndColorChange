var cur = "inner_shape";

var shape = ["rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-topleft", "triangle-topright", "triangler-bottonleft", "triangle-bottomright", "triangle-right"];
var col = ["maroon", "green", "yellow", "royalblue", "pink", "orange"];

document.getElementById("color").addEventListener("click", function () {
    var rand_col = col[Math.floor(Math.random() * col.length)];
    document.getElementById("outer_box").style.backgroundColor = rand_col;
});

document.getElementById("shape").addEventListener("click", function () {
    var rand_shape = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(cur).setAttribute("id", rand_shape);
    cur = rand_shape;
});
