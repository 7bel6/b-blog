
const Bloglist = (props) => {
    // we recived the prop here
    const blogs = props.blogs;
    const title = props.title;
    // we will add delete button to demonstarte passing functions as props like deleting a blog
    return (
        <div className="blog-list">
            {/* we use arrow function inside map method to define the template of outputing these blogs */}
            <h2>{ title }</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Author : { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;