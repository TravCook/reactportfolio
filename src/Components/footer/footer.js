import "./footer.css"

function footer(){
  return(
    <div className="sticky bottom-0 lg:bottom-0 text-white flex flex-row bg-slate-700 rounded shadow-lg footerDiv">
      <a className="text-left basis-1/4 m-2">contact me</a>
      <div className="font-bold basis-2/4 m-2 text-xs">© NoCo Web Solutions LLC.</div>
      <div className="basis-1/4 text-right m-2 grid grid-cols-3">
        <a href="https://www.github.com/TravCook" className="fa fa-github m-auto"></a>
        <a href="https://www.linkedin.com/in/travis-cook93/" className="fa fa-linkedin m-auto"></a>
        <a href="https://twitter.com/NoCoWebDevelop" className="fa fa-twitter m-auto"></a>
      </div>
    </div>
  )
}

export default footer