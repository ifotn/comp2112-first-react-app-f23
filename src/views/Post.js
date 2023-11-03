import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        document.title = 'Blog Post';

        console.log(`id: ${id}`);
        // This code runs when the component is mounted (equivalent to componentDidMount)
        fetch(`http://localhost:4000/api/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    },[id]);

    return (
        <section className="container">
            <h1>{data.title}</h1>
            <div>{data.body}</div>
            <a href="/blog" className="btn btn-info m-3">Back to Blog</a>
        </section>
    );
}

export default Post;