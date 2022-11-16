import React,{useEffect,useState} from 'react'
import { HashRouter } from 'react-router-dom';
import { Link, Outlet, useParams } from "react-router-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Singelpotos() {
    const { albumId } = useParams();
    const [num, setNum] = useState([])
    const [userpotos, setUserPotos] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
            .then((response) => response.json())
            .then((json) => setUserPotos(json));
    }, [albumId]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
            .then((response) => response.json())
            .then((json) => setNum(json));
    }, [albumId]);
    console.log(userpotos)
    return (
        
        <div>
  
           <hr></hr>  <h1 style={{textAlign:"center"}} class="border border-success p-2 mb-2" > {num.title}</h1> <Carousel>{userpotos && userpotos.map((item,idx)=>   <div  key={idx}>   <img loading="lazy" class="rounded-circle" style={{width:'20%',height:'20%'}} src={item.thumbnailUrl }/></div>)}</Carousel>


         
</div>
)
}

export default Singelpotos
