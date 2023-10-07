import React from 'react'
import css from './Home.module.css'

const Home = () => {
  return (
    <section className={css.section}>
        <h1>Home</h1>
        <div>
        <form onSubmit>
          <label>
          Car brand
            <select type="text" name="name" onChange={e=>console.log(e.target.value)}  />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
    
     
  )
}

export default Home;