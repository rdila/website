const FOLDER = "resources/";

var walls = new Array(
    FOLDER + "GJG.jpg",
    FOLDER + "wlp1.jpg",
    FOLDER + "wlp2.jpg",
    FOLDER + "wlp3.jpg",
    FOLDER + "wlp4.jpg",
    FOLDER + "wlp5.jpg",
    FOLDER + "wlp6.jpg");

var arrLen = walls.length-1;
var wp;
var n;
var arrLen;
var idx = 0;

function nextW() {
    // Get the current wallpaper and its array position.
    wp = document.body.style.backgroundImage;
    n = wp.search(FOLDER);
    wp = wp.substring(n, wp.length-1);
    wp = wp.replace('"', '');
    idx = walls.indexOf(wp);

    // Initialize index.
    if (idx == -1) {idx = 0;};
    // Start back at the first array item if we're on the last array item. Otherwise increment the array index.
    if (idx == arrLen) {
        idx = 0;
    } else {
        idx++;
    }
    // Set the document body background to the next wallpaper.
    wp = "url('" + walls[idx] + "')";
    document.body.style.backgroundImage = wp;
}

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });

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
        $("#selectedItemText").html("<span class='rCardInfo'><b><a href='http://r.dilawri.com/random/' class='rCardLink'>posts &Rang;</a></b></span>");
    });

    $(function(){
        $(twitter).click();
    });
    $("#mainbar").click(function(){
        nextW();
        $("#card").fadeOut(750);
    });
    $("#card").click(function(){
        $("#card").fadeOut(370);
    });
});
