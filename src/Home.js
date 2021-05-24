import Bloglist from './Bloglist';
import useFetch from './useFetch';
// above we importing the hook
const Home = () => {
    // calling our custom hook
    const { data , isPending, error} = useFetch('http://localhost:8000/blogs')

    // We might need this logic to be used in deffrint places so we make it in own javascript file and make reusable , and that know as custom hook in react, like the useState , writing our hook with it's own logic
    

    return (
        <div className="home">
            {/* we put this statement so in fraction of time to get the data we don't get error of maping array of null */}
            {/* the logic behind that is easy we put a condition null=false so if null it will render because we got && operator when it's turn true got data it's well run the code */}
            { error && <div>{ error }</div> }
            { isPending && <div>Loading ... </div> }
            {data && <Bloglist blogs={data} title="all blogs"/>}
        </div>
    );
}
// useEffect hook is hook that runs everytime we render 
export default Home;