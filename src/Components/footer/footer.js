import "./footer.css"

function footer(){
  return(
    <div className="flex flex-row bg-gray-300 rounded shadow-lg footerDiv">
      <div className="text-left basis-1/4 m-2">contact me</div>
      <div className="font-bold basis-2/4 m-2 text-xs">© NoCo Web Solutions LLC.</div>
      <div className="basis-1/4 text-right m-2">socials</div>
    </div>
  )
}

export default footer