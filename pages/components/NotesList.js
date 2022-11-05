import React from 'react'
import { Note } from './Note'
import styles from './components.module.css'
import { AddNote } from './AddNote'
export const NotesList = ({notes,addnote,DeleteButton}) => {  

  return (
    <div className={styles.notesList}>
      {notes.map((note)=>{
        
        return <Note 
        id = {note.id}
        title={note.title}
        text ={note.text}
        date= {note.date}
        DeleteButton ={DeleteButton}
        
        
        />
      }
      
      
      )}
      <AddNote handleAddNote={addnote}
      />      
    </div>
  )
}
