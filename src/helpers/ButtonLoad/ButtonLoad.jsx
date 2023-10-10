import css from "./ButtonLoad.module.css"

const LoadMore = ({ handleClick }) => {
  return (
    <button className={css.btn} type="button" onClick={handleClick}>
      Load More
    </button>
  );
};

export default LoadMore;
