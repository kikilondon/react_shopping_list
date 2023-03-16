import React from 'react'
import { BsX } from "react-icons/bs";

const LineItem = ({item, handleCheck, handleDelete }) => {
  return (
    <li className ="item" key = {item.id}>
    <input className="checkbox"
      type="checkbox"
      onChange={() => handleCheck(item.id)}
      checked={item.checked}
    />
    <label
      style = {(item.checked) ? { textDecoration: 'line-through'} :null}
        onDoubleClick={() => handleCheck(item.id)}
        >{item.item}
    </label>
      <BsX
      onClick={() => handleDelete(item.id)}
      role="button" 
      tabIndex="0"
      aria-label={`Delete ${item.item}`}
    />
  </li>
  )
}

export default LineItem
