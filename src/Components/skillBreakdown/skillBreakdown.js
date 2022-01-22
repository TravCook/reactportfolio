import {ChevronDoubleDownIcon} from "@heroicons/react/outline"

function skillBreakdown(){
  return(
    <div className="h-screen lg:h-auto">
      <div className="h-96 my-12 lg:my-4 mx-auto flex flex-row lg:h-auto">
        <div className="h-5/6 snap-center my-auto text-white bg-slate-700 basis-1/2 m-2 rounded shadow-lg lg:h-auto ">
          this is a space for front end skills
        </div>
        <div className="h-5/6 my-auto text-white bg-slate-700 basis-1/2 m-2 rounded shadow-lg lg:h-auto">
          this is a space for back end skills
        </div>
      </div>
      <ChevronDoubleDownIcon className="py-12 h-36 w-32 m-auto text-white animate-pulse lg:hidden" />
    </div>
  )
}

export default skillBreakdown