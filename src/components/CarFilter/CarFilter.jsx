import React, { useState } from "react";
import carBrand from "../../apis/db/carBrand.json";
import css from "./CarFilter.module.css";
import SelectPrice from "../../helpers/SelectPrice/SelectPrice";
import SelectBrand from "../../helpers/SelectBrand";

import React from "react";

const CarFilter = () => {
  // const selectCarBrand=[
  //     ...new Set(carBrand.map(car=>({value:car.make,label:car.make}))),
  // ];
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const filters = {
      selectedMake,
      selectedPrice,
      minMileage,
      maxMileage,
    };

    onFilterChange(filters);
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className={css.filterForm}>
        <div className={css.select_wrapper}>
          <label className={css.label_title}>Car brand</label>
          <SelectBrand
            selectedMake={selectedMake}
            setSelectedMake={setSelectedMake}
            carBrand={carBrand}
          />
        </div>
        <div className={css.select_wrapper}>
          <label className={css.label_title}>Price/ 1 hour</label>
          <SelectPrice
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
          />
        </div>
        <div className={css.select_wrapper}>
          <label className={css.label_title}>Car mealege / km</label>
          <div>
            <input
              className={css.left_input}
              type="number"
              value={minMileage}
              onClick={(e) => {
                const value = Math.max(e.target.value, 0);
                setMinMileage(value); //
              }}
              placeholder="Form"
            />
            <input
              className={css.rigth_input}
              type="number"
              value={maxMileage}
              onClick={(e) => {
                const value = Math.max(e.target.value, 0);
                setMaxMileage(value); //
              }}
              placeholder="To"
            />
          </div>
        </div>
        <button type="submit" className={btn_Search}>Search</button>
      </form>
    </>
  );
};
export default CarFilter;
