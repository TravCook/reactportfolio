import "./projects.css"

function projects(){
  return (
    <div className="projectDiv bg-blue-400 rounded w-10/12 drop-shadow-xl">
      <div className="flex flex-row m-auto my-4">
        <div className="bg-gray-400 rounded basis 1/2 m-2 drop-shadow-xl">this is a space for PROJECT 1</div>
        <div className="bg-gray-400 rounded basis 1/2 m-2 drop-shadow-xl">this is a space for PROJECT 2</div>
      </div>
      <div className="flex flex-row m-auto my-4">
        <div className="bg-gray-400 rounded basis 1/2 m-2 drop-shadow-xl">this is a space for PROJECT 3</div>
        <div className="bg-gray-400 rounded basis 1/2 m-2 drop-shadow-xl">this is a space for PROJECT 4</div>
      </div>
    </div>
  )
}

export default projects