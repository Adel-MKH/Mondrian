let topYellow = document.getElementById("N1")
let topRed = document.getElementById("N2")
let topBlue = document.getElementById("N3")
let middleRed = document.getElementById("N4")
let middleBlue = document.getElementById("N5")
let bottomRed = document.getElementById("N6")
let bottomYellow = document.getElementById("N7")


topYellow.addEventListener("click", changeColors, false);
topRed.addEventListener("click", changeColors, false);
topBlue.addEventListener("click", changeColors, false);
middleRed.addEventListener("click", changeColors, false);
middleBlue.addEventListener("click", changeColors, false);
bottomRed.addEventListener("click", changeColors, false);
bottomYellow.addEventListener("click", changeColors, false);


function changeColors() {
  if (this.classList.contains("bg_yellow")) {
    this.classList.remove("bg_yellow")
    this.classList.add("bg_blue")
  } else if (this.classList.contains("bg_blue")) {
    this.classList.remove("bg_blue")
    this.classList.add("bg_red")
  } else if (this.classList.contains("bg_red")) {
    this.classList.remove("bg_red")
    this.classList.add("bg_yellow")
  }
}
