import React from "react";
import css from "./Home.module.css";
import MovingText from "../../../helpers/MovingText/AnimationChain"
// import backgroundImg from "../../../assets/img/rentcar_bg.jpg";

const Home = () => {
  return (
    <article className={css.backgroundImg} >
   <MovingText />
    {/* <h1 className={css.title}>Welcome to the Car-Rental service</h1> */}
   </article>
  )
};

export default Home;
