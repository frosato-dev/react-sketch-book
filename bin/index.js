#! /usr/bin/env node
const path = require('path')
const program = require('commander')
//
const tasks = require('./tasks')
const render = require('./render')

let DEFAULT_REGEXP = /\w+.sketch.js/gi

program
    .option('-p, --path [path]', 'Project path, relative to node_modules')
    .option('-r, --regexp [regexp]', 'A regexp that match the file that needed to be imported')
    .parse(process.argv)


// Get Path Param
if (!program.path) {
    console.log(
        `You must provide the path of your project, relatively to you node_module folder. 
         Use --path or -p flag. 
         eg: $ sketchbook --path <YOUR_PATH>`
    )
    process.exit(-1)
}

const projectFolder = path.resolve(process.env.PWD, program.path)

// Get Regexp Param
let regexp = DEFAULT_REGEXP
if (program.regexp) {
    try {
        regexp = new RegExp(program.regexp);
    } catch(e) {
        console.log(`The given regexp: ${program.regexp} is invalid.`)
        process.exit(-1)
    }
}

// Run Scripts
tasks.findFiles(projectFolder, regexp)
    .then(tasks.writeImports)
    .then(render.once)
    .catch(error => {
        console.log(error)
        process.exit(-1)
    })
