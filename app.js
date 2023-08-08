const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs') 

yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder : {
        title : {
            describe: 'Note title',
            demandOptions: true,
            type: 'string',
        },
        body : {
            describe : 'Note body',
            demandOptions: true,
            type: 'string',
        }
    },

    handler : function (argv){
        notes.addNote(argv.title, argv.body)
        }
    
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder : {
        title : {
            describe: 'Note title',
            demandOptions: true,
            type: 'string',
        }
    },

    handler : function (argv){
        notes.removeNote(argv.title)
        }
    
})

yargs.parse()