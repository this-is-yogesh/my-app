import React , {useState}from 'react'

export default function Textform(props) {
  
 const [text, setText ] = useState ("");

 const handleupclick= ()=>{
    console.log("On click was clicked" )
    let newtext = text.toUpperCase();
    setText(newtext)
    props.alerthere("Converted to Uppercase" , "success")
 }

 const handlelowclick= ()=>{
    console.log("On click was clicked" )
    let newtext = text.toLowerCase();
    setText(newtext)
    props.alerthere("Converted to Lowercase" , "success")
 }

 const handleremoveextraspace= ()=>{
   let newtext = text.split(/[ ]+/)
   setText(newtext.join(" "))
   props.alerthere("Extra Spaces Removed" , "success")
 }

 const handlecopytext=()=>{
   var text = document.getElementById("myBox")
   text.select()
   navigator.clipboard.writeText(text.value)
   props.alerthere("Copied To Clipboard" , "success")
 }

 const handlecleartext=()=>{
  let newtext = "";
 setText(newtext)
  props.alerthere("Text Cleared" , "success")
}

 
    
 const handleonchange= (event)=>{
    console.log("On change ")
    setText(event.target.value)
 }


    return (
        <>
    <div className='container' style={{ color :props.moding ==='dark' ? 'white' : '#042743'}}>
 <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="myBox" value = {text } style = {{backgroundColor :props.moding ==='dark' ? '#042743' : 'white', color :props.moding ==='dark' ? 'white' : '#042743'}}
  onChange={handleonchange} rows="8"></textarea>  {/* the color style in the txt area
  signfies the color of the txt written in the text box */}
</div>
<button className="btn btn-primary mx-1" onClick= {handleupclick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick= {handlelowclick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick= {handleremoveextraspace}>Remove Extra Space</button>
<button className="btn btn-primary mx-1" onClick= {handlecopytext}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick= {handlecleartext}>Clear Text</button>

    </div>

    <div className="container my-2" style={{ color :props.moding ==='dark' ? 'white' : '#042743'}}>
        <h1>Your text summary</h1>
        <p> {text.split(" ").length } words , {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } Minutes Read</p>
        <h2> Preview</h2>
        <p>{text.length>0 ? text : "Write something in the textbox to preview it here "}</p>
    </div>
    </>
  )
}
