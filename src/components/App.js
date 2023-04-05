import React,{useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  // const [newPlants,setNewPlants] = useState([])
  const [backData,setBackData]= useState([])
  const [searchData,setSearchData]= useState("")
  console.log(backData)
  return (
    <div className="app">
      <Header />
      <PlantPage backData={backData} setBackData={setBackData} setSearchData={setSearchData} searchData={searchData} />
    </div>
  );
}

export default App;
