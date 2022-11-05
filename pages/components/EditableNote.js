import React from 'react'
import styles from './components.module.css'
export const EditableNote = ({id,title,text,date,DeleteButton,setMustEdit,setNewTitle,setNewText}) => {
 
const handleEdit = ()=>{
    setMustEdit(false)
} 
const handleTitleEdit = (event)=>{
    setNewTitle(event.target.value)
}
const handleTextEdit = (event)=>{
    setNewText(event.target.value)
    
}
  return (
    <div className={styles.notes}>
      <div className={styles.header } >
      <input 
      value={title}
      onChange={handleTitleEdit}/>
    <textarea value={text} onChange={handleTextEdit}></textarea>
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
