import React, { useState, useEffect } from 'react'
import { Link, Outlet, useParams} from "react-router-dom"
import Comments from './comments';

function Singelpost() {

    const { postId } = useParams();
    
    const [userpost, setUserpost] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((json) => setUserpost(json));
    }, [postId]);
    
    console.log(postId)
    return (
        <section className='section product'>
            <hr />
            <div style={{height:"300px", width:"100%",textAlign:"center"}}>
              
            <h2 style={{textAlign:"center"}}>Post {postId}</h2>
            <h3 style={{fontSize:"50px"}} >{userpost && userpost.title}</h3>
            <p style={{fontSize:"35px"}}>{userpost && userpost.body}</p>
</div>
            <Link class="btn btn-primary" to='comments' >comments</Link>
            {/* <button onClick={}>comments</button> */}
            {/* <Comments/> */}
            <Outlet />
        </section>
    )
}

export default Singelpost
