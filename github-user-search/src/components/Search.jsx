// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData, fetchAdvancedUserData } from '../services/githubService';

const Search = () => {
  const [searchParams, setSearchParams] = useState({
    username: '',
    location: '',
    minRepos: '',
    language: ''
  });
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  // Basic search using fetchUserData
  const handleBasicSearch = async (username) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchUserData(username);
      setUserData([data]); // Convert to array to match display logic
      setHasMore(false);
    } catch (err) {
      setError("Looks like we cant find the user");
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };

  // Advanced search using fetchAdvancedUserData
  const handleAdvancedSearch = async () => {
    setLoading(true);
    setError(null);
    setPage(1);
    try {
      const data = await fetchAdvancedUserData({ ...searchParams, page: 1 });
      setUserData(data.items);
      setHasMore(data.total_count > data.items.length);
    } catch (err) {
      setError("Looks like we cant find any users matching your criteria");
      setUserData([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchParams.username && !searchParams.location && !searchParams.minRepos && !searchParams.language) {
      await handleBasicSearch(searchParams.username);
    } else {
      await handleAdvancedSearch();
    }
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const data = await fetchAdvancedUserData({ ...searchParams, page: nextPage });
      setUserData(prev => [...prev, ...data.items]);
      setHasMore(data.total_count > (nextPage * data.items.length));
      setPage(nextPage);
    } catch (err) {
      setError("Failed to load more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">GitHub User Search</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-8">
        {/* ... (rest of the form JSX remains the same) ... */}
      </form>

      {/* ... (rest of the component JSX remains the same) ... */}
    </div>
  );
};

export default Search;
