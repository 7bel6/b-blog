import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
// above we importing the hook
const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('useEffect on the way');
    },[name]);

    return (
        <div className="home">
            <Bloglist blogs={blogs} title="all blogs" handleDelete={handleDelete}/>
            <button onClick={() => setName('haider')}>Change the Name</button>
            <p>{ name }</p>
        </div>
    );
}
// useEffect hook is hook that runs everytime we render 
export default Home;