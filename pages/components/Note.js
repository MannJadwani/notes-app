import React from 'react'
import styles from './components.module.css'
import { useState } from 'react'
import { EditableNote } from './EditableNote'
export const Note = ({id,title,text,date,DeleteButton}) => {
 
const [mustEdit,setMustEdit] = useState() 
const [newTitle,setNewTitle]=useState(title)
const [newText,setNewText]=useState(text)
 const handleEdit = () =>{
  setMustEdit(true)
 }

if(!mustEdit){
  return (
    <div className={styles.notes}>
      <div className={styles.header }>
      <h2>{newTitle}</h2>
    <span >{newText}</span>
      </div>
    <div className={styles.footer}>
        <small>{date}</small>
       <div>
       <img  className={styles.editNote}
             onClick={handleEdit}         
             src='https://th.bing.com/th/id/R.3dfadeec51d1ad4b2fc9deaa40fbde9e?rik=MeQgYdI3cqDbYw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_65577.png&ehk=qlIBHUsToIYggOnKTm3r%2faUdTHCilLDrHmW2QVOZH9A%3d&risl=&pid=ImgRaw&r=0'/>
       <img className='delete-button' onClick={()=>DeleteButton(id)} src='https://cdn3.iconfinder.com/data/icons/ui-essential-elements-buttons/110/DeleteDustbin-512.png'/>
       </div>
    </div>
    </div>
  )
}
else{
  return <EditableNote id={id}
  title={newTitle}
  text={newText}
  date = {date}
  DeleteButton = {DeleteButton}
  setMustEdit = {setMustEdit}
  setNewText= {setNewText}
  setNewTitle = {setNewTitle}
  />
}
}
