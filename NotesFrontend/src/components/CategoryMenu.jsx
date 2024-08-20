import React from 'react'
import { useNoteContext } from '../context/NoteContext'

const CategoryMenu = () => {
  const {updateFilter} = useNoteContext()
  return (
<div className="flex flex-col items-center justify-center h-fit py-4">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    <form className="flex flex-col">
      
      <label className="text-lg mb-2 text-gray-900 cursor-pointer font-header font-bold " htmlFor="gender">
        Category
      </label>
      <select className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender" onChange={updateFilter}>
        <option className='px-0 py-2' value="ALL">All</option>
        <option className='px-0 py-2' value="BUSINESS">Business</option>
        <option className='px-0 py-2' value="PERSONAL">Personal</option>
        <option className='px-0 py-2' value="IMPORTANT">Important</option>
        <option className='px-0 py-2' value="GENRAL">Genral</option>
      </select>
     
    </form>
  </div>
</div>

  )
}

export default CategoryMenu
