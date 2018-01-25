#! /usr/bin/env node
const path = require('path')
const fs = require('fs')
const recursive = require('recursive-readdir')

const sketchbookRootFolder = path.resolve(__dirname, '../')


const TMP_IMPORT_PATH = 'tmp/imports.js';


const ignoreFunc = (regexp) => (file, stats) => {
    if (stats.isDirectory()) {
        return false
    }
    return !file.match(regexp)
}

module.exports = {

    /**
     * findFiles
     *
     * This method will look into the projectFolder recursively in order to find path
     * that match the given RegExp
     *
     * @param {String} projectFolder - The path to the project folder to look in
     * @param {RegExp} regexp
     */
    findFiles: (projectFolder, regexp) => new Promise((resolve, reject) => {
        recursive(projectFolder, [ignoreFunc(regexp)], (err, files) => {
            if(err) { reject(err) }
            resolve(files)
        })
    }),

    /**
     * writeImports
     *
     * This method will write into `TMP_IMPORT_PATH` imports for all given files path.
     * This is aim load the file which will trigger the react-sketchbook function in the file
     *
     * eg:
     * var Component0 = require('file/path/given/as/param')
     * var Component1 = require('file/path/given/as/param')
     *
     * @param {Array<String>} files - The absolute path to component files
     */
    writeImports: (files) => new Promise((resolve) => {

        let stream = fs.createWriteStream(path.resolve(sketchbookRootFolder, TMP_IMPORT_PATH))

        // Start Stream
        stream.once('open', () => {
            // Imports
            files.forEach((file, index) => {
                stream.write(`var Component${index} = require('${file}')\n`)
            })

            // Close Stream
            stream.end()

            resolve()
        })


        resolve()
    })
}






