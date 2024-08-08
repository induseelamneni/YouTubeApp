import {useSearchParams} from "react-router-dom"
import { PERSON_ICON } from "../utils/constants"
import LiveChat from "./LiveChat"
import SideBar from "./SideBar"

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

    return (
        <>
        {/* <div className="p-4 align-middle flex flex-row pt-[6rem] w-full"> */}
        <div className="flex flex-row">
            <SideBar/>
            {/* <div className="pl-4 align-middle pt-[6rem]"> */}
        <div className="p-2 w-[80%] pl-[12rem]  align-middle pt-[8rem]" >

            <iframe width="1200" height="600" src={"https://www.youtube.com/embed/"+searchParamas.get("v")} title="My Brother In Law’s Vratham Lunch || Delicious Vegetarian Meal || Infinity Platter || 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <div>
            <CommentsList  comments = {commentsData}/>
              
            </div>
            </div>
            
            <LiveChat className="m-3 p-3 pt-[8rem]"/>
        </div>
        </>
    )
}


export default WatchPage