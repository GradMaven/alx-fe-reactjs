
import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const SEARCH_USERS_ENDPOINT = 'https://api.github.com/search/users?q=';

const fetchAdvancedUserData = async (params) => {
  try {
    const queryParts = [];
    
    if (params.username) queryParts.push(`${params.username} in:login`);
    if (params.location) queryParts.push(`location:${params.location}`);
    if (params.minRepos) queryParts.push(`repos:>${params.minRepos}`);
    if (params.language) queryParts.push(`language:${params.language}`);
    
    const queryString = queryParts.join(' ');
    const perPage = 10;
    
    // Explicitly use the SEARCH_USERS_ENDPOINT with q parameter
    const apiUrl = `${SEARCH_USERS_ENDPOINT}${encodeURIComponent(queryString)}`;
    
    const response = await axios.get(apiUrl, {
      params: {
        page: params.page || 1,
        per_page: perPage
      }
    });

    // Fetch detailed info for each user
    const detailedUsers = await Promise.all(
      response.data.items.map(user => 
        axios.get(`${BASE_URL}/users/${user.login}`)
          .then(res => res.data)
          .catch(() => null)
    );

    return {
      ...response.data,
      items: detailedUsers.filter(user => user !== null)
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Looks like we cant find any users matching your criteria");
    }
    throw error;
  }
};

export { fetchAdvancedUserData };
