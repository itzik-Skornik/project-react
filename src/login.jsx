import { useEffect, useState } from "react"
import React from 'react'
import { useNavigate } from "react-router-dom"

const Login = ({ setUser }) => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    useEffect(() => {
        users()
    }, [])



    const users = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const num = await res.json()
        return num
        // localStorage.setItem("data", JSON.stringify(num))
        //   console.log(JSON.parse(localStorage.getItem('data'))); 
    }

    function insyd() {

        getUser(name, password).then(u => console.log(u))
        console.log(name)

        
    }

    function getUser(userName, pass) {
        let user;

        return users().then((users) => {
            user = users.find(
                (user) =>
                    user.username === userName && pass === user.address.geo.lat.slice(-4)
            );

            if (user) {
                localStorage.setItem("data", JSON.stringify(user))
                localStorage.setItem("player", JSON.stringify(user.id))
                setUser(user)
                navigate('dashboard')
                return user;
            } else {
                alert("Check the details you provided")
                navigate('/')
                ;
            }
        });
    }

    return (


        <div class="border border-success p-2 mb-2">
            <h1 style={{textAlign:"center"}}>Login</h1>
            <br/>
            <br/>
            <form style={{textAlign:"center"}}>
                
                <input
        
                    type="text"
                    placeholder="wirte you name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
<br/>
<br/>
                <input
                
                    type="password"
                    placeholder="wirte you password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <br/>
                <button class="btn btn-primary" type="button"
                    onClick={() => {
                        insyd()
                    }}>login</button>

            </form>
        </div>
    )

}
export default Login