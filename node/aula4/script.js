// File System -> *ler a documentação* -> API do Note para trabalhar arquivos
// Recursão

const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir()
  walk(files, rootDir)
}

async function walk(files) {
  for(let file of files) {
    const fileFullPath = path.resolve(rootDir, file)
    const stats = await fs.stat(fileFullPath)

    if(stats.isDirectory()) {
      readdir(fileFullPath)
      continue
    }
    console.log(file, stats.isDirectory);
  }
}

readdir('Estudos Web Developer\CursoJSFullstack')