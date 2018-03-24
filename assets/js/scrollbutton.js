window.onscroll = function() {scrollFunction()};/* taken from https://www.w3schools.com/ */

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("toTop").style.display = "block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function GoToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}