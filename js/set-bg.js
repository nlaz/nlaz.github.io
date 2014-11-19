$(document).ready(function() {
    
    
    setBackground();
    var intervalDelay = 100;
    
    var parent = document.getElementById('header');
    var tiles = {};

    for (i = 0; i < 100; i++){
        var tile = document.createElement("div");
        var type = (i % 2) + 1;
        tile.className = "tile" + type;
        parent.appendChild(tile);
        tiles[i] = tile;
    }
    
    $('.main-img').hover(function () {
        $('.inside-border').css({ transform: 'scale(1.1)'});

//        intervalId = setInterval(setBackground, intervalDelay);
//        if (intervalDelay > 50)
//            intervalDelay -= 10;
    }, function () {
        $('.inside-border').css({ transform: 'scale(1)' });
//        clearInterval(intervalId);
    });
});

function setBackground(){
    // Set a background gradient, selected randomly
    var gradientSets = [
        ["#1abc9c", "#16a085"],
        ["#2ecc71", "#27ae60"],
        ["#3498db", "#2980b9"],
        ["#9b59b6", "#8e44ad"],
        ["#f1c40f", "#f39c12"],
        ["#e67e22", "#d35400"],
        ["#e74c3c", "#c0392b"]
    ];

    var rGradient = gradientSets[
        Math.floor(Math.random() * gradientSets.length)
    ];

    /* Safari 4-5, Chrome 1-9 */
    $("html").css(
        "background",
        "-webkit-gradient(linear, left top, right top, from(" + rGradient[0] +
                          "), to(" + rGradient[1] + "))"
    );

    /* Safari 5.1, Chrome 10+ */
    $("html").css(
        "background",
        "-webkit-linear-gradient(left, " + rGradient[0] + ", " + rGradient[1] + ")"
    );

    /* Firefox 3.6+ */
    $("html").css(
        "background",
        "-moz-linear-gradient(left, " + rGradient[0] + ", " + rGradient[1] + ")"
    );

    /* IE 10 */
    $("html").css(
        "background",
        "-ms-linear-gradient(left, " + rGradient[0] + ", " + rGradient[1] + ")"
    );

    /* Opera 11.10+ */
    $("html").css(
        "background",
        "-o-linear-gradient(left, " + rGradient[0] + ", " + rGradient[1] + ")"
    );
    
}
