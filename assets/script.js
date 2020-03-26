const userText = document.getElementById('editor');
const preview = document.getElementById('preview');

window.onload = function() {
  userText.value = 
  `
  # hello world
  ## my name is matt

  `;

  preview.innerHTML = marked(userText.value);
}

document.addEventListener('keyup', function() {
  preview.innerHTML = marked(userText.value);
})





//# Marked in the browser\n\nRendered by **marked**.