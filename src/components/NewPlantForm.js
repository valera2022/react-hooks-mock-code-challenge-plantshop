import React from "react";

function NewPlantForm({setBackData,backData}) {

  function handleForm(e){
    e.preventDefault()
//console.log(e.target.name.value)
const inputData = {
  name : e.target.name.value,
 image : e.target.image.value,
 price : e.target.price.value
}
console.log(inputData.name)

fetch("http://localhost:6001/plants",{
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body:JSON.stringify(
    {
      "name": inputData.name,
      "image": inputData.image,
      "price": inputData.price
    }),})

    let newData = [...backData,
      inputData
]

     setBackData(newData)

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
