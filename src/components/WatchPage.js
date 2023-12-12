import { useEffect } from "react"
import {useDispatch} from "react-redux"
import { closeMenu } from "../utils/appSlice"
import {useSearchParams} from "react-router-dom"
import SideContainer from "./SideContainer"
import { PERSON_ICON } from "../utils/constants"
import LiveChat from "./LiveChat"

const commentsData = [
    {
        name:"Indu",
        Title:"I would like to see ur video",
        replies:[
            {
                name:"Indu",
                Title:"I would like to see ur video",
                replies:[
                    {
                        name:"Indu",
                        Title:"I would like to see ur video",
                        replies:[
                            {
                                name:"Indu",
                                Title:"I would like to see ur video",
                                replies:[
                                    {
                                        name:"Indu",
                                        Title:"I would like to see ur video",
                                        replies:[
                                            {
                                                name:"Indu",
                                                Title:"I would like to see ur video",
                                                replies:[
                                                    {
                                                        name:"Indu",
                                                        Title:"I would like to see ur video",
                                                    },
                
                                                ]
                                            },
                                        ]
                                    },

                                ]
                            },
                        ]
                    },
                ]
            },
           
        ]

    },
    {
        name:"Indu",
        Title:"I would like to see ur video",
        replies:[
            {
                name:"Indu",
                Title:"I would like to see ur video",
            }
        ]
    }
]

const Comment = ({info}) => {
 
    return (
        <div className="bg-gray-200 m-2 my-2">
        <div className="flex flex-row">
            <img src= {PERSON_ICON} alt="person" className="w-8" />
            <h1>{info.name}</h1>
        </div>
        <p>{info.Title}</p>
        </div>
    )
}

const CommentsList = ({ comments } ) => {
    return comments.map((comment,index) => (
                <div key = {index} >
                    <Comment  info ={comment} />
                    <div className="pl-5 border border-l-black ml-5">
                    
                    {comment.replies && 
                     <CommentsList comments={comment.replies}/> } 
                    </div>

                </div>
             ))
}
    

const WatchPage = () => {
    const [searchParamas] = useSearchParams()
    // console.log(searchParamas.get("v"))

    const dispatch = useDispatch()
     

    useEffect(() => {
        dispatch(closeMenu())
    },[])

    return (
        <div className="p-4 align-middle flex flex-row pt-[6rem] w-full">
            <div>
            <iframe width="1280" height="700" src={"https://www.youtube.com/embed/"+searchParamas.get("v")} title="My Brother In Law’s Vratham Lunch || Delicious Vegetarian Meal || Infinity Platter || 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div>
            <CommentsList  comments = {commentsData}/>
              
            </div>
            </div>
            
            <LiveChat className="m-3 p-3"/>
        </div>
    )
}


export default WatchPage