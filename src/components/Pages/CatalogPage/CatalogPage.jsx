import Catalog from "../../Catalog/Catalog"
import CarFilter from "../../CarFilter/CarFilter"
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../../redux/catalog/catalogSlice";


const CatalogPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector((state) => state.catalog.adverts);

  const handleFilterChange = (filters) => {
    dispatch(setFilters(filters));
  };
  
  return (
    <div>
      <CarFilter adverts={adverts} onFilterChange={handleFilterChange} />
      <Catalog />
    </div>
  )
}

export default CatalogPage;