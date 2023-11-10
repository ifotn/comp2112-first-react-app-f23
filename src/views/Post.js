
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Parser } from 'html-to-react';

function Post() {
    const [blogPost, setBlogPost] = useState([]);
    // read id parameter from url
    const { id } = useParams();

    // run effect when component mounts with id dependency
    useEffect(() => {
        document.title = 'Blog Post';

        // fetch the selected blog post from the api using the url param value at the end
        fetch(`https://blog-demo-d7iq.onrender.com/api/posts/${id}`)
        .then((response) => response.json())
        .then((blogPost) => {
            setBlogPost(blogPost[0])
            console.log(blogPost)
        });
    },[id]);

    return (
        <div className="container">
            <h1>{blogPost.title}</h1>
            <h5><i className="bi bi-person-circle"></i> {blogPost.username}</h5>
            <h6>{new Date(blogPost.date).toLocaleString()}</h6>
            <div>{Parser().parse(blogPost.body)}</div>
            <a href="/blog" className="btn btn-info m-3">
                <i className="bi bi-skip-backward-fill"></i> Back to Blog
            </a>
        </div>
    )
}

export default Post;