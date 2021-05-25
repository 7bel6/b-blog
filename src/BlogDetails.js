import { useParams } from "react-router";

const BlogDetails = () => {

    // Now we want to access whatever the id of blog on url router
    // we put what we named our route paramters in App.js
    const { id } = useParams();
    return(
        <div className='blog-details'>
            <h2>This is The Blog - { id }</h2>
        </div>
    );
}

export default BlogDetails