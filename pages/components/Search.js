import React, { useState } from 'react'
import styles from './components.module.css'
export const Search = ({SearchText,handleSearch}) => {
  return (
    <div className= {styles.searchBar} >
        <input placeholder='Search Note'
        type='text'
        value={SearchText}
        onChange= {handleSearch}
         />
        <img src='https://openclipart.org/image/2400px/svg_to_png/213239/Search-icon.png'/>
    </div>
  )
}
