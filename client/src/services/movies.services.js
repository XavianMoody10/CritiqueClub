import axios from "axios";

async function getMoviesByListRequest(list, page) {
  const url = `http://localhost:3001/movies/list/${list}/${page}`;

  try {
    if (!list) {
      throw new Error("list value is required");
    }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw new Error(error.response.data);
    }

    throw new Error(error.message);
  }
}

async function getMovieDetailsRequest(id) {
  const url = `http://localhost:3001/movies/details/${id}`;

  try {
    if (!id) {
      throw new Error("id value is required");
    }

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw new Error(error.response.data);
    }

    throw new Error(error.message);
  }
}

export { getMoviesByListRequest, getMovieDetailsRequest };
