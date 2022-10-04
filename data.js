import React from "react";
import {useState} from "react";

function Show(){
  const [datalist,setdatalist] = useState([
    { 
     city:"Karachi",
     image:"https://images.olx.com.pk/thumbnails/279771675-240x180.webp",
     productname:"FAW carrier Ambulance",
     productprice:"Rs 2,000,000",
    
   },
   { 
    city:"Islamabad",
    image:"https://images.olx.com.pk/thumbnails/288709693-240x180.webp",
    productname:"Samsung Galaxy Note 10",
    productprice:"Rs 68,000",
   
  },
  { 
    city:"Lahore",
    image:"https://images.olx.com.pk/thumbnails/289034928-240x180.webp",
    productname:"5 Marala house for rent",
    productprice:"Rs 70,000",
   
  },
  { 
    city:"Karachi",
    image:"https://images.olx.com.pk/thumbnails/240824580-240x180.webp",
    productname:"Generator 20kwa",
    productprice:"Rs 70,0000",
   
  },
  { 
    city:"Karachi",
    image:"https://images.olx.com.pk/thumbnails/283489937-240x180.webp",
    productname:"Workstation Chair",
    productprice:"Rs 7,000",
   
  },
])

const [city,setcity] = useState("")
const [search,setsearch] = useState([])

// let cities = () => {
//   let city = datalist.map((e) => e.city)
//   city = [...new Set([...city])]
//   setcity([...city])
//   console.log(city)

// }

let show = (val) => {
  let sear  = datalist.filter((e) => e.productprice.toLocaleLowerCase().includes(val.toLocaleLowerCase()))
  setsearch([...sear])
  console.log(search)
}





 
// useEffect(()=> {
//   cities()} ,[]  )


return(
  <header>
    <div>
      
    <div className="header">
      
      <img src="https://blog.olx.com.pk/wp-content/uploads/2019/08/Blue-Logo-800x800-01.png" alt="photo" width="50px"></img>
      <p className="motor">MOTORS</p>
      <p className="motor">PROPERTY</p>
      
    </div>

    <div className="header">
        <img src="https://admiral.digital/wp-content/uploads/2021/07/client-olx-greyscale.png" alt="photo" width="100px"></img>
        <input className="motorr" onChange={(e) => show(e.target.value) }></input>
        <button className="search">Search</button>
      </div>
    
      </div>
       <div className="show">
       {search.map((e,i) => (
      <div key={i}>
        <img  alt="photo" src={e.image}></img>
        <p>{e.productname}</p>
        <h4>{e.productprice}</h4>
        <p>{e.city}</p>
      </div>
     ))}
     {datalist.map((e,i) => (
      <div key={i}>
     
        <img alt="photo" src={e.image}></img>
        <p>{e.productname}</p>
        <h4>{e.productprice}</h4>
        <p>{e.city}</p>
      </div>
     ))}
    </div>
      
  </header>
)
}


export default Show;