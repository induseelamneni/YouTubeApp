import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import { toggleMenu } from "../utils/appSlice"
import {useDispatch, useSelector} from "react-redux"
import { YOUTUBE_SEARCH_API } from "../utils/constants"
import {cacheResults} from "../utils/searchSlice"
import {userSearchedValue} from "../utils/searchValueSlice"

import {PERSON_ICON ,CROSS_ICON} from "../utils/constants"

const Header = () => {
    const [searchQuery , setSearchQuary] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [optionFromSuggestion, setOptionFromSuggestion] = useState("")
   
  
    const dispatch = useDispatch()
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    const searchCache = useSelector((store) => store.search)

    useEffect(()=> {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]){
                setSearchResults(searchCache[searchQuery])
            }else{
                getSearchApi()
            }
        }, 200);
        return () => {
            clearTimeout(timer)
        } 

    }, [searchQuery])

    const getSearchApi = async() => {
           const data = await fetch(YOUTUBE_SEARCH_API+ searchQuery)
           const jsonData = await data.json()
           setSearchResults(jsonData[1])

           dispatch(cacheResults({
            [searchQuery] : jsonData[1],
    }))
    }

    const onSearchResult = () => {
        console.log(searchQuery)
        if(searchQuery === ""){
            dispatch(userSearchedValue(optionFromSuggestion))
           
        }else{
            dispatch(userSearchedValue(searchQuery))
        }
       
        setSearchQuary("")
    
    
    }

    const onSearch = (e) => {
        
        setSearchQuary(e.target.value)
        setOptionFromSuggestion(e.target.value)
    }

    const onClearInputValue = () => {
        setSearchQuary("")
        setOptionFromSuggestion("")

    }

    return (<>
        <div className="bg-white shadow-lg p-1 grid grid-flow-col fixed " style={{width: "100%"}}>
           
            <div className="col-span-1 px-2 flex items-center">
               
                <img 
                onClick={()=> toggleMenuHandler()} 
                src="https://tse1.mm.bing.net/th?id=OIP.WdVzsTqkla5WOWkzdMG6MAAAAA&pid=Api&P=0&h=250" 
                alt="hamburgerimg"  
                className="w-10 h-10 cursor-pointer"
                />
              
                </div>
                <div>
                <a href="/" >
                 <img src="https://tse4.mm.bing.net/th?id=OIP.3GOoOh8inzYCbi-5870hkQHaD4&pid=Api&P=0&h=220" alt="youtube" className="h-20 w-25" />
                 </a>
            </div>
          
            <div className="col-span-10 px-12 pt-4">
            <div className="flex flex-row ">
                <div className="border-2 p-1 border-right rounded-l-full w-1/2">
                <input 
                value={(optionFromSuggestion.length === 0 ?  searchQuery : optionFromSuggestion) } 
                onChange={(e) => setSearchQuary(e.target.value)} 
                placeholder="Search"
                type="text" className="items-center w-[95%] cursor-auto  " 
               
                 />
               
                <button className="float-right items-center" onClick={() => onClearInputValue()}><img src={CROSS_ICON} alt="cross" className="w-5"/></button>
                </div>
                <Link to ={"/results"}>
                <button className="border-black-600 border-2 p-1 w-10 rounded-r-full bg-gray-200" onClick={()=>onSearchResult()}>
                    🔍
                </button>
                </Link>

                
            </div>

            <div className="absolute bg-white p-2 w-[37rem] rounded-lg">
           
                <ul >
            {searchResults.map((each) => (
           
                    <li key={each} className="hover:bg-gray-100"   onClick={(e)=>onSearch(e) } > 
                    <button type="button" value={each}>
                    🔍 {each}
                    </button>
                    </li>  
            ))}
            </ul>
            </div>
            </div>
            <div className="col-span-1 flex items-center">
                <img src={PERSON_ICON} alt="person" className="h-8 w-8"/>
            </div>

        </div>
        </>
    )
}

export default Header