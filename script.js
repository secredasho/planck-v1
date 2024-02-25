function createIframe() {
  var win = window.open("about:blank", "Iframe Window");
  win.document.write(`
    <iframe src="https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://427396048-642845047394716217.preview.editmysite.com/uploads/b/139890129-761103484729797659/files/ovof.xml" style="width:100%; height:100%; border:none;"></iframe>
  `);
}
console.log("v1.0.0 commit update 2")