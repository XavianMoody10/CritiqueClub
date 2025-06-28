import axios from "axios";

async function getMoviesCollectionByGenreRequest(mediaType, genreId, page) {
  const url = `http://localhost:3001/discover/${mediaType}/${genreId}/${page}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw new Error(error.response.data);
    }

    throw new Error(error.message);
  }
}

export { getMoviesCollectionByGenreRequest };
