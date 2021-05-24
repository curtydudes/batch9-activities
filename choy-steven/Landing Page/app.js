

var aboutSection = document.querySelector(".about-us")
aboutSection.style.background = "red"
console.log(aboutSection)

aboutSection.addEventListener("click", function(){
    console.log("hello")
})

window.addEventListener("scroll", function(){console.log("loop")})

aboutSection.addEventListener("click", function(){
    aboutSection.classList.remove("click")
})

