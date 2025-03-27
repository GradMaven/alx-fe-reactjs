import { useState } from "react";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return;
    }
    setLoading(true);
    try {
      const data = await onSearch({ query, location, minRepos });
      setResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (Optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Repositories (Optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4 text-blue-600">Loading...</p>}

      {results.length > 0 && (
        <div className="mt-6">
          <h2 className="text-lg font-bold">Results:</h2>
          <ul className="space-y-2">
            {results.map((user) => (
              <li key={user.id} className="p-2 bg-gray-100 rounded shadow">
                <p>{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
