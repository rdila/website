var walls = new Array(
    "resources/wlp1.jpg",
    "resources/wlp2.jpg",
    "resources/wlp3.jpg",
    "resources/wlp4.jpg",
    "resources/wlp5.jpg",
    "resources/wlp6.jpg");
var wp;
var newwp;
var n;
var res;
var idx;
var wpMin = 0;
var wpMax = 5;

var arrLen;

function nextW() {
    wp = document.body.style.backgroundImage;
    idx = 0;

    if (wp == 'undefined') {
        newwp = "url('resources/wlp2.jpg')";
    } else {
        n = wp.search(".jpg");
        res = Number(wp.substr(n - 1, 1));
    }
    if ((Number(res)) == wpMax+1) {
    	    idx = 1;
        } else {
    	    idx = Number(res) + 1;
    }
    newwp = "url('resources/wlp" + idx;
    newwp = newwp.concat(".jpg')");
    return newwp;
    }

var wIndex = 0;
function nextW2() {
    var n;
    wp = document.body.style.backgroundImage;
    n = wp.search("resources/");
    wp = wp.substring(n, wp.length-1);

    // Get current index of wallpaper array.
    wIndex = walls.indexOf(wp);

    // Get the max size of the wallpaper array.
    arrLen = walls.length-1;

    // Initialize index.
    if (wIndex == -1) {wIndex = 0;};

    // Start back at the first array item if we're on the last array item. Otherwise increment the array index.
    if (wIndex == arrLen) {
        wIndex = 0;
    } else {
        wIndex++;
    }

    wp = "url('" + walls[wIndex] + "')";
    document.body.style.backgroundImage = wp;
}


$(document).ready(function(){
    $("#bottombar").find("img").css("opacity","0.77");

/*  CARD/TITLE, IMAGE and TEXT */
    $("#card").addClass("rCardContainer");
    $("#card").addClass("rCardInfo");
    $("#card").css("display", "none");

 /* SOCIAL MEDIA BUTTONS */
    $("#twitter").click(function(){
        $("#card").css("display", "block");
        $("#card").css("left","0%");
        $("#selectedItemText").html("<span class='rCardInfo'><b><a href='https://www.twitter.com/dilawri' class='rCardLink'>@dilawri</a></b></span>");
        });
    $("#instagram").click(function(){
        $("#card").css("display", "block");
        $("#card").css("left","20%");
        $("#selectedItemText").html("<span class='rCardInfo'><b><a href='http://www.instagram.com/dilawri' class='rCardLink'>@dilawri</a></b></span>");
    });
    $("#linkedin").click(function(){
        $("#card").css("display", "block");
        $("#card").css("left","40%");
        $("#selectedItemText").html("<span class='rCardInfo'><b><a href='https://www.linkedin.com/in/dilawri/' class='rCardLink'>Robin Dilawri<br/><small>MBA, B.Sc.</small></a></b></span>");
    });
    $("#vsco").click(function(){
        $("#card").css("display", "block");
        $("#card").css("left","60%");
        $("#selectedItemText").html("<span class='rCardInfo'><b><a href='http://www.vsco.com/dilawri' class='rCardLink'>@dilawri</a></b></span>");
    });
    $("#random").click(function(){
        $("#card").css("display", "block");
        $("#card").css("left","80%");
        $("#selectedItemText").html("<span class='rCardInfo'><b><a href='http://r.dilawri.com/random' class='rCardLink'>posts &Rang;</a></b></span>");
//      Email link
//      $("#selectedItemText").html("<span><a href='mailto:robin[at]dilawri.com' class='rCardLink'>robin <small>[at]</small><br/>dilawri <small>[dot]</small> com</a></span>");
    });

    $(function(){
        $(twitter).click();
    });

    $("#mainbar").dblclick(function(){
        // document.body.style.backgroundImage = nextW();
        nextW2();
    });
    $("#mainbar").click(function(){
        // document.body.style.backgroundImage = nextW2();
        nextW2();
        $("#card").fadeOut(750);
    });
    $("#card").click(function(){
        $("#card").fadeOut(370);
    });
});
