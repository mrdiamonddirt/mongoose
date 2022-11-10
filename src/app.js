require('./db/connection');
const yargs = require('yargs');
const mongoose = require('mongoose');
const {createMovie, readMovie, updateMovie, deleteMovie} = require('./movies/functions');

async function myApp(yargsObject) {
    if (yargsObject.create) {
        //code to add a movie
        await createMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director});
    } else if (yargsObject.read) {
        await readMovie();
        // code to list all movies
    } else if (yargsObject.update) {
        // code to update a movie
        await updateMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director});
        console.log(updateMovie)
    } else if (yargsObject.delete) {
        // code to delete a movie
        await deleteMovie({title: yargsObject.title});
        if (deleteMovie === 1 ) {
            console.log('Movie Deleted')
        } else {
            console.log('Movie Not Found')
        }
    } else {
        console.log('Please enter a valid command');
    };
    await mongoose.disconnect();
};

myApp(yargs.argv);