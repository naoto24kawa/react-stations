// DO NOT DELETE

import React, { useState, useEffect } from 'react'

import { BreedsSelect } from './BreedsSelect'

/**
 * 
 * @type {React.FC}
 */
export const DogListContainer = (props) => {

  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogUrls, setDogUrls] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        const fetchedBreeds = Object.keys(data.message)
        setBreeds(fetchedBreeds)
        setSelectedBreed(fetchedBreeds[0])
      })
  }, []);

  return (
    <>
      <BreedsSelect breeds={breeds} selected={selectedBreed} onChangeFunction={setSelectedBreed} />
      <button onClick={() => {
        fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
          .then((response) => response.json())
          .then((data) => setDogUrls(data.message))
      }}>表示</button>
      <br />
      {dogUrls && dogUrls.map(url => <img src={url} />)}
    </>
  );
}