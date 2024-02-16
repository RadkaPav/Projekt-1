// NAVIGATION
const icon = document.querySelector(".fa-solid")
const navbar = document.querySelector(".navigation")

icon.addEventListener("click", function () {
    navbar.classList.toggle("show")
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars")
        icon.classList.add("fa-xmark")
    } else {
        icon.classList.remove("fa-xmark")
        icon.classList.add("fa-bars")
    }
})

//SCROLL
//links
const aboutLink = document.querySelector(".about-link")
const whatLink = document.querySelector(".what-do-link")
const tripsLink = document.querySelector(".trips-link")
const whereLink = document.querySelector(".where-go-link")
const reviewsLink = document.querySelector(".reviews-link")
const buttonUp = document.querySelector(".top")
//scrollgoals
const scrollAbout = document.querySelector(".about-us").offsetTop
const scrollWhat = document.querySelector(".what-we-do").offsetTop
const scrollTrips = document.querySelector(".our-trips").offsetTop
const scrollWhere = document.querySelector(".where-go").offsetTop
const scrollReviews = document.querySelector(".reviews").offsetTop

const scroll = (scrollGoal) => {
    window.scrollTo({
        top: scrollGoal,
        behavior: "smooth"
    })

}
aboutLink.addEventListener("click", function () {
    scroll(scrollAbout)
})
whatLink.addEventListener("click", function () {
    scroll(scrollWhat)
})
tripsLink.addEventListener("click", function () {
    scroll(scrollTrips)
})
whereLink.addEventListener("click", function () {
    scroll(scrollWhere)
})
reviewsLink.addEventListener("click", function () {
    scroll(scrollReviews)
})

//BUTTON UP
window.addEventListener("scroll", function () {
    if (Math.ceil(window.scrollY) > 500) {
        buttonUp.style.display = "block"
    }
    if (Math.ceil(window.scrollY) < 100) {
        buttonUp.style.display = "none"
    }

    buttonUp.addEventListener("click", function () {
        scroll(navbar)
        buttonUp.style.display = "none"
    })

})