

import { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(false);
    setUser(null);
    const userData = await fetchUserData(query);
    if (userData) {
      setUser(userData);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user</p>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.name} width={100} />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;
