console.log("v1.0.8 script working")
let thereIsNoGame = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://590384729-104728463944275026.preview.editmysite.com/uploads/b/139890129-446136497302390429/files/ting.xml"
let slope = "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@843c1a10f4bf78019b513ea7a8a8c3146f3dfa59/2slope.xml"
let cookieClicker = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@0d9afabd2522344a702e1b692ad58039f6290b0d/build/c-c/cc.xml"
let elasticMorty = "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html"
let pixelShooter = "https://94bfktj403i6m18as4vkvtreqd0ohci4-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://274019683-173520394482650759.preview.editmysite.com/uploads/b/139890129-131715539788281629/files/ps.xml"
let monkeyMart = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://218463058-163927403382736103.preview.editmysite.com/uploads/b/139890129-297434511671085883/files/mm.xml"








const searchInput = document.getElementById('search-input');
const results = document.getElementById('results');

const elements = [
  { id: 'tING', name: 'There is no game' },
  { id: 'element2', name: 'Element 2' },
  { id: 'element3', name: 'Element 3' },
  { id: 'element4', name: 'Element 4' },
  { id: 'element5', name: 'Element 5' },
];

function filter() {
  const value = searchInput.value.toLowerCase();
  results.innerHTML = '';
  if (!value) return;
  const matches = elements.filter(element => element.name.toLowerCase().includes(value));
  if (!matches.length) return;
  matches.forEach(match => {
    const li = document.createElement('li');
    li.textContent = match.name;
    li.addEventListener('click', () => {
      window.location.href = `#${match.id}`;
    });
    results.appendChild(li);
  });
}

