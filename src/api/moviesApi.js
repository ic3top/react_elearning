const BASE_URL = 'http://localhost:4000/movies';

export const getMoviesList = async (params) => {
    const res = await fetch(`${BASE_URL}?` + new URLSearchParams({...params, sortOrder: 'desc'}));
    return res.json();
}

export const getMovieById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
}

export const createMovie = async (movie) => {
    const res = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
    });
    return res.json();
}

export const deleteMovie = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    });
    return id;
};

export const updateMovie = async (movie) => {
    const res = await fetch(`${BASE_URL}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
    });
    return res.json();
}
