import React from 'react'

const Catalog = () => {
  return (
    <div>
      <div>Catalog</div>
    <form onSubmit>
      <label>
      Car brand
        <select type="text" name="name" onChange={e=>console.log(e.target.value)}  />
      </label>
      <button type="submit">Search</button>
    </form>
  </div>
  )
}

export default Catalog;