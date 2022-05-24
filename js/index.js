window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    var mybutton = document.getElementById("scrollbtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrollup() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}