//##### Function making nav responsive #####
function dropdownMenu() {
    var x = document.getElementById("onClick");
    if (x.className === "nav-list") {
        x.className += " responsive";
        /*change nav-list to nav-list.responsive*/
    } else {
        x.className = "nav-list";
    }
}

// ##### Function making top button which moves to top of page #####
// When the user scrolls down 20px from the top of the document, show the button

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
