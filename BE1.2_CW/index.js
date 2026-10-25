const { initializeDatabase } = require("./db/db.connect");

const fs = require("fs");
const Movie = require("./models/movie.models");

initializeDatabase();

const jsonData = fs.readFileSync("movies.json", "utf-8");
const moviesData = JSON.parse(jsonData);

function seedData(){
    try {
        for (const movieData of moviesData) {
            const newMovie = new Movie({
                title: movieData.title,
                director: movieData.director,
                releaseYear: movieData.releaseYear,
                genre: movieData.genre,
                actors: movieData.actors,
                language: movieData.language,
                country: movieData.country,
                rating: movieData.rating,
                plot: movieData.plot,
                awards: movieData.awards,
                poaterUrl: movieData.posterUrl,
                trailerUrl: movieData.trailerUrl,
            });
            newMovie.save();

            }
    } catch (error) {
        console.log("Error seeding data", error);
    }
}

seedData();
