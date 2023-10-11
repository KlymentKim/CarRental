import React from "react";
import css from "./Home.module.css";
import MovingText from "../../../helpers/MovingText/AnimationChain"

const Home = () => {
  return (
    <article className={css.backgroundImg} >
   <MovingText />
   </article>
  )
};

export default Home;
