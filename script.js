/* Typing code */

var sliderCounter = 0;
var sliderContent = [
    "Laiba",
    " Web'Developer",
    "Forantend",
    "Backend",
    "Coder 'Girl",


];

var SliderValue = document.querySelector("#SliderValue");

function slide() {
    if (sliderCounter >= sliderContent.length) {

    }

    SliderValue.innerHTML = "";
    SliderValue.classList.remove("holder-animation")
    void SliderValue.offsetWidth;
    SliderValue.classList.add("holder-animation")

    for (i = 0;i < sliderContent[sliderCounter].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderContent[sliderCounter] [i];

        if (letterDiv.innerHTML == "") {
            letterDiv.innerHTML = "&nbsp;";
           }
            letterDiv.classList.add("start")
            letterDiv.classList.add("animation")
            letterDiv.style.animationDelay = i / 10 + "s";
            SliderValue.appendChild(letterDiv);
    }
sliderCounter++;
}

slide();
setInterval(slide, 2000);

/* toggle menu */

$('.menu-btn').click(function(){
    $('.menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");

});
/*scroll animation*/
const sr = ScollReveal({
    origin: "top",
    disance: "80px",
    duration: 2000,
    reset: true
});

sr.reveal(".featured-text" ,{});
sr.reveal(".home-img", {delay: 200});

sr.reveal(".heading", {});
















