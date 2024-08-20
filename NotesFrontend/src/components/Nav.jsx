import React from 'react'
import { useNoteContext } from '../context/NoteContext'


const Nav = () => {
  const{isScalled, setisScalled, searchNotes, ...Notesdata} = useNoteContext()
  return (
    <nav className="flex bg-white justify-between px-20 py-7 shadow-sm shadow-gray-400 items-center">
        <form action="/search" className="w-[25%]" method="get">
        <input type="text" placeholder="Search" className="rounded-3xl text-sm w-full  font-semibold border border-gray-400 text-gray-500 px-4 py-2"
        value={Notesdata.searchWord} name="search" onChange={searchNotes}/>
        </form>
        <h1 className="text-2xl text-center font-header font-bold">NoteDown</h1>
        <button className="bg-transparent border flex gap-2 items-center justify-center border-black rounded-3xl px-5 py-2 font-semibold text-sm" onClick={()=>(setisScalled(true))}>
        <i className="fa-solid fa-pen"></i>
        <p>Create Note</p>
            </button>
        
        <div className="flex flex-col justify-center items-center gap-0">
            
            <a href="/login"><h2 className="text-2xl hover:text-[#7747ff]" ><i className="fa-solid fa-right-from-bracket"></i></h2></a>
            <p className="text-sm text-gray-400 ">logout</p>
        </div>
        
               
        

    
    </nav>
  )
}

export default Nav
