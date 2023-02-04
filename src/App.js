// DO NOT DELETE

import * as React from 'react'
import {useState} from 'react'
import './App.css'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {

  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg")

  return (
    <div>
      <header>Dogアプリ</header>
      <p>犬の画像を表示するサイトです。</p>
      <img src={dogUrl} />
      <br />
      <button onClick={() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => setDogUrl(data.message))
      }}>更新</button>
    </div>
  )
}
