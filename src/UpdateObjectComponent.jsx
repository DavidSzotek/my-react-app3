import React, { useState } from "react";

function UpdateObjectComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const [cars, setCars] = useState([
    { year: 2003, make: "Renault", model: "Mégane" },
    { year: 2017, make: "Hyundai", model: "i10" },
    { year: 2019, make: "Peugéot", model: "2008" },
  ]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);

    setCarYear(() => new Date().getFullYear());
    setCarMake(() => "");
    setCarModel(() => "");
  }

  function handleRemoveCar(index) {
    setCars((c) =>
      c.filter((_, i) => {
        i !== index;
      })
    );
  }

  function handleCarYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleCarMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleCarModelChange(event) {
    setCarModel(event.target.value);
  }

  function handleAddFood() {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";

    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  function handleYearChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }
  function handleMakeChange(e) {
    setCar((c) => ({ ...c, make: e.target.value }));
  }
  function handleModelChange(e) {
    setCar((c) => ({ ...c, model: e.target.value }));
  }

  return (
    <div>
      <p>
        Your fav car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
      <h2>List of food</h2>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
      <ul>
        {foods.map((f, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {f}
          </li>
        ))}
      </ul>
      <h2>List of car objects</h2>
      <input
        type="number"
        value={carYear}
        onChange={handleCarYearChange}
        placeholder="Year"
      />{" "}
      <br />
      <input
        type="text"
        value={carMake}
        onChange={handleCarMakeChange}
        placeholder="Make"
      />{" "}
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleCarModelChange}
        placeholder="Model"
      />{" "}
      <br />
      <button onClick={handleAddCar}>Add Car</button>
      <ul>
        {cars.map((e, i) => (
          <li key={i} onClick={() => handleRemoveCar(i)}>
            {e.year} {e.make} {e.model}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpdateObjectComponent;
