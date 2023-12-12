import {PERSON_ICON} from "../utils/constants"

const IndividualChat = ({name,message}) => {
  
    return(
    
        <div className="flex flex-row item-center shadow-sm p-2">
        <img src={PERSON_ICON} alt="person" className="h-6 w-6"/>
            <h1 className="font-medium ml-2 mr-2 text-sky-500">{name}</h1>
            <p> {message}</p>


        </div>
      
    )

}

export default IndividualChat