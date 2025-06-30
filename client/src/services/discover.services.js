import axios from "axios";

async function getMoviesCollectionByGenreRequest(mediaType, genreId, page) {
  const url = `${
    import.meta.env.VITE_BACKEND_SERVER
  }/discover/${mediaType}/${genreId}/${page}`;

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
