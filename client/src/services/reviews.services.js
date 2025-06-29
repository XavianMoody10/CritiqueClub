import axios from "axios";

async function getMediaReviewsRequest(mediaId) {
  const url = `http://localhost:3001/reviews/${mediaId}`;

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

  const url = `http://localhost:3001/reviews`;

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
