import React,{useState} from "react";

function PlantCard({data}) {
  const [isOn,setState] = useState(true)


function handleClick(){
    setState(!isOn) 
    console.log("You need to use state(const [isOff,setState]= useState(false)) with this snippet and control input(button,etc) with a ternary condition(isOff? <button>off</button : <button>on</button>. You might need to add event handler to both buttons") 
    
}


   console.log(data)
   const{id,name,image,price}= data
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isOn ? 
        <button className="primary" onClick={handleClick}>In Stock</button> : <button onClick={handleClick}>Out of Stock</button >
      }
    </li>
  );
}

export default PlantCard;
