const Home = () => {
    // Now we will create Event handlings
    const handleClick = () => {
        console.log("the button Clicked");
    }
    // if we want to pass the function argument we can't just call it because the browser will
    // envoke it dirctly, so we need to create anynomus function
    const handleClickPass = (name) => {
        console.log('hello ', name);
    }
    return (
        <div className="home">
            <h2>Hompage</h2>
            <button onClick={handleClick}>Click Me</button>
            {/* Passing arg demonstrate */}
            {/* warp our click function in anynomus functionn */}
            <button onClick={() => {
                handleClickPass('Haider')
            }}>Click with Passing argument</button>
        </div>
    );
}

export default Home;