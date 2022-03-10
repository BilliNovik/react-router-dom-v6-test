import { useParams, useNavigate } from "react-router-dom";
import React from "react";

function Post() {
  const {id} = useParams()
  const [post, setPost] = React.useState({});
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  React.useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(json => setPost(json))
    }, [id])
  
  return (
    <div className="container">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <a className="coursor" onClick={goBack}>Go back</a>
    </div>
  );
}
  
export default Post;