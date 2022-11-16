import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function Info() {
    const navi = useNavigate();
    const [user, setUser] = useState(null)
    console.log(user);
    useEffect(() => {
        if (localStorage.getItem("player") != null) {
            fetch(`https://jsonplaceholder.typicode.com/users/${localStorage.getItem("player")}`)
                .then(res => res.json())
                .then(data => setUser(data))
        }
        else {
            alert('אנא התחבר')
            navi('/')
        }
    }, [])
    return (


        <div class="border border-success p-2 mb-2">
            <h1>name: {user && user.name}</h1>
            <h1>phone: {user && user.phone}</h1>
            <h1>email: {user && user.email}</h1>
            <h1>suite: {user && user.address.suite}</h1>
            <h1>city: {user && user.address.city}</h1>
            <h1>zipcode: {user && user.address.zipcode}</h1>
            <h1>lng: {user && user.address.geo.lng}</h1>
            <h1>website: {user && user.website}</h1>
            <h1>company: {user && user.company.name}</h1>
        </div>

    )
}

export default Info

