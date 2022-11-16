import React, { useEffect } from 'react'
// import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import TextMobileStepper from './test';
import { Button } from 'react-bootstrap';

function Dashboard() {
    let user = undefined;
    if (localStorage.getItem('data')) {
        user = JSON.parse(localStorage.getItem('data'));
    }

    const navi = useNavigate();
    function Logout() {
        localStorage.clear();
        navi('/')
    }

    return (
        <>
            {/* <TextMobileStepper /> */}
            <div class="p-3 mb-2 bg-warning text-dark" style={{ textAlign: "center" }}>{user ? <h1>hello {user.name}</h1> : <h1>please login</h1>}</div>
            <nav  class="bg-success p-2 text-dark bg-opacity-25">
                
                <Link type="button" class="btn btn-primary" to="info">info</Link>{"    "}
                <Link type="button" class="btn btn-primary" to="todos" >Todos</Link>{"    "}
                <Link type="button" class="btn btn-primary" to="posts" >Posts</Link>{"    "}
                <Link  type="button" class="btn btn-primary" to="alboms" >Alboms</Link>{"    "}
                <button style={{float:"right"}} type="button" class="btn btn-dark" onClick={Logout}>Logout</button>{"    "}
           </nav>

            <Outlet />

        </>
        )
}

export default Dashboard
