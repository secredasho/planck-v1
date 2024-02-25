console.log("v1.0.8 script working")
let thereIsNoGame = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://590384729-104728463944275026.preview.editmysite.com/uploads/b/139890129-446136497302390429/files/ting.xml"
let slope = "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@843c1a10f4bf78019b513ea7a8a8c3146f3dfa59/2slope.xml"
let cookieClicker = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@0d9afabd2522344a702e1b692ad58039f6290b0d/build/c-c/cc.xml"
let elasticMorty = "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html"
let pixelShooter = "https://94bfktj403i6m18as4vkvtreqd0ohci4-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://274019683-173520394482650759.preview.editmysite.com/uploads/b/139890129-131715539788281629/files/ps.xml"
let monkeyMart = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://218463058-163927403382736103.preview.editmysite.com/uploads/b/139890129-297434511671085883/files/mm.xml"






const searchInput = document.getElementById('search-input');
const results = document.getElementById('results');
const buttonsContainer = document.getElementById('buttons');
const buttons = buttonsContainer.getElementsByTagName('button');

function filter() {
  const value = searchInput.value.toLowerCase();
  results.innerHTML = '';
  if (!value) {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].style.display = 'none';
    }
    return;
  }
  const matches = [];
  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].textContent.toLowerCase().includes(value)) {
      matches.push(buttons[i]);
    }
  }
  if (!matches.length) return;
  results.innerHTML = '';
  matches.forEach(match => {
    const li = document.createElement('li');
    li.textContent = match.textContent;
    li.addEventListener('click', () => {
      match.focus();
    });
    results.appendChild(li);
  });
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('show');
    for (let j = 0; j < matches.length; j++) {
      if (buttons[i] === matches[j]) {
        buttons[i].classList.add('show');
        break;
      }
    }
  }
}