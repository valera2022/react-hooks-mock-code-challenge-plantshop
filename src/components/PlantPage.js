import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({setBackData,backData,setSearchData,searchData}) {

  return (
    <main>
      <NewPlantForm setBackData={setBackData} backData={backData}/>
      <Search setSearchData={setSearchData}/>
      <PlantList setBackData={setBackData} backData={backData} searchData={searchData}/>
    </main>
  );
}

export default PlantPage;
