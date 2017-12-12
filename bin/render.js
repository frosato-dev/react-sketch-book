#! /usr/bin/env node
const { exec } = require('child_process')
const path = require('path')

const sketchBookRootFolder = path.resolve(__dirname, '../')

module.exports = {
    once: () => new Promise((resolve, reject) => {
        return exec('npm run render:once', { cwd: sketchBookRootFolder }, (error, stdout, stderr) => {
            if (error) {
                return reject(error)
            }
            console.log(`stdout: ${stdout}`)
            console.log(`stderr: ${stderr}`)
            return resolve()
        })
    })
}

