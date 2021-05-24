import { useState, useEffect } from 'react';
const useFetch = (url) => {
    // when we succesfully fetch the data, we gonna update the state with the data
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        // using fetch request here run on intial render
        fetch(url)
        // when the respones resolve, we get res object this is not the data just a respone object, in order to get the data we have to do something with this object
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch')
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                // now we update our state with the data
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
            })
    },[]);

    // Here we gonna return some value
    return { data , isPending, error}
}

export default useFetch;