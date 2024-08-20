import { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios"
import reducer from "../reducer/NotesReducer"


const Notescontext = createContext()


export const NotesContextProvider = ({children}) =>{
const Note_url = "http://127.0.0.1:8000/api/notes/"

const initialState = {
    "AllNotes" : [],
    "FilterNotes" : [],
    "isloading" : false,
    "searchWord" : "",
    "current_page" : 1,
    "total_page" : 1,
    "selected_note" : null,
    
}

    // const [AllNotes, setAllNotes] = useState([])
    const [data, setData] = useState({
        "notes_title": "",
        "notes_content" : "",
        "category_id" : "1",
        "created_by_id": 1,
    })
    const [Notesdata , dispatch] = useReducer(reducer, initialState)


    const searchNotes = (e)=>{
        const name = e.target.name;
        const keyWord = e.target.value
        
        dispatch({type: "SearchProd", payload: {name, keyWord}})
    }
    const updateFilter = (e)=>{
        const value = e.target.value
        dispatch({type : "update_filter", payload: value})
    }

    const handelData = (e) =>{
        const name = e.target.name;
        const value = e.target.value
        setData((prev)=>{
            return{...prev, [name]: value}
        })
    }
    const handlePrevious =()=>{
        if(Notesdata.current_page >1){
            dispatch({type:"Previous"})
        }
    }
    const handleNext =()=>{
        if(Notesdata.current_page < Notesdata.total_page){
            dispatch({type:"Next"})
        }
    }
    
    const PostData =async()=>{
        try {
            const noteToPost = {...data, "category_id" : parseInt(data.category_id)}
            console.log(noteToPost)
                if(Notesdata.selected_note){
                    const response = await axios.put(`${Note_url}${Notesdata.selected_note.id}`, noteToPost)
                    setData({
                        "notes_title": "",
                        "notes_content" : "",
                        "category_id" : "1",
                        "created_by_id": 1,
                    })
                    setisScalled(false)
                }
                else{
                    try {
                        const response = await axios.post(Note_url, noteToPost)
                        setData({
                            "notes_title": "",
                            "notes_content" : "",
                            "category_id" : "1",
                            "created_by_id": 1,
                        })
                        setisScalled(false)
                    } catch (error) {
                        console.log("there is err", error)
                    }
                }
            
        } catch (error) {
            console.log("there is error in fetching", error)
        }
    }
    const fetchData =async(page)=>{
        try {
            dispatch({type:"isLoading"})
            const response = await axios.get(`${Note_url}?page=${page}`)
            const dataToSend = await response.data
            dispatch({type:"Put_data", payload: dataToSend})
        } catch (error) {
            console.log("there is error", error)
        }
    }

    
    useEffect(()=>{
        fetchData(Notesdata.current_page)
    },[Notesdata.current_page])

    const showNote = (ele)=>{
        return(
            dispatch({type: "singleNote", payload: ele}),
            setisFullNote(true)
            
        )
    }
    const closeDetail=()=>{
        dispatch({type: "Remove_selected"}),
        setisFullNote(false)
        console.log("in func", Notesdata.selected_note)
    }
    const deleteData = ()=>{
        try {
            axios.delete(`${Note_url}${Notesdata.selected_note.id}`)
            closeDetail()
        } catch (error) {
            console.log("Cant delete file")
        }
    }
    const [isScalled, setisScalled] = useState(false)
    const [isFullNote, setisFullNote] = useState(false)
    return(
        <Notescontext.Provider value={{...data, ...Notesdata ,isScalled,updateFilter, searchNotes, setisScalled, handelData, PostData,fetchData, handlePrevious, handleNext,isFullNote,setisFullNote, showNote, deleteData, closeDetail}}>
            {children}
        </Notescontext.Provider>
    )
}

export  const useNoteContext = ()=>{
    return(useContext(Notescontext))
}

