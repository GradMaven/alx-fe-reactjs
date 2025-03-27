import { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (filters) => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const userData = await fetchUserData(filters);
      setUsers(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p className="text-center mt-4 text-blue-600">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="p-4 bg-white rounded-lg shadow-md">
            <img src={user.avatar_url} alt={user.login} className="w-24 h-24 mx-auto rounded-full" />
            <h2 className="text-xl font-semibold text-center mt-2">{user.login}</h2>
            <p className="text-center text-gray-600">{user.location || "No location available"}</p>
            <p className="text-center text-gray-600">Repositories: {user.public_repos || "N/A"}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-blue-500 mt-2"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
