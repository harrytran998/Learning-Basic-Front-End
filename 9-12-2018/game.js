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
const message = document.getElementById("message")

let colorCliked = null

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i]
  squares[i].addEventListener('click', function () {
    colorCliked = this.style.backgroundColor
    colorDisplay.textContent = colorCliked
    if (colorCliked === colors[3]) {
      message.textContent = 'Correct !'
    } else {
      message.textContent = 'Incorrect !'
    }
  })

}
