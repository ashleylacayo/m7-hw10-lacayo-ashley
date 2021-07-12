// acquire references to page elements
var nameSpan = document.querySelector('span')
var formEl = document.querySelector('form')
var clear = document.querySelector('#clear')
var textarea = document.querySelector('textarea')

// Retrieve name and note content from cookies and localstorage
// Then apply them to elements on the page
// YOUR CODE HERE

//var noteName = document.cookie.split('; ')
var noteName = nameSpan.textContent
document.cookie = noteName
  
var notes = localStorage.getItem('notes')
if (notes) {
  textarea.textContent = notes 
}
else {
  textarea.textContent = 'Type your note'
}
//var formEl = localStorage.getItem('form')
//console.log(formEl)
//var noteName = parseInt(document.cookie)

//var textarea = JSON.parse(localStorage.getItem('textarea')) || []
//renderTextarea()

//console.log(cookie)
//var spanName = localStorage.getItem('span')
//if (spanName) {
  //nameEl.textContent = span
//} else {
  //nameEl.textContent = 'Your Name'
//}


formEl.onsubmit = function(e) {
  // prevents form submission
  e.preventDefault()
  // save name element's content to cookies
  // save textarea's content to localstorage
  // YOUR CODE HERE
  noteName = nameSpan.value
  localStorage.setItem('span', noteName)
  nameSpan.textContent = noteName


  notes = textarea.value
  localStorage.setItem('notes', notes)
  textarea.textContent = notes
  // triggers thumbs up animation
  this.elements.save.classList.add('emoji')
}

clear.onclick = function() {
  // Clear textarea's value
  // Clear localstorage's content
  // YOUR CODE HERE
  
  textarea.value = " "
  localStorage.setItem('notes', "")

  // triggers thumbs up animation
  this.classList.add('emoji')
}

// this code allows repeated thumbs up animations
function endThumbsUp() {
  this.classList.remove('emoji')
}

formEl.elements.save.onanimationend = endThumbsUp
clear.onanimationend = endThumbsUp