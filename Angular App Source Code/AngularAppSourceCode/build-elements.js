const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/Atlantis1/runtime.js',
    './dist/Atlantis1/polyfills.js',
    './dist/Atlantis1/scripts.js',
    './dist/Atlantis1/main.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/elements.js');
  await fs.copyFile('./dist/elements/styles.css', 'elements/styles.css')
  await fs.copy('./dist/elements/assets/', 'elements/assets/' )

})()