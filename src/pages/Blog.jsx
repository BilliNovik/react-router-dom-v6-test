import React from "react";
import { Link, useSearchParams } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('post') || ''; 

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    setSearchParams({post: query})
  }

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])
  
    return (
      <div className="container">
          <h1>Blog</h1>
          <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="search" name="search"/>
            <input type="submit" value="search"/>
          </form>
          <ul>
            {posts.filter(post => post.title.includes(postQuery)).map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}><li>{post.title}</li></Link>
            ))}
          </ul>
      </div>
    );
  }
  
  export default Blog;