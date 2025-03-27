import axios from "axios";

const BASE_URL = "https://api.github.com/search/users?q=";

export const fetchUserData = async (query, location, minRepos) => {
  try {
    let searchQuery = `${BASE_URL}${query}`;
    if (location) searchQuery += `+location:${location}`;
    if (minRepos) searchQuery += `+repos:>${minRepos}`;

    const response = await axios.get(searchQuery);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};
