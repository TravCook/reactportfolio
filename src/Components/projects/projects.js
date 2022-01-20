import "./projects.css"

function projects(){
  return (
    <div className="projContainer my-16 mx-auto rounded w-11/12 drop-shadow-xl ">
      <div className="flex flex-row my-4">
        <div className="text-white mx-auto bg-slate-700 rounded basis-5/12 m-2 drop-shadow-xl">this is a space for PROJECT 1</div>
        <div className="text-white mx-auto bg-slate-700 rounded basis-5/12 m-2 drop-shadow-xl">this is a space for PROJECT 2</div>
      </div>
      <div className="flex flex-row my-4">
        <div className="text-white mx-auto bg-slate-700 rounded basis-5/12 m-2 drop-shadow-xl">this is a space for PROJECT 3</div>
        <div className="text-white mx-auto bg-slate-700 rounded basis-5/12 m-2 drop-shadow-xl">this is a space for PROJECT 4</div>
      </div>
    </div>
  )
}

export default projects