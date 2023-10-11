import React, { useEffect, useState } from "react";
import carBrand from "../../apis/db/carBrand.json";
import css from "./CarFilter.module.css";
import closeBtn from "../../assets/img/close.svg"
import SelectPrice from "../../helpers/SelectPrice/SelectPrice";
import SelectBrand from "../../helpers/SelectBrand/SelectBrand";

import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { resetFilters } from "../../redux/filters/filtersSlice";

const CarFilter = ({onFilterChange}) => {

  const [selectedMake, setSelectedMake] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  useEffect(() => {
    setSelectedMake(filters.selectedMake);
    setSelectedPrice(filters.selectedPrice);
    setMinMileage(filters.minMileage);
    setMaxMileage(filters.maxMileage);
  }, [
    filters.maxMileage,
    filters.minMileage,
    filters.selectedMake,
    filters.selectedPrice,
    filters.setMaxMileage,
  ]);

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

  const clearFilters = (e) => {
    e.preventDefault();
    console.log("clear");
    dispatch(resetFilters());
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
        <button type="submit" className={css.btn_Search}>Search</button>
        <button onClick={clearFilters}>
          <img src={closeBtn} alt="closeBtn" />
        </button>
      </form>
    </>
  );
};
export default CarFilter;
