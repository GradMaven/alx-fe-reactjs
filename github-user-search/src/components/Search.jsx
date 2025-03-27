
import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={searchParams.username}
              onChange={handleInputChange}
              placeholder="e.g. octocat"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={searchParams.location}
              onChange={handleInputChange}
              placeholder="e.g. San Francisco"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700 mb-1">
              Minimum Repositories
            </label>
            <input
              type="number"
              id="minRepos"
              name="minRepos"
              value={searchParams.minRepos}
              onChange={handleInputChange}
              placeholder="e.g. 10"
              min="0"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
              Primary Language
            </label>
            <input
              type="text"
              id="language"
              name="language"
              value={searchParams.language}
              onChange={handleInputChange}
              placeholder="e.g. JavaScript"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search Users'}
        </button>
      </form>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-6">
        {userData.map(user => (
          <div key={user.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <img 
                src={user.avatar_url} 
                alt={`${user.login}'s avatar`} 
                className="h-32 w-32 rounded-full border-2 border-gray-200"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-800">
                {user.name || user.login}
                {user.name && <span className="text-gray-500 text-sm ml-2">({user.login})</span>}
              </h2>
              <p className="text-gray-600 mt-1">{user.bio || 'No bio available'}</p>
              
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Location:</span>
                  <p className="text-gray-800">{user.location || 'Not specified'}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Public Repos:</span>
                  <p className="text-gray-800">{user.public_repos || 'N/A'}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Followers:</span>
                  <p className="text-gray-800">{user.followers || '0'}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Following:</span>
                  <p className="text-gray-800">{user.following || '0'}</p>
                </div>
              </div>
              
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
              >
                View Full Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-150 ease-in-out"
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
