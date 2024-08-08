import {useSelector} from "react-redux"
import {Link} from "react-router-dom"
const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
 
    if(!isMenuOpen) return( <div className="bg-white shadow-lg p-4 fixed " style={{marginTop:"90px", height:"100%"}}>hi</div>)
 
    return (
            <div className="bg-white shadow-lg p-4 fixed " style={{marginTop:"90px", height:"100%"}}>        
            <ul>
               <Link to="/"> <li>Home</li></Link>
                <li>Shorts</li>
                <li>Video</li>
                <li>Live</li>


            </ul>
            <h1 className="font-bold pt-4">subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Shorts</li>
                <li>Gaming</li>
                <li>Movies</li>


            </ul>
            <h1 className="font-bold pt-4">Watch later</h1>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Video</li>
                <li>Live</li>


            </ul>
        </div>
    )
}

export default SideBar