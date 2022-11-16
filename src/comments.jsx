
import React, { useState, useEffect } from 'react'
import { Link, Outlet, useParams } from "react-router-dom"
function Comments() {
    const { postId } = useParams();
    const [comments, setComments] = useState();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((response) => response.json())
            .then((json) => setComments(json));
    }, []);

    console.log(postId)
    return (
        <div>
            {comments && comments.map((cmt, idx) => <div key={cmt.id}>
                <hr />
                <h2>comments {idx+1}</h2>
                <h3 class="text-bg-secondary p-3">{cmt.body}</h3>
                <h3 class="text-bg-info p-3">{cmt.email}</h3>
               
            </div>)}
        </div>
    )
}
export default Comments
