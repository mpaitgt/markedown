const userText = document.getElementById('editor');
const preview = document.getElementById('preview');

window.onload = function() {
  userText.value = 
  `
  # hello world
  ---
  ## my name is matt
  [My Bandcamp!](https://mattpignatore.bandcamp.com/)

  HTML : \`<div></div>\`

  ### here's a list of things i like:
  - movies
  - cooking
  - music
  - coding

  \`\`\`
  const thisIsCool = true;

  function isThisCool() {
    if (thisIsCool) {
      console.log('confirmed');
    } else {
      console.log('well then');
    }
  }

  isThisCool(thisIsCool);
  \`\`\`

  __this is bold!__
  _this is italic_
  ~~this is cross~~
  > blockquote!!!
  

  `;

  preview.innerHTML = marked(userText.value);
}

document.addEventListener('keyup', function() {
  preview.innerHTML = marked(userText.value);
})