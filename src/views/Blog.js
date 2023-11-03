import React, { useState, useEffect } from 'react';

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // This code runs when the component is mounted (equivalent to componentDidMount)
    fetch('http://localhost:4000/api/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    // This code runs whenever the component re-renders (equivalent to componentDidUpdate)
    console.log('Component updated');
  });

  return (
    <div className="container">
      <h1>Latest Posts</h1>
      <ul className="list-group">
        {data.map((post) => (
          <li key={post.postId} className="list-group-item">
            <h2><i className="bi bi-substack"></i> {post.title}</h2>
            <div>
                {(post.body).toString().substring(0,100)}...<a className="btn btn-info m-1 float-end" href={`/posts/${post.postId}`}><i className="bi bi-book"></i> Read More</a>
            </div>
            <div>Posted: <span className="badge text-bg-secondary">{(post.date)}</span></div>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
