import Button from "./Button"

const buttonList = ["All", "Music", "News", "Coocking", "Live" , "Food", "Movies", "Java" , "computers"]

const ButtonList = () => {
    return(
        <ul className="flex">{
            buttonList.map((each) => 
            <li key={each}>
                <Button name = {each}/>
            </li>
            )}
        </ul>
    )

}

export default ButtonList