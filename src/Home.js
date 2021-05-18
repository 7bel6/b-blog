const Home = () => {
    // Now we will create Event handlings
    const handleClick = () => {
        console.log("the button Clicked");
    }
    return (
        <div className="home">
            <h2>Hompage</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default Home;