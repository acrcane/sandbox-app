import axios from "axios";

export const requestsPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export const requestsPostsById = async (id) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data ? [data] : [];
  } catch (error) {
    if (error.response && error.response.status === 404) {
      return [];
    } else {
      throw error;
    }
  }
};
