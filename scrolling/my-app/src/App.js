import React,{useState,useEffect} from 'react';
import './App.css';
import axios from "axios"
function App() {
  const [data,setData]=useState([])
  let[page,setPage]=useState(1)
  let limit=10
  
  const fetchData=()=>{
    axios.get(`https://639c50f416d1763ab1461101.mockapi.io/usedata?limit=${limit}&&page=${page}`)
    .then(((res)=>{
      setData((prev) => {
        const newData = res.data.filter(item => !prev.some(prevItem => prevItem.id === item.id));
        return [...prev, ...newData];
      });
    }))
  }

  useEffect(()=>{
    fetchData()
  },[page])
  
  const handleInfinitescroll=async()=>{
   
   try{
      if(window.innerHeight+document.documentElement.scrollTop+1>document.documentElement.scrollHeight){
           setPage((prev)=>prev+1)
      }
   }catch(error){
    console.log("error")
   }

  }
  useEffect(()=>{
    window.addEventListener("scroll",handleInfinitescroll)

    return ()=>{
      window.removeEventListener("scroll",handleInfinitescroll)
    }

  },[])
  console.log(data)
  return (
    <div className="App">
   {data.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.title} className="product-image" style={{width:"100px"}} />
          <p className="product-price">{item.id}</p>
          <h3 className="product-title">{item.title}</h3>
        </div>
      ))}
  
    </div>
  );
}

export default App;
