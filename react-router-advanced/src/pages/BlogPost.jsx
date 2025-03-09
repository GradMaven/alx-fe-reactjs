import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  return <h2 className="text-center mt-6">Reading Blog Post #{id}</h2>;
};

export default BlogPost;
