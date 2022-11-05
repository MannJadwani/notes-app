
import styles from '../styles/Home.module.css'
import { NotesList } from './components/NotesList'
import { useState } from 'react'
import { TestElement } from '../Testing/TestElement'
import { nanoid } from 'nanoid'
import { Search } from './components/Search'


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

const [SearchText,setSearchText]= useState(' ')
 const handleSearch =(event)=>{
 setSearchText(event.target.value)
 }

 

  return (
    <div className={styles.container}>
      <h1 className='Notes-Title'>Notes</h1>
      <Search SearchText ={SearchText}
      handleSearch = {handleSearch}
      />
      <NotesList notes={notes.filter((note)=>
                note.text.includes(SearchText))} 
                 addnote={addnote} 
                 DeleteButton={DeleteButton}
                 
                 />
      {/* <TestElement/> */}
    </div>
  )
}
