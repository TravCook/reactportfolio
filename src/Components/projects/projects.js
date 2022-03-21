import {Link} from "react-router-dom"
import "./projects.css"
import placeholder from "../../public/placeholder.png"
import reactPWGen from "../../public/reactPWGen.png"
import homeworkTracker from '../../public/homeworkTracker.png'

function projects(){
  return (
    <div id="projects" className="h-screen lg:h-screen">
      <div className=" lg:py-4 lg:my-6 h-5/6 snap-center projContainer mx-auto rounded lg:w-9/12 drop-shadow-xl lg:h-auto">
        <div className="flex flex-row">
          <div className="text-white mx-auto bg-slate-700 rounded basis-7/12 m-2 drop-shadow-xl">
            <div className="flex-row">
              <div className="text-xl my-3">Random Password Generator</div>
              <div >
                <img className=" rounded mx-auto w-12/12 lg:w-3/5" src={reactPWGen} />
                <div className="flex-row my-4">
                <a href="https://github.com/TravCook/reactPWGen" target="_blank">
                <button className="mx-2.5 p-2.5 w-5/12 lg:mx-4 bg-emerald-900 lg:p-4 rounded lg:w-4/12">REPO</button>
                </a>
                <a href="https://reactpasswordgenerator.herokuapp.com/" target="_blank">
                  <button className="m-2.5 p-2.5 w-5/12 lg:mx-4 bg-emerald-900 lg:p-4 rounded lg:w-4/12">website</button>
                </a>
              </div>
              </div>
            </div>
          </div>
          {/* <div className="text-white mx-auto bg-slate-700 rounded basis-5/12 m-2 drop-shadow-xl">
            <div className="flex-row">
              <div>Project 2</div>
              <img className="mx-auto w-12/12 lg:w-3/5" src={placeholder} />
            </div>
          </div> */}
        </div>
        <div className="flex flex-row">
          <div className="text-white mx-auto bg-slate-700 rounded basis-7/12 m-2 drop-shadow-xl">
            <div className="flex-row">
              <div className="text-xl my-3">BootcampSpot homework Tracking App</div>
              <img className="mx-auto w-12/12 lg:w-3/5" src={homeworkTracker} />
              <div className="flex-row my-4">
                <a href="https://github.com/TravCook/homeworkTracker" target="_blank">
                  <button className="m-2.5 p-2.5 w-5/12 lg:mx-4 bg-emerald-900 lg:p-4 rounded lg:w-4/12">REPO</button>
                </a>
                <a href="https://gthomeworktracker.herokuapp.com/" target="_blank">
                  <button className="m-2.5 p-2.5 w-5/12 lg:mx-4 bg-emerald-900 lg:p-4 rounded lg:w-4/12">website</button>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="text-white mx-auto bg-slate-700 rounded basis-5/12 m-2 drop-shadow-xl">
            <div className="flex-row">
              <div>Project 1</div>
              <img className="mx-auto w-12/12 lg:w-3/5" src={placeholder} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default projects