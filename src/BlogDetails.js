import { useParams } from "react-router";
import useFetch from './useFetch';
const BlogDetails = () => {

    // Now we want to access whatever the id of blog on url router
    // we put what we named our route paramters in App.js
    const { id } = useParams();
    // Reusing our custom hook
    const { data , isPending, error} = useFetch('http://localhost:8000/blogs/' + id);

    return(
        <div className='blog-details'>
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { data && (
                <article>
                    <h2>{ data.title }</h2>
                    <p>Written By : { data.author }</p>
                    <div>{ data.body }</div>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;