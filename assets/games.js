console.log("v1.0.8 script working")
let game = " "
let thereIsNoGame = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://590384729-104728463944275026.preview.editmysite.com/uploads/b/139890129-446136497302390429/files/ting.xml"
let slope = "https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@843c1a10f4bf78019b513ea7a8a8c3146f3dfa59/2slope.xml"
let cookieClicker = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@0d9afabd2522344a702e1b692ad58039f6290b0d/build/c-c/cc.xml"
let elasticMorty = "https://d21u3ic0kp9e91.cloudfront.net/elasticman/0/index.html"
let pixelShooter = "https://94bfktj403i6m18as4vkvtreqd0ohci4-a-sites-opensocial.googleusercontent.com/gadgets/ifr?url=https://274019683-173520394482650759.preview.editmysite.com/uploads/b/139890129-131715539788281629/files/ps.xml"
let monkeyMart = "https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://218463058-163927403382736103.preview.editmysite.com/uploads/b/139890129-297434511671085883/files/mm.xml"
function openWindowWithIframe() {
    const win = window.open('', 'mywin', 'width=600,height=600');
    const iframe = win.document.createElement('iframe');
    iframe.src = game;
    iframe.style.height = '100%';
    iframe.style.width = '100%';
    win.document.body.appendChild(iframe);
}
function gameSorterSlope() {
    let game = slope
    openWindowWithIframe()
}

