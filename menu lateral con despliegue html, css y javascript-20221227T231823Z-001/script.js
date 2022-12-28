function expand() {
    var expandCont = document.getElementById("expand");
    var h2None = document.querySelectorAll("h2");

    var width_45_1 = document.querySelector(".side_menu_bar_cont_1");
    var width_45_2 = document.querySelector(".side_menu_bar_cont_2");

    var marginTop25 = document.querySelector(".marginTop25");
    var profileCont = document.querySelector(".profile_cont");

    if (expandCont.style.width == "100px") {
        expandCont.style.width = "250px";

        width_45_1.style.width = "80%";
        width_45_2.style.width = "80%";

        marginTop25.style.marginTop = "7px";
        profileCont.style.width = "90%";
    } else {
        expandCont.style.width = "100px";

        width_45_1.style.width = "45%";
        width_45_2.style.width = "45%";

        marginTop25.style.marginTop = "25px";
        profileCont.style.width = "70%";
    }

    for (let i = 0; i < h2None.length; i++) {
        if (h2None[i].style.display == "none") {
            h2None[i].style.display = "block";
        } else {
            h2None[i].style.display = "none";
        }
    }
}

var slide_bar = document.getElementById("slide_bar");
var active_bar = slide_bar.getElementsByClassName("img_txt_cont");

for (let i = 0; i < active_bar.length; i++) {
    active_bar[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
    
}
