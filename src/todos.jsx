import React from 'react'
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

function Todos() {
    const navi = useNavigate();

    const [user, setUser] = useState([])

    console.log(user);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(data => setUser(data))
        if (localStorage.getItem("player") == null) {
            alert('אנא התחבר')
            navi('/')
        }
    }, [])
    const users = user.filter(x => x.userId === JSON.parse(localStorage.getItem("player")))  
    function tods() {
        if (users) {
            return users.map((a) => (
                <div key={a.id}>
                    <ol style={{textDecoration:''}}>
                    {a.id}  {a.title} <input type="checkbox" checked={a.completed} />
                    </ol>
                </div>
            ));
        }
    }

    function sortCompleted() {
        user.sort(function (x, y) {
            return x.completed === y.completed ? 0 : x.completed ? -1 : 1;
        });
        console.log(user);
        setUser(JSON.parse(JSON.stringify(user)));

    }

    function sortOrder() {
        console.log(88);
        user.sort(function (a, b) {
            return a.id - b.id;
        });
        console.log(user, "hf");
        setUser(JSON.parse(JSON.stringify(user)));
    }
    function sortAlpha() {
        user.sort(function (a, b) {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            if (x < y) {
                return -1;
            }
            if (x > y) {
                return 1;
            }
            console.log(user);
            return 0;
        });
        setUser(JSON.parse(JSON.stringify(user)));
    }
    function sortRandom() {
        user.sort((a, b) => 0.5 - Math.random());
        console.log(user);
        setUser(JSON.parse(JSON.stringify(user)));
    }
    function changeHandler(e) {
        let value = e.target.value
        switch (value) {
            case 'order':
                sortOrder()
                break;
            case 'alphabetical':
                sortAlpha()
                break;
            case 'randomly':
                sortRandom()
                break;
            case 'completed':
                sortCompleted()
                break;
            default:
                break;
        }
    }


    // <div>
    //     <h1> List to do</h1>
    //     <select >
    //         <option value="A">serial</option>
    //         <option value="B">Execution of</option>
    //         <option value="C">Alphabetical</option>
    //         <option value="D">random</option>

    //     </select>
    //     {users && users.map((item, idx) => <div key={idx}>{idx+1} . <input type="checkbox" /> {item.title} </div>)}

    return (
        <>   <br/>
            
            
            <select class="p-3 mb-2 bg-success text-white" onChange={changeHandler}>
                <option value="order">order</option>
                <option value="completed">completed</option>
                <option value="alphabetical">alphabetical</option>
                <option value="randomly">randomly</option>
            </select>
            <br/>
            <br/>
           
            <h1>Todos</h1>
           
            <div>{tods()}</div>
        </>
    );

}

export default Todos
