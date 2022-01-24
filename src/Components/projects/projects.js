import "./projects.css"
import placeholder from "../../public/placeholder.png"
import dndtextbased from "../../public/dndTextBased.png"

function projects(){
  return (
    <div id="projects" className="h-screen lg:h-auto">
      <div className="py-12 lg:py-4 lg:my-6 h-3/6 snap-center projContainer mx-auto rounded w-11/12 drop-shadow-xl lg:h-auto">
        <div className="flex flex-row">
          <div className="text-white mx-auto bg-slate-700 rounded basis-5/12 m-2 drop-shadow-xl">
            <div className="flex-row">
              <div className="text-xl my-3">Text Based DnD</div>
              <a href="https://master.dh3gd75gqzoxx.amplifyapp.com/">
                <img className=" rounded mx-auto w-12/12 lg:w-3/5" src={dndtextbased} />
              </a>
            </div>
          </div>
          <div className="text-white mx-auto bg-slate-700 rounded basis-5/12 m-2 drop-shadow-xl">
            <div className="flex-row">
              <div>Project 2</div>
              <img className="mx-auto w-12/12 lg:w-3/5" src={placeholder} />
            </div>
          </div>
        </div>
        <div className="flex flex-row my-4">
          <div className="text-white mx-auto bg-slate-700 rounded basis-5/12 m-2 drop-shadow-xl">
            <div className="flex-row">
              <div>Project 3</div>
              <img className="mx-auto w-12/12 lg:w-3/5" src={placeholder} />
            </div>
          </div>
          <div className="text-white mx-auto bg-slate-700 rounded basis-5/12 m-2 drop-shadow-xl">
            <div className="flex-row">
              <div>Project 1</div>
              <img className="mx-auto w-12/12 lg:w-3/5" src={placeholder} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects