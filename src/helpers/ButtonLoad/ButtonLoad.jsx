import  css from './LoadMore.module.css';

const LoadMore = ({ handleClick }) => {
  return (
    <button className={css.btn} type="button" onClick={handleClick}>
      Load More
    </button>
  );
};

export default LoadMore;
