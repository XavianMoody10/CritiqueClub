import axios from "axios";

async function getTrendingMediaRequest(media) {
  const url = `http://localhost:3001/trending/${media}`;

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

export { getTrendingMediaRequest };
