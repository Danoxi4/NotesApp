const fs = require('fs');
const chalk = require('chalk');

const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    
    } catch (error) {
        return []
    }

}

const addNote = function (title, body){

    const notes = loadNotes()
    const duplicates = notes.filter(note => note.title === title)

    if (duplicates.length == 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green.inverse("Added notes"))
        }
    else {
        console.log(chalk.red.inverse("note title already taken"))
    }
}

const removeNote = function (title){

    const notes = loadNotes()
    const search = notes.filter(note => note.title === title)

    if(search.length != 0){
        notes.splice(search.index)
        saveNotes(notes)
        console.log(chalk.green.inverse("note removed"));
    }
    else {
        console.log(chalk.red.inverse("there is no such note"))
    }


}

const saveNotes = function (notes) {

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)

}

module.exports = {

    addNote,
    removeNote,

}