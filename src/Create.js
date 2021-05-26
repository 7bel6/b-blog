const Create = () => {
    return (
        <div className='create'>
            <h2 className="title">Add new Blog</h2>
            <form>
                <label>Blog Title : </label>
                <input
                    type="text"
                    required
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
            </form>
        </div>
    );
}

export default Create;