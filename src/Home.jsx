
//import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
 const{data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  return (
    <div className='Home font-quick'>
      {error && <div>{error}</div>} 
    { isPending && <div class="flex justify-center items-center">
  <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>}
      {blogs && (
        <BlogList blogs={blogs} title='All Blogs'  />
      )}
    </div>
  );
};

export default Home;
