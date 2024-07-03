function opennav() {
    document.getElementById("navlist").classList.toggle("start-0");
    document.querySelector(".menuicon").classList.toggle("cross");
    document.body.classList.toggle("overflowhidden");
}
const toggler = document.getElementById("toggler");
toggler.addEventListener("click", function () {
    toggler.classList.toggle("justify-content-end");
    document.querySelector(".monthlydoller").classList.toggle("d-none");
    document.querySelector(".yearlydoller").classList.toggle("d-none");
    document.querySelector(".platinum-month").classList.toggle("d-none");
    document.querySelector(".platinum-year").classList.toggle("d-none");
    document.querySelector(".monthly").classList.toggle("d-none");
    document.querySelector(".yearly").classList.toggle("d-none");
})

$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    // fade: true,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: ".btnnext",
    prevArrow: ".btnprev",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        },
        {
            breakpoint: 1130,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 815,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 737,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 320,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
            }
        }
    ]
});

// scroll top btn 
const topBtn = document.querySelector(".topBtn")

window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
        topBtn.classList.add("show")
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
})