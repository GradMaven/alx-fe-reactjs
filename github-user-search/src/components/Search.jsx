import { useState } from 'react';

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };
  const Search = ({ user, loading, error }) => {
      
  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub User"
      />
      <button type="submit">Search</button>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Looks like we can't find the user</p>}
        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} width={100} />
            <h2>{user.name || user.login}</h2>
            <p>{user.bio}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
        )}
      </div>
    </form>
  );
}};

export default Search;
