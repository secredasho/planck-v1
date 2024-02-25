console.log("v1.0.8 script working")
let thereIsNoGame = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://590384729-104728463944275026.preview.editmysite.com/uploads/b/139890129-446136497302390429/files/ting.xml"
let slope = "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@843c1a10f4bf78019b513ea7a8a8c3146f3dfa59/2slope.xml"
let cookieClicker = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@0d9afabd2522344a702e1b692ad58039f6290b0d/build/c-c/cc.xml"
let elasticMorty = "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html"
let pixelShooter = "https://94bfktj403i6m18as4vkvtreqd0ohci4-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://274019683-173520394482650759.preview.editmysite.com/uploads/b/139890129-131715539788281629/files/ps.xml"
let monkeyMart = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://218463058-163927403382736103.preview.editmysite.com/uploads/b/139890129-297434511671085883/files/mm.xml"








const searchInput = document.getElementById('search-input');
const results = document.getElementById('results');
const buttonsContainer = document.getElementById('buttons-container');

const elements = [
  { id: 'button1', name: 'Button 1' },
  { id: 'button2', name: 'Button 2' },
  { id: 'button3', name: 'Button 3' },
  { id: 'button4', name: 'Button 4' },
  { id: 'button5', name: 'Button 5' },
];

function filter() {
  const value = searchInput.value.toLowerCase();
  results.innerHTML = '';
  buttonsContainer.innerHTML = '';
  if (!value) return;
  const matches = elements.filter(element => element.name.toLowerCase().includes(value));
  if (!matches.length) return;
  matches.forEach(match => {
    const li = document.createElement('li');
    li.textContent = match.name;
    li.addEventListener('click', () => {
      const button = document.getElementById(match.id);
      button.focus();
    });
    results.appendChild(li);
  });
  matches.forEach(match => {
    const button = document.createElement('button');
    button.id = match.id;
    button.textContent = match.name;
    button.addEventListener('click', () => {
      // Handle button click event
    });
    buttonsContainer.appendChild(button);
  });
}
