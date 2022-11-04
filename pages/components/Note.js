import React from 'react'
import styles from './components.module.css'
export const Note = ({id,title,text,date,DeleteButton}) => {
 
 
  return (
    <div className={styles.notes}>
      <div className={styles.header }>
      <h2>{title}</h2>
    <span >{text}</span>
      </div>
    <div className={styles.footer}>
        <small>{date}</small>
       <img className='delete-button' onClick={()=>DeleteButton(id)} src='https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/DeleteDustbin-512.png'/>
    </div>
    </div>
  )
}
