const Button1 = document.getElementById("Snare")
const Button2 = document.getElementById("Tink")
const Button3 = document.getElementById("Tom")

Button1.addEventListener('click', function() {
  document.getElementById("snare").play()
})

Button2.addEventListener('click', function() {
  document.getElementById("tink").play()
})

Button3.addEventListener('click', function() {
  document.getElementById("tom").play()
})

Button1.addEventListener('mouseenter', function() {
  document.getElementById("snare").play()
})

Button2.addEventListener('mouseenter', function() {
  document.getElementById("tink").play()
})

Button3.addEventListener('mouseenter', function() {
  document.getElementById("tom").play()
})
