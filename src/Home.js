import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
// above we importing the hook
const Home = () => {
    // when we succesfully fetch the data, we gonna update the state with the data
    const [blogs, setBlogs] = useState(null);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        // using fetch request here run on intial render
        fetch('http://localhost:8000/blogs')
        // when the respones resolve, we get res object this is not the data just a respone object, in order to get the data we have to do something with this object
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
            });
    },[]);

    return (
        <div className="home">
            {/* <Bloglist blogs={blogs} title="all blogs" handleDelete={handleDelete}/> */}
        </div>
    );
}
// useEffect hook is hook that runs everytime we render 
export default Home;