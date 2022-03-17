import "./aboutMe.css"
import {ChevronDoubleDownIcon} from "@heroicons/react/outline"
import me from "../../public/me.jpg"

const scroll = () => {
  const skills = document.getElementById("skills")
  skills.scrollIntoView({behavior: "smooth"})
}

function aboutMe(){
  return (
    <div className=" grid-cols-1 grid-rows-2 h-screen lg:h-auto py-32 ">
        <div className="bg-slate-100 p-10 m-auto w-96 row-start-1 rounded snap-center font-bold text-lg text-black bg-gray-50">
          I am a full-stack web developer who is currently an instruction specialist at the full-stack bootcamp by Trilogy/2U education through the Georgia Institute of Technology. Thanks to this experience I am well versed in many front-end and back-end languages. When I am not working with students, I am working on some of my side coding projects, and watching sports like baseball, hockey, or the premier league.
          <img src={me}></img>
        </div>
        
        <button onClick={scroll}>
          <ChevronDoubleDownIcon className="row-start-2 py-12 h-36 w-32 m-auto text-white animate-pulse lg:invisible" />
        </button>
    </div>
  )
}

export default aboutMe