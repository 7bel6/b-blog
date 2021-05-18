import { useState } from 'react';
// above we importing the hook
const Home = () => {
    // we creating blogs state value, because blogs change added or deleted , array of blogs
    // each blog is an object inside the array
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    return (
        // we need to find a way to cycle through our array so we can output our list
        // we use map method which is cycle through array, we need to return an itterate template that contain and output each item in form of this template
        <div className="home">
            {/* we use arrow function inside map method to define the template of outputing these blogs */}
            {blogs.map((blog) => {
                // the key property react use to keep track for each item uses the template we put this key just for our root item of the template ,, and the key must be unique like the id in database , which we will use here for the key the value of id LOL
                <div className="blog-review" key={blog.id}>
                    
                </div>
            })}
        </div>
    );
}

export default Home;