import { useState, useEffect } from "react";

function Blog() {
    // var to hold the api data
    const [blogPosts, setBlogPosts] = useState([]);

    // when component "mounts" (aka loads), get external api data using Fetch
    // the [] at the end tells React to only run this effect ONCE when component mounts
    useEffect(() => {
        fetch('https://blog-demo-d7iq.onrender.com/api/posts')
        .then((response) => response.json())
        .then((blogPosts) => setBlogPosts(blogPosts));
        console.log(blogPosts);
    },[]);

    return (
        <div className="container">
            <h1>Latest Random Thoughts</h1>
            <ul className="list-group">
                {blogPosts.map((post) => (
                    <li className="list-group-item" key={post.postId}>
                        <h2><i className="bi bi-substack"></i> {post.title}</h2>
                        <div>
                            {(post.body).toString().substring(0,100)} ... 
                            <a href={`/post/${post.postId}`} className="btn btn-info float-end">
                                <i className="bi bi-book"></i> Read More
                            </a>
                        </div>
                        <div>
                            Posted: 
                                <span className="badge text-bg-secondary m-1">
                                    {new Date(post.date).toLocaleDateString()}
                                </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Blog;