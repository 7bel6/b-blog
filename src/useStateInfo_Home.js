import { useState } from 'react';
// above we importing the hook
const Home = () => {
    // Use state in React
    //let name = 'haider';
    // and let suppose when we click the button we want change the name
    // here the name will change in the variable but it's not gonna update inside the DOM

    // ------------------ let's create react value using useState
    // we create useState() got the init value , we put it inside an array of two var , one is the name of value , the other one is the function that will handle the change in the value.
    const [name, setName] = useState('haider');
    // additonal info about this the value inside the useState can be any type of data
    const [age, setAge] = useState(22);
    const handleClick = () => {
        // explain of this the value isn't reactive when we click the template doesn't render with the new value, so we have to make the value reactive, so when it's changes react will detect that , and re render the template
        // name = 'kenway';
        // console.log(name);

        // so down here we will use the function that handle the change in the useState value so our value become reactive and change when we click the button
        setName('kenway');
        setAge(31);
    }
    // to do this in react we use something called a hook, it's special type of function, doing a certain job like the useState one, so useState give us the way to create a reactive value and also provide us a way to change this value when ever we want
    return (
        <div className="home">
            <h2>Hompage</h2>
            <h2>{ name } is {age} years old</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;