import React from 'react'
import { useNoteContext } from '../context/NoteContext'


const Card = ({data, onClick}) => {
  const {selected_note} = useNoteContext()

  const icons = [
    "fa-solid fa-exclamation",
    "fa-solid fa-user",
    "fa-regular fa-star",
    "fa-solid fa-briefcase",

  ]
  const colors = [
    "purple-300",
    "red-500",
    "green-400",
    "blue-600"
  ]
  const {notes_title, notes_content, category, category_id} = data
 
  return (
<div
  className={`cursor-pointer overflow-hidden relative transition-transform duration-300 hover:-translate-y-2   h-56 bg-neutral-50 rounded-lg border-b- shadow-xl flex flex-row items-center justify-evenly gap-2 p-2 border border-t-4 border-t-${colors[category_id - 1]}`}
  onClick={onClick}>
<i className={`${icons[category_id - 1]} text-2xl px-3 `}></i>
  <div>
    <span className="font-bold">{notes_title}</span>
    <p className="line-clamp-3">
      {notes_content}
    </p>
    <p className='my-2 text-sm text-gray-500 font-semibold font-header'>{category.category_name}</p>
    
  </div>
</div>

  )
}

export default Card
