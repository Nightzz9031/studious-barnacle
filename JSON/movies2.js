fetch('movies-list.json')
    .then(res => res.json())
    .then((moviesList) => {
        console.log(moviesList);
        moviesList.map((movieId) => {
            console.log(movieId);
        })
    })