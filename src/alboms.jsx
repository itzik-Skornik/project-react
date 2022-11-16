import React,{useState,useEffect} from 'react'
import {useNavigate,Link, Outlet} from "react-router-dom"
function Alboms() {

    const navi = useNavigate();

    const [alboms, setAlboms] = useState([])

    // console.log(alboms);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums`)
            .then(res => res.json())
            .then(data => {
                sortAlpha(data)
                setAlboms(data)})
        if (localStorage.getItem("player") == null) {
            alert('אנא התחבר')
            navi('/')
        } 
    }, [])
    console.log(alboms);
 
let albom = alboms.filter(x => x.userId === JSON.parse(localStorage.getItem("player")))
function sortAlpha(x) {
    x.sort(function (a, b) {
      let x = a.title.toLowerCase();
      let y = b.title.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      
      return 0;
    });
  
  
  } 
 
console.log(albom);
return (
    
       <div>
             <table style={{height:"300px", width:"100%",textAlign:"center"}}>
                <tbody  >
                    {albom && albom.map((item, idx) =>
                        <tr  class="border border-success p-2 mb-2" key={idx}><td>
                           {idx+1}. <Link to={`${item.id}`}> {item.title}</Link> </td></tr>)}
                </tbody>
            </table>
            <Outlet/>
{/* {albom && albom.map((item,idx) => <div key={idx}>{item.title}</div>)} */}
       </div>
    )
}

export default Alboms
