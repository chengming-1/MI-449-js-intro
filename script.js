const snare = new Audio('snare.wav')
const tink = new Audio('tink.wav')
const tom = new Audio('tom.wav')
const Button1 = document.getElementById("music1")
const Button2 = document.getElementById("music2")
const Button3 = document.getElementById("music3")

Button1.addEventListener('click', function() {
  snare.play()
})

Button2.addEventListener('click', function() {
  tink.play()
})

Button3.addEventListener('click', function() {
  tom.play()
})

Button1.addEventListener('mouseenter', function() {
  snare.play()
})

Button2.addEventListener('mouseenter', function() {
  tink.play()
})

Button3.addEventListener('mouseenter', function() {
  tom.play()
})
