import { useState } from "react";

const Create = () => {
    const [title,setTitle] = useState('');

    return (
        <div className='create'>
            <h2 className="title">Add new Blog</h2>
            <form>
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
                ></textarea>
                <label>Blog Author : </label>
                <select>
                    <option value="mario">mario</option>
                    <option value="luigi">luigi</option>
                </select>
                <button>Add Blog</button>
                {/* Testing the controlled input we show here the change happens on state value */}
                <p>{ title }</p>
            </form>
        </div>
    );
}

export default Create;