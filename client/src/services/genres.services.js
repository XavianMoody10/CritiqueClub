import axios from "axios";

async function getGenresRequest(media) {
  const url = `${import.meta.env.VITE_BACKEND_SERVER}/genres/${media}`;

  try {
    if (!media) {
      throw new Error("media value is null");
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

export { getGenresRequest };
