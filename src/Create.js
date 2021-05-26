import { useState } from "react";

const Create = () => {
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author, setAuthor] = useState('mario')

    const handleSubmit = (e) => {
        // Prevent page refresh on submit
        e.preventDefault();
        // creating a blog object that will carry the submitted data and send it to our db
        const blog = {title, body, author};
        console.log(blog);
    }

    return (
        <div className='create'>
            <h2 className="title">Add new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title : </label>
                <input
                    type="text"
                    required
                    value={title}
                    // Here we want it when we type it's trigger and change state value
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body : </label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author : </label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                <button>Add Blog</button>
                {/* Testing the controlled input we show here the change happens on state value */}
                <p>{ body }</p>
                <p>{ author }</p>
            </form>
        </div>
    );
}

export default Create;