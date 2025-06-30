import axios from "axios";

async function getShowsByListRequest(list, page) {
  const url = `${import.meta.env.VITE_BACKEND_SERVER}/tv/list/${list}/${page}`;

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

async function getShowDetailsRequest(id) {
  const url = `${import.meta.env.VITE_BACKEND_URL}/tv/details/${id}`;

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

export { getShowsByListRequest, getShowDetailsRequest };
