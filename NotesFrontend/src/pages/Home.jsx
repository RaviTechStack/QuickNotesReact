import React from 'react'

import Card from '../components/card'
import Nav from "../components/Nav"
import CategoryMenu from '../components/CategoryMenu'
import CreateNotes from '../components/CreateNotes'
import DetailNote from '../components/DetailNote'

import { useNoteContext } from '../context/NoteContext'
import Pagination from '../components/Pagination'
import { Link } from 'react-router-dom'

const Home = () => {
    const {closeDetail, showNote, ...Notesdata} = useNoteContext()

  return (
    <>
      <Nav />
      <CategoryMenu />
      <DetailNote />
      {Notesdata.isLoading ? "loading": <div className='grid grid-cols-3 gap-8 w-4/5 mx-auto py-6'>
        {Notesdata.FilterNotes.map((ele, ind)=>{
          return(
            <Card key={ele.id} data={ele} onClick={()=>{showNote(ele)}}/>
          )
        })}
      </div> }
      
        <Pagination />
        <CreateNotes />
        
      </>
  )
}

export default Home
