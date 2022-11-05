import React,{useState} from 'react'

export const TestElement = () => {
    const data =[
        'Apple',
        'Orange',
        'Banana',
        'pizza',
        'chips'
    ]

    const dataList= data.map((string)=>{
        return <h1>{string}</h1>
    })

    const[listState,setListState]=useState([dataList])
    const[text,setText]=useState()
    const handleSearch = (event) =>{
setText(event.target.value)
const newList = data.map((string)=>{
if((string).includes(text)){
    return <h1>{string}</h1>
}
})
setListState(newList)
    }
  return (
    <div>
        <input placeholder='Search'
        onChange={handleSearch}
        value={text}
        />
        {listState}
    </div>
  )
}
