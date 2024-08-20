import React from 'react'
import { useNoteContext } from '../context/NoteContext'

const DetailNote = () => {
  const { isFullNote, setisFullNote, closeDetail, selected_note, setisScalled,deleteData  } = useNoteContext()
  if(selected_note){
    return (
      <div className={`h-full w-full overflow-hidden backdrop-blur-sm bg-transparent transition-all duration-200 absolute z-10 top-0 left-0 grid place-items-center ${isFullNote ? "scale-100" : "scale-0"}`}>
        <div className="h-fit w-fit max-w-[30%] bg-white shadow-lg relative shadow-gray-900 px-8 py-10">
          <h2 className='text-md  absolute top-4 right-8' onClick={closeDetail}><i className="fa-solid fa-x"></i></h2>
          <div className="flex justify-between"><h2 className='text-2xl text-gray-800 font-header font-bold '>{selected_note.notes_title}</h2>
          </div>
          <p className='my-5 text-lg text-gray-400 font-semibold font-header ' >{selected_note.notes_content}</p>
          <div className="flex gap-5">
            <button className='px-4 py-2 rounded-md bg-purple-400 text-white font-semibold' onClick={()=>(setisScalled(true))}>Update</button>
            <button className='px-4 py-2 rounded-md bg-red-500 text-white font-semibold' onClick={deleteData}>Delete</button>
          </div>
          <p className='text-gray-400 absolute bottom-1 left-2 font-semibold font-header text-sm'>{selected_note.created_at}</p>
        </div>
      </div>
    )
  }else{
    return(
      <h2 className={`text-2xl text bg-red-500 font-semibold ${isFullNote ? "scale-100" : "scale-0"}`}>Something Went Wrong</h2>
    )
  }
}

export default DetailNote
