const yargs = require('yargs');
const MovieCollection = require('./model');

async function createMovie(movieObject) {
    try {
        const newMovie = await MovieCollection.create(movieObject);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
}

async function readMovie() {
    try {
        const allMovies = await MovieCollection.find();
        console.log(allMovies);
        let movieList = allMovies.map((doc) => doc.toObject());
        // return all movies in a console.table
        console.table(movieList);
    } catch (error) {
        console.log(error);
    }
}

async function updateMovie(yargsObject) {
    try {
        const updatedMovie = await MovieCollection.findOneAndUpdate(yargsObject.title, {
            $set: {
                title: yargs.argv.title,
                actor: yargs.argv.actor,
                director: yargs.argv.director,
                new: true
            }
            
        });
        console.log(updatedMovie);
        return updatedMovie;
    } catch (error) {
        console.log(error);
    }
}

async function deleteMovie(movieObject) {
    try {
        const deletedMovie = await MovieCollection.findOneAndDelete(movieObject);
        console.log(deletedMovie);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createMovie, readMovie, updateMovie, deleteMovie};