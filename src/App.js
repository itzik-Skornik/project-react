import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Login from "./login"
import Logout from './logout'
import Dashboard from "./dashboard"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './info';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Todos from "./todos"
import Posts from "./posts"
import Singelpost from "./Singelpost"
import Comments from './comments'
import Alboms from "./alboms"
import Singelpotos from "./Singelpotos"
function App() {
  const [user, setUser] = useState()
  // const user= JSON.parse(localStorage.getItem('data')) 
  // console.log(JSON.parse(localStorage.getItem('data')));
  return (

    <div style={{ backgroundColor: "	rgb(229, 229, 204)"}} className="app">
      <nav
        style={
          {
            backgroundColor: "skyblue",
            width: "100%",
            height: "100px",
            textAlign: "center",
            fontSize: "50px",
          }
        }
      >
        what's up man
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login setUser={setUser} />} />
          
          <Route path='Dashboard' element={<Dashboard user={user} />}>
            <Route path='info' element={<Info />} />
            <Route path='logout' element={<Logout />} />
            <Route path='todos' element={<Todos />} />
            <Route path='posts' element={<Posts />} >
              <Route path=':postId' element={<Singelpost />} >
                <Route path='comments' element={<Comments />} />
              </Route>
            </Route>
            <Route path='alboms' element={<Alboms />} >
            <Route path=':albumId' element={<Singelpotos />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

      <footer

        style={
          {
            backgroundColor: "skyblue",
            width: "100%",
            height: "100px",
            textAlign: "center",
            fontSize: "50px",

          }


        }


      >

        it was nice to meet you
 </footer>
    </div>);
}

export default App;
