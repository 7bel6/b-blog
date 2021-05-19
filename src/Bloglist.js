// Props or reuseable components , let's say the logic of showing blog list we will use it over and over in multiple places, which is something not good to dublicate our code, so we create a component that hold that logic for us and we reuse it , and further more we can pass this logic some attribute to act in certain way , like on home page it's shows all the blogs, but we when we chose a category we can pass the category to the logic , we reusing the same logic , but showing us only that category blogs, that's it in simple way


// Here we are gonna recive the prop we pass there in Home.js
const Bloglist = (props) => {
    // we recived the prop here
    const blogs = props.blogs;
    return (
        <div className="blog-list">
            {/* we use arrow function inside map method to define the template of outputing these blogs */}
            {blogs.map((blog) => (
                <div className="blog-review" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Author : { blog.author }</p>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;