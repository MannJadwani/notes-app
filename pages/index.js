
import styles from '../styles/Home.module.css'
import { NotesList } from './components/NotesList'
import { useState } from 'react'
import { TestElement } from '../Testing/TestElement'
import { nanoid } from 'nanoid'


export default function Home() {
  const [notes,setNotes] =useState([])
  
  
  const addnote= (text,title)=>{
const date = new Date()
const newNote = {
  id:nanoid(),
  title:title,
  text: text,
  date:date.toLocaleDateString()
} 
const newNotes = [...notes,newNote]
console.log(newNotes)
setNotes(newNotes)
}
const DeleteButton= (id) =>{
const newNotes = notes.filter((note)=>note.id !== id)
setNotes(newNotes)
console.log(id)
}
  return (
    <div className={styles.container}>
      <NotesList notes={notes} addnote={addnote} DeleteButton={DeleteButton}/>
      {/* <TestElement/> */}
    </div>
  )
}
