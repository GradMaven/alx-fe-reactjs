

import axios from 'axios';

const API_URL = 'https://api.github.com/users/';
const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; 


const BASE_URL = 'https://api.github.com';

const fetchAdvancedUserData = async (params) => {
  try {
    const queryParts = [];
    
    if (params.username) queryParts.push(`${params.username} in:login`);
    if (params.location) queryParts.push(`location:${params.location}`);
    if (params.minRepos) queryParts.push(`repos:>${params.minRepos}`);
    if (params.language) queryParts.push(`language:${params.language}`);
    
    const queryString = queryParts.join(' ');
    const perPage = 10;
    
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: queryString,
        page: params.page || 1,
        per_page: perPage
      }
    });

    // Fetch detailed info for each user
    const detailedUsers = await Promise.all(
      response.data.items.map(user => 
        axios.get(`${BASE_URL}/users/${user.login}`)
          .then(res => res.data)
          .catch(() => null) // Skip if user details fail to load
      )
    );

    return {
      ...response.data,
      items: detailedUsers.filter(user => user !== null) // Filter out any failed requests
    };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error("Looks like we cant find any users matching your criteria");
    }
    throw error;
  }
};

export { fetchAdvancedUserData };

