import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchUserData = async ({ query, location, minRepos }) => {
  try {
    let searchQuery = `q=${query}`;

    if (location) {
      searchQuery += `+location:${location}`;
    }
    if (minRepos) {
      searchQuery += `+repos:>${minRepos}`;
    }

    const response = await axios.get(`${BASE_URL}?${searchQuery}`);
    return response.data.items;
  } catch (error) {
    throw new Error("User not found or API limit exceeded");
  }
};
