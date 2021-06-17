import { useParams } from "react-router";
import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';
const BlogDetails = () => {

    // Now we want to access whatever the id of blog on url router
    // we put what we named our route paramters in App.js
    const { id } = useParams();
    // Reusing our custom hook
    const { data , isPending, error} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + data.id, {
            method: 'DELETE',
        })
        .then(() => {
            history.push('/')
        })
    }

    return(
        <div className='blog-details'>
            { isPending && <div>Loading...</div>}
            { error && <div>{ error }</div>}
            { data && (
                <article>
                    <h2>{ data.title }</h2>
                    <p>Written By : { data.author }</p>
                    <div>{ data.body }</div>
                    {/* Delete the article */}
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;