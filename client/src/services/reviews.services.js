import axios from "axios";

async function getMediaReviewsRequest(mediaId) {
  const url = `${import.meta.env.VITE_BACKEND_SERVER}/reviews/${mediaId}`;

  try {
    if (!mediaId) {
      throw new Error("mediaId is required");
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

async function postMediaReviewsRequest(formData) {
  const { mediaId, review, rating } = formData;

  const url = `${import.meta.env.VITE_BACKEND_URL}/reviews`;

  try {
    if (!mediaId) {
      throw new Error("mediaId is required");
    }

    if (!review) {
      throw new Error("Please enter a review");
    }

    if (!rating) {
      throw new Error("Please enter a rating");
    }

    const response = await axios.post(url, formData);
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw new Error(error.response.data);
    }

    throw new Error(error.message);
  }
}

export { getMediaReviewsRequest, postMediaReviewsRequest };
