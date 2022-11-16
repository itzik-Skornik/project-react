import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";

function Posts() {
    const navi = useNavigate();

    const [user, setUser] = useState([])

    // console.log(user);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res.json())
            .then(data => setUser(data))
        if (localStorage.getItem("player") == null) {
            alert('אנא התחבר')
            navi('/')
        }
    }, [])
    console.log(user);
    const users = user.filter(x => x.userId === JSON.parse(localStorage.getItem("player")))
console.log(users);
    return (
        <div  >
            <h1 style={{textAlign:"center"}}>select a posts</h1>

            <table style={{height:"300px", width:"100%",textAlign:"center"}}>
                <tbody>
                    {users && users.map((item, idx) =>
                        <tr  class="border border-success p-2 mb-2" key={idx}><td>
                            {idx+1}. <Link to={`${item.id}`}>{item.title}</Link> </td></tr>)}
                </tbody>
            </table>
            <Outlet />

        </div>)
}

export default Posts
