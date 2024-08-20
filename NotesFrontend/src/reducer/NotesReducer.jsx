const NotesReducer =(state, action) =>{
    switch (action.type) {
        case "Put_data":
            const allData = action.payload.results
            const totalpage = Math.ceil(action.payload.count)
            return{
                ...state,"isloading":false, "AllNotes" : allData, "FilterNotes" : allData, "total_page": totalpage
            };
        case "update_filter":
            const value = action.payload
            let filterList = [...state.AllNotes]
            console.log(value, "hero")
            if(value !== "ALL"){
                filterList = state.AllNotes.filter((data)=>{
                    return data.category.category_name === value
                })
            }
            
            return{
                ...state, "isloading":false, "FilterNotes" : filterList
            }
        case "SearchProd":
            const {name , keyWord} = action.payload
            console.log("namr",name, keyWord)
            let searchedList = [...state.AllNotes]
            if(keyWord !== ""){
                searchedList = state.AllNotes.filter((curr)=>{
                    return(
                        curr.notes_title.toLowerCase().includes(keyWord.toLowerCase())
                    )
                })
            }
            return{
                ...state,
                "isloading":false, "searchWord" : keyWord, "FilterNotes" : searchedList
            };
        case "isloading":
            return{
                ...state, "isloading" :true
            };
        case "Previous":
            return{
                ...state, "current_page" : state.current_page -1
            };
        case "Next":
            return{
                ...state, "current_page" : state.current_page + 1
            };
        case "singleNote":
            return{
                ...state, "selected_note": action.payload
            };
        case "Remove_selected":
            console.log("in redu", state.selected_note)
            return{
                ...state, "selected_note": null
            }
            
    
        default:
            return{...state};
    }
}
export default NotesReducer