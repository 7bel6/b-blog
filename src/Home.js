import { useState, useEffect } from 'react';
import Bloglist from './Bloglist';
// above we importing the hook
const Home = () => {
    // we creating blogs state value, because blogs change added or deleted , array of blogs
    // each blog is an object inside the array
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    // we create the function of handle delete here so we pass it as prop and access our hook setBlogs to edit our data which is taking id as an arugment so In blog list we pass the blog id that we want to delete

    //-- demonstarte depandecies on useEffect with simple example
    const [name, setName] = useState('mario');
    const handleDelete = (id) => {
        // we will use filter method to delete blogs
        // and this actually imitate for deleting data , it's not changing the data just make new array without the filterd data, in case of database like mongodb or firebase we can use methods to delete data really
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    // we will use props to pass data from this component to child comp.
    // we gonna create a property in child comp tag we can call it whatever we want
    // and we pass the data in it

    // ------------- useEffect hook , we don't need to store it in const, it's don't return value
    useEffect(() => {
        // we might use this , for fetch data , or authintication process
        console.log('useEffect on the way');
        // sometimes we don't want this function to run in every render so we pass a depandecy array, [] empty array make the function only run for the intial render, we can add state values that trigger render to change in this array

        // we add the name as depandency so when the name changed we will run useEffect
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