import {ChevronDoubleDownIcon} from "@heroicons/react/outline"
import "./skillBreakdown.css"

function skillBreakdown(){
  return(
    <div className="h-screen lg:h-auto">
      <div className="h-96 my-12 lg:my-4 mx-auto flex flex-row lg:h-auto">
        <div className="h-5/6 snap-center my-auto text-white bg-slate-700 basis-1/2 m-2 rounded shadow-lg lg:h-auto ">
          <div className="grid grid-rows-5 gap-2 h-full">FRONT END
            <div className="skillRow row-start-1">ReactJS
              <div className="bg-white w-11/12 rounded">
                <div className="barColor text-yellow-900 w-10/12 rounded">.</div>
              </div>
            </div>
            <div className="skillRow row-start-2">HTML
              <div className="bg-white w-11/12 rounded">
                <div className="barColor text-yellow-900 w-9/12 rounded">.</div>
              </div>
            </div>
            <div className="skillRow row-start-3">Tailwind
              <div className="bg-white w-11/12 rounded">
                <div className="barColor text-yellow-900 w-9/12 rounded">.</div>
              </div>
            </div>
            <div className="skillRow row-start-4">Bootstrap
              <div className="bg-white w-11/12 rounded">
                <div className="barColor text-yellow-900 w-8/12 rounded">.</div>
              </div>
            </div>
            <div className="skillRow row-start-5">CSS
              <div className="bg-white w-11/12 rounded">
                <div className="barColor text-yellow-900 w-6/12 rounded">.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-5/6 my-auto text-white bg-slate-700 basis-1/2 m-2 rounded shadow-lg lg:h-auto">
        <div className="grid grid-rows-5 gap-2 h-full">BACK END
            <div className="skillRow row-start-1">NodeJS
              <div className="bg-white w-11/12 rounded">
                <div className="barColor text-yellow-900 w-11/12 rounded">.</div>
              </div>
            </div>
            <div className="skillRow row-start-2">Express
              <div className="bg-white w-11/12 rounded">
                <div className="barColor text-yellow-900 w-11/12 rounded">.</div>
              </div>
            </div>
            <div className="skillRow row-start-3">SQL
              <div className="bg-white w-11/12 rounded">
                <div className="barColor text-yellow-900 w-9/12 rounded">.</div>
              </div>
            </div>
            <div className="skillRow row-start-4">NOSQL
              <div className="bg-white w-11/12 rounded">
                <div className="barColor text-yellow-900 w-10/12 rounded">.</div>
              </div>
            </div>
            <div className="skillRow row-start-5">GraphQL
              <div className="bg-white w-11/12 rounded">
                <div className="barColor text-yellow-900 w-5/12 rounded">.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChevronDoubleDownIcon className="py-12 h-36 w-32 m-auto text-white animate-pulse lg:hidden" />
    </div>
  )
}

export default skillBreakdown