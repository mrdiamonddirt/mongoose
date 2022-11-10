require('./db/connection');
const yargs = require('yargs');
const mongoose = require('mongoose');


async function myApp(yargsObject) {
    
    if (yargsObject.create) {
        //code to add a movie
    } else if (yargsObject.read) {
        // code to list all movies
    } else if (yargsObject.update) {
        // code to update a movie
    } else if (yargsObject.delete) {
        // code to delete a movie
    } else {
        console.log('Please enter a valid command');
    };
    await mongoose.disconnect();
};

myApp(yargs.argv);