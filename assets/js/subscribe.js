/* from www.w3schools.com */
function subscriptionFunction() {
    var checkBox = document.getElementById("subscribe");
    var text = document.getElementById("subscriptiontext");

    if (checkBox.checked == true) {
        text.style.display = "block";

    } else {
        text.style.display = "none";
    }
}