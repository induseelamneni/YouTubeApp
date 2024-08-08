import { useEffect, useState } from "react"
import IndividualChat from "../components/IndividualChat"
import { useDispatch, useSelector } from "react-redux"
import { addMessages } from "../utils/chatSlice"
import {generateRandomName} from "../utils/helper"
import {randomStringGenerator} from "../utils/helper"

var nameList = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];

const LiveChat = () => {
    const [liveMsg , setLiveMsg] = useState("")
    const dispatch = useDispatch()

    const chatmessages = useSelector((store) => (store.chat.chatmessages))

    useEffect(() => {
        const i = setInterval(() => {
            // console.log("Api Polling")
            dispatch(addMessages({
                name:generateRandomName(),
                message:randomStringGenerator(15) + "🛩 "
            }))

        }, 2000)

        return () =>  clearInterval(i)

    },[])
    

    return (
        <div className="flex flex-col  h-[2100px] pt-[8rem]">
    <div  className=" border border-black-200 shadow-slate-lg border-rouded-lg bg-white-500 m-2 overflow-y-scroll flex flex-col-reverse">
        {chatmessages.map((e,i) => (
             <IndividualChat name={e.name} message={e.message} key={i}/>
        ))}
    </div>
    <form className="border border-black w-[100%]" onSubmit={(e)=> 
    {
        e.preventDefault();
          dispatch(addMessages({
                name:"Indu",
                message:liveMsg + "🛩 "
            }))
            setLiveMsg("")
             }
            
              }>
        <input className="p-2 m-2" onChange={(e)=> {
            setLiveMsg(e.target.value)
           
            }} 
            value={liveMsg} name="chatmsg" type="input"/>
        <button className="text-blue" type="submit">Submit</button>
    </form>
    </div>
    )

}

export default LiveChat