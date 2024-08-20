import React, { useState } from 'react'
import { useNoteContext } from '../context/NoteContext'

const CreateNotes = ({}) => {
    const{ isScalled,PostData, setisScalled, selected_note, handelData, ...data} = useNoteContext()
    
    
    return (
        <div className={`h-screen w-full backdrop-blur-sm z-20 transition-all duration-200 bg-[rgba(0, 0, 0, 0.413)]  absolute top-0 left-0 grid place-items-center ${isScalled ? "scale-100" : "scale-0"}`}>
            <h2 className='text-xl  absolute top-4 right-8' onClick={()=>(setisScalled(false))}><i className="fa-solid fa-x"></i></h2>
            <div className="w-full max-w-xl p-5 bg-white rounded-lg shadow-md shadow-black">
                <label className="block text-gray-700 text-sm font-bold mb-2"
                >Title</label>
                <input className="text-sm mb-4 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100"
                    placeholder="Enter title here"
                    type="text"
                    name='notes_title'
                    value={data.notes_title}
                    onChange={handelData}
                    id="unique-input"
                />
                <label className="block text-gray-700 text-sm font-bold mb-2" 
                >Contet</label>
                
                <textarea placeholder="Enter description here" name='notes_content'
                    value={data.notes_content}
                    onChange={handelData} id="" cols="30" rows="10" className='text-sm  w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:outline-blue-300 hover:shadow-lg hover:border-blue-300 bg-gray-100'></textarea>
                <label className="block mt-4 text-gray-700 text-sm font-bold mb-2" 
                >Category</label>
                <select className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" id="gender" 
                name='category_id' onChange={handelData}>
                    <option className='px-0 py-2' value="4">Business</option>
                    <option className='px-0 py-2' value="3">Important</option>
                    <option className='px-0 py-2' value="2">Personal</option>
                    <option className='px-0 py-2' value="1">Genral</option>
                </select>

                <button className='px-8 py-2 ml-auto font-semibold font-header block  rounded-xl bg-purple-400 text-white' 
                onClick={PostData}>{selected_note? "Update" : "Add"}</button>
            </div>

        </div>

    )
}

export default CreateNotes
