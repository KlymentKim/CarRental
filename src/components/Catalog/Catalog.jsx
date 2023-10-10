import { useEffect } from "react";
import AdvertItem from "../AdvertItem/AdvertItem";
import ButtonLoad from "../../helpers/ButtonLoad/ButtonLoad";
import css from "./Catalog.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  onNextPage,
  setAdverts,
  firstAdverts,
  setAllAdverts,
} from "../../redux/catalog/catalogSlice";
import { fetchAdverts, fetchAllAdverts } from "../../apis/fetchMockapi";

import React from "react";

const Catalog = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.catalog.page);
  const adverts = useSelector((state) => state.catalog.adverts);
  const filters = useSelector((state) => state.catalog.filters);
  const allAdverts = useSelector((state) => state.catalog.allAdverts);

  const isFilterOn = Boolean(
    filters.selectedMake ||
      filters.selectedPrice ||
      filters.minMileage ||
      filters.maxMileage
  );

  const onFindMore = () => {
    dispatch(onNextPage());
    getAdverts(page);
  };

  const getAdverts = (page) => {
    fetchAdverts(page)
      .then((results) => {
        dispatch(setAdverts(results));
      })
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    if (adverts.length === 0) {
      fetchAdverts(page).then((results) => {
        dispatch(firstAdverts(results));
      });
      fetchAllAdverts().then((results) => {
        dispatch(setAllAdverts(results));
      });
    }
  }, [adverts.length, dispatch, page]);

  const filteredAdverts = allAdverts.filter((adverts) => {
    if (filters.selectedMake && adverts.make !== filters.selectedMake) {
      return false;
    }
    if (
      filters.selectedPrice &&
      parseInt(adverts.rentalPrice.slice(1), 10) > Number(filters.selectedPrice)
    ) {
      return false;
    }
    if (filters.minMileage && adverts.mileage < Number(filters.minMileage)) {
      return false;
    }
    if (filters.maxMileage && adverts.mileage > Number(filters.maxMileage)) {
      return false;
    }
    return true;
  });

  return (
    <>
      {adverts && (
        <>
          {filteredAdverts.length > 0 ? (
            <ul className={css.advertsList}>
              {(isFilterOn ? filteredAdverts : adverts).map((advert) => {
                return <AdvertItem key={advert.id} advert={advert} />;
              })}
            </ul>
          ) : (
            <div className={css.noMatching}>
              Sorry, no matching adverts found
            </div>
          )}
          <ButtonLoad onFindMore={onFindMore} />
        </>
      )}
    </>
  );
};

export default Catalog;
