const Home = () => {
    // Use state in React
    let name = 'haider';
    // and let suppose when we click the button we want change the name
    // here the name will change in the variable but it's not gonna update inside the DOM
    const handleClick = () => {
        name = 'kenway';
        console.log('name');
    }
    
    return (
        <div className="home">
            <h2>Hompage</h2>
            <h2>{ name }</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;