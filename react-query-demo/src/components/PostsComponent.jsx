import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
    const response = await axios.get ("https://jsonplaceholder.typicode.com/posts");
    return response.data;
};

const PostsComponent = () => {
    const { data, error, isLoading, refetch } = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        staleTime: 5000, // Caches data for 5 seconds
      });
    
      if (isLoading) return <p className="text-center">Loading posts...</p>;
      if (isError) return <p className="text-center text-red-500">Error: {isError.message}</p>;
    
      return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-bold mb-4">Posts</h2>
          <button
            onClick={() => refetch()}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Refresh Posts
          </button>
          <ul>
            {data.slice(0, 10).map((post) => (
              <li key={post.id} className="border-b p-2">
                <h3 className="font-semibold">{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default PostsComponent;
