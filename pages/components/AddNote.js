import React, { useState } from 'react'
import styles from './components.module.css'


export const AddNote = ({handleAddNote}) => {
let[noteText,setNotesText]=useState('')
let[titleText,setTitleText]=useState('')





const handleTitleChange = (event)=>{

    setTitleText(event.target.value)
  
  }
const handleChange = (event)=>{
    setNotesText(event.target.value)
}
const handleSaveClick =()=>{
handleAddNote(noteText,titleText)
setNotesText('')
setTitleText('')

}


  return (
    <div className={styles.AddNotes}>
<input placeholder='Title' 
       className={styles.title}
       onChange={handleTitleChange}
       value={titleText}
/>
<textarea placeholder='type here to add note..'
          rows={9}
          onChange={handleChange}
          value={noteText}
></textarea>
<div className={styles.footer}>
<span>Reset</span>
<button onClick={handleSaveClick} >Save</button>
</div>
    </div>
  )
}
