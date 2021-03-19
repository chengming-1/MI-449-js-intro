const snareButton = document.getElementById("snare-button")
const tinkButton = document.getElementById("tink-button")
const tomButton = document.getElementById("tom-button")

snareButton.addEventListener('click', function() {
  document.getElementById("snare-audio").play()
})

tinkButton.addEventListener('click', function() {
  document.getElementById("tink-audio").play()
})

tomButton.addEventListener('click', function() {
  document.getElementById("tom-audio").play()
})

snareButton.addEventListener('mouseenter', function() {
  document.getElementById("snare-audio").play()
})

tinkButton.addEventListener('mouseenter', function() {
  document.getElementById("tink-audio").play()
})

tomButton.addEventListener('mouseenter', function() {
  document.getElementById("tom-audio").play()
})
