import { useState, useEffect } from "react";
import { Parser } from "html-to-react";

function Blog() {
    // var to hold the api data
    const [blogPosts, setBlogPosts] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    // when component "mounts" (aka loads), get external api data using Fetch
    // the [] at the end tells React to only run this effect ONCE when component mounts
    useEffect(() => {
        try {
             fetch('https://blog-demo-jwt.onrender.com/api/posts')
            .then((response) => response.json())
            .then((blogPosts) => setBlogPosts(blogPosts));
            console.log(blogPosts);
        }
        catch (error) {
            console.log(`error: ${error}`);
            setErrorMessage(error);
        }
           
    },[]);

    if (errorMessage) {
        return (
            <div className="container">
                <div className="alert alert-danger mt-3">{errorMessage}</div>
            </div>
        );
    }
    else {
        return (
            <div className="container">
                <h1>Latest Random Thoughts</h1>
                <a href="/create-post" className="btn btn-info mb-3">
                    <i className="bi bi-plus-circle"></i> Create New Post
                </a>
                <ul className="list-group">
                    {blogPosts.map((post) => (
                        <li className="list-group-item" key={post._id}>
                            <h2><i className="bi bi-substack"></i> {post.title}</h2>
                            <div>
                                {Parser().parse((post.body).toString().substring(0,100))} ... 
                                <a href={`/post/${post._id}`} className="btn btn-info float-end">
                                    <i className="bi bi-book"></i> Read More
                                </a>
                            </div>
                            <div>
                                Posted: 
                                    <span className="badge text-bg-secondary m-1">
                                        {new Date(post.date).toLocaleString()}
                                    </span>
                                    by {post.username}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
    
}

export default Blog;