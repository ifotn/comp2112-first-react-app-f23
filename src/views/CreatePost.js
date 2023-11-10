import { useForm } from "react-hook-form";

function CreatePost(User) {
    const { register, handleSubmit, formState:{errors} } = useForm();

    const onSubmit = async (formData) => {
        try {
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
                    body: formData.body,
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
                    <textarea name="body" {...register("body", { required: true })}></textarea>
                    {errors.body && <span className="text-danger ms-2">Body is required</span>}
                </fieldset>
                <button className="btn btn-info offset-4">
                    <i className="bi bi-plus-circle"></i> Save
                </button>
            </form>
        </div>
    );
}

export default CreatePost;