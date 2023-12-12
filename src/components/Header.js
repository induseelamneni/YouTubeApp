import { useEffect, useState } from "react"
import { toggleMenu } from "../utils/appSlice"
import {selectedMenu} from "../utils/selectedSearchOptionSlice"
import {useDispatch, useSelector} from "react-redux"
import { YOUTUBE_SEARCH_API } from "../utils/constants"
import {cacheResults} from "../utils/searchSlice"
import {btnClicked} from "../utils/searchBtnSlice"

import {PERSON_ICON ,CROSS_ICON} from "../utils/constants"



const Header = () => {
    const [searchQuery , setSearchQuary] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
   

  
    const dispatch = useDispatch()
    const toggleMenuHandler = () => {
        dispatch(toggleMenu())
    }

    const searchCache = useSelector((store) => store.search)
    const selectedValue = useSelector((store) => store.selectedSearch)

 

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

    // const onChangeValue = (e) => {
    //     // console.log(e.target.value)
    //     if (selectedValue){
    //         setSearchQuary(selectedValue)

    //     }else{
    //         setSearchQuary(e.target.value)
    //     }
    //     // setSearchQuary(event.target.value)
        
    // }


    return (<>
        <div className="bg-white shadow-lg p-1 grid grid-flow-col fixed " style={{width: "100%"}}>
           
            <div className="col-span-1 px-2 flex items-center">
                <a href="/" >
                <img onClick={()=>toggleMenuHandler()} src="https://tse1.mm.bing.net/th?id=OIP.WdVzsTqkla5WOWkzdMG6MAAAAA&pid=Api&P=0&h=250" alt="hamburgerimg"  className="w-10 h-10 cursor-pointer"/>
                </a>
                </div>
                <div>
            <img src="https://tse4.mm.bing.net/th?id=OIP.3GOoOh8inzYCbi-5870hkQHaD4&pid=Api&P=0&h=220" alt="youtube" className="h-20 w-25" />
            </div>
          
            <div className="col-span-10 px-12 pt-4">
            <div className="flex flex-row ">
                <div className="border-2 p-1 border-right rounded-l-full w-1/2">
                <input value={selectedValue.selectedValue.length === 0 ? searchQuery : setSearchQuary(selectedValue.selectedValue)  } onChange={(e) => setSearchQuary(e.target.value)} onFocus={() => setShowSuggestion(true)} onBlur={() => setShowSuggestion(false)} type="text" className="items-center w-3/4 cursor-auto  " />
                <button className="float-right items-center" onClick={() => setSearchQuary("")}><img src={CROSS_ICON} alt="cross" className="w-5"/></button>
                </div>
                <button className="border-black-600 border-2 p-1 w-10 rounded-r-full bg-gray-200" onClick={()=>dispatch(btnClicked())}>🔍</button>
                
            </div>
            <div className="absolute bg-white p-2 w-[37rem] rounded-lg">
                {(searchQuery ) && <ul >
            {searchResults.map((each) => (
                <li key={each} className="hover:bg-gray-100"> 
                <button type="button"  onClick={ () => dispatch(selectedMenu(each))}>
                🔍 {each}
                </button>
                </li>
            ))}
           
            </ul>}
            
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

// className="flex items-center"
// && showSuggestion
// (e) => setSearchQuary(e.target.value)