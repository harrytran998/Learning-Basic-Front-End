const colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
]
const squares = document.querySelectorAll(".square")
const colorDisplay = document.getElementById("colorDisplay")
let colorCliked = null

colorDisplay.textContent = colorCliked

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i]
  squares[i].addEventListener('click', function() {
    alert(this.style.backgroundColor)
  })
}
