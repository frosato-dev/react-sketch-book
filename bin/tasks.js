#! /usr/bin/env node
const path = require('path')
const fs = require('fs')
const recursive = require('recursive-readdir')

const sketchbookRootFolder = path.resolve(__dirname, '../')


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
     * This method will write into `src/imports.js` imports for all given files path.
     * It will also export them all as default
     *
     * eg:
     * const Component0 from 'file/path/given/as/param'
     * const Component1 from 'file/path/given/as/param'
     * export default { Component0, Component1 }
     *
     * @param {Array<String>} files - The absolute path to component files
     */
    writeImports: (files) => new Promise((resolve) => {
        let stream = fs.createWriteStream(path.resolve(sketchbookRootFolder, 'src/imports.js'))

        // Start Stream
        stream.once('open', () => {
            // Imports
            files.forEach(file => {
                stream.write(`import '${file}'\n`)
            })

            // Exports
            stream.write(`export default {} \n`)

            // Close Stream
            stream.end()

            resolve()
        })
    })
}






