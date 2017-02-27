const { ipcRenderer } = require('electron');
const loader = require('monaco-loader')
const fs = require('fs')

window.onload =() => {

 loader().then(monaco => {
   let editor = monaco.editor.create(document.getElementById('container'), {
     language: 'javascript',
     theme: 'vs-dark',
     automaticLayout: true
  })

  ipcRenderer.on('navigate', (e, url) => {
    url = url.slice(7);
    console.log(`Trying to read file from ${url}`);

    fs.readFile(url, 'utf8', (error, result) => {
      if (!error) {
        console.log(result);
      }

        editor.setModel(monaco.editor.createModel(result, 'javascript'));
    })
  });
})
}
