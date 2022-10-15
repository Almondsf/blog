import { Link } from "react-router-dom";

const BlogList = ({ blogs, title}) => {
  return (
    <div className='blog-list'>
      <h2 className='text-2xl font-bold'>{title}</h2>
      {blogs.map((blog) => (
        <div className='blog-preview py-3' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className='text-pink-600 text-2xl font-bold'>{blog.title}</h2>
            <p>written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
