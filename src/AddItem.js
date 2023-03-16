import React from 'react'
import { BsPlusLg } from "react-icons/bs"
import { useRef } from 'react'


const AddItem = ( {newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef()
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
    <input 
        autoFocus
        ref={inputRef}
        type ="text"
        placeholder= "Add item"
        required
        value = {newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
    <button 
        type="submit"
        aria-label='Add Item'
          onClick={()=> inputRef.current.focus()}>
          
        <BsPlusLg/>

        </button>


 


    </form>
  )
}

export default AddItem
