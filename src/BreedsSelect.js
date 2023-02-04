// DO NOT DELETE

import React, { useEffect } from 'react'

/**
 * 
 * @type {React.FC}
 */
export const BreedsSelect = (props) => {

  const handleChange = (event) => {
    props.onChangeFunction(event.target.value)
  }

  return (
    <>
      <select value={props.selected} onChange={handleChange}>
        {props.breeds.map((breed, index) => <option key={index} value={breed}>{breed}</option>)}
      </select>
    </>
  )
}