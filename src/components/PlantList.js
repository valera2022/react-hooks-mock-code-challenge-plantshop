import React,{useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({setBackData,backData,searchData}) {
  console.log(backData)
  console.log(searchData)



 useEffect(()=>{
  fetch("http://localhost:6001/plants")
  .then(r=> r.json())
  .then(data=> setBackData(data))

 },[])

 const itemsToDisplay = backData.filter((data) => { 
  if (searchData === "") return true;
  // debugger;
  console.log(backData.name);
 
    return data.name.toLowerCase().includes(searchData.toLowerCase()) 
  
    
})







 
  return (
    <ul className="cards">{itemsToDisplay.map((data)=><PlantCard data={data}/>)}</ul>
  );
}

export default PlantList;
