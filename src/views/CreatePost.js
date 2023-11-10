import { useForm } from "react-hook-form";
import { Editor } from '@tinymce/tinymce-react';
import { useRef, useState } from 'react';

function CreatePost(User) {
    const { register, handleSubmit, formState:{errors} } = useForm();
    const editorRef = useRef(null);
    const [errMessage, setErrMessage] = useState(null);

    const onSubmit = async (formData) => {
        try {
            // make sure body is not empty before posting to api
            let bodyContent = editorRef.current.getContent();
            if (bodyContent === '') {
                setErrMessage('Body is required');
                return;  // don't do anything else in this try block
            }

            // set the current date and time.  Remove , and . characters from the date string in order to save
            let postDate = new Date().toLocaleString();
            postDate = postDate.replace(',', '');
            postDate = postDate.replace('.', '');

            const request = await fetch('https://blog-demo-d7iq.onrender.com/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: formData.title,
                    body: editorRef.current.getContent(),  //formData.body,
                    username: User.username,
                    date: postDate
                })
            });

            // get response back from api
            const apiResponse = await request.json();
            console.log(apiResponse);

            // redirect to updated blog
            window.location.href = '/blog';
        }
        catch(error) {
            console.log(error);
        }        
    }

    return (
        <div className="container">
            <h1>Create a New Post by {User.username}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="pb-3">
                    <label htmlFor="title">Title:</label>
                    <input name="title" {...register("title", { required: true })} />
                    {errors.title && <span className="text-danger ms-2">Title is required</span>}
                </fieldset>
                <fieldset className="pb-3">
                    <label htmlFor="body">Body:</label>
                    <Editor
                        apiKey='lh6ybanhay0opv7nzvnm0wcom2w9l4v77sxvxofpwqxxsnmn'
                        onInit={(evt, body) => editorRef.current = body}
                        init={{
                            width: 800,
                            menubar: false,
                            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker',
                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                        }}
                    />
                    <span id="errMessage" className="text-danger">{errMessage}</span>
                    {/* <textarea name="body" {...register("body", { required: true })}></textarea>
                    {errors.body && <span className="text-danger ms-2">Body is required</span>} */}
                </fieldset>
                <button className="btn btn-info offset-4">
                    <i className="bi bi-plus-circle"></i> Save
                </button>
            </form>
        </div>
    );
}

export default CreatePost;