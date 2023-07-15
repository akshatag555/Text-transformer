import React,{useState} from 'react'

export default function Textform(props) {
  const handleup = ()=>{
   // console.log("ad");
    let newtext=text.toUpperCase();
    setText(newtext)
    if(text.length===0){
      props.showalert("nothing to convert","warning")
     }
     else{
      props.showalert("converted to uppercase","success")
    }
    
    
   
  }
  const handledown = ()=>{
    // console.log("ad");
     let newtext=text.toLowerCase();
     setText(newtext)
     if(text.length===0){
      props.showalert("nothing to convert","warning")
     }
     else{
      props.showalert("converted to lowercase","success")
     }
    
     
   }
  const handlechange=(event)=>{
   // console.log("ad");
    setText(event.target.value)
  }
  const cleartext=()=>{
    // console.log("ad");
     setText("")
     if(text.length===0){
      props.showalert("nothing to clear","warning")
     }
     else{
      props.showalert("cleared text","success")
     }
     
   }
   const removespace=()=>{
    let newtext=text.split(/[ ]+/)
    let x=newtext.join(" ")
    setText(x)
    if(text.length===0){
      props.showalert("nothing to clear spaces","warning")
     }
     else{
      props.showalert("removed extra spaces","success")
     }
    
  }
  function copy() {
    // Get the text field
    var copyText = document.getElementById("mybox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showalert("copied to clipboard","success")
  
  }
  const [text,setText]=useState("")
  return (
    <div>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
        <h1> Enter your text</h1>
        <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white'}} id="mybox" rows="8" onChange={handlechange}></textarea>
        <button type="button" className="btn btn-primary my-3" onClick={handleup} >Convert to uppercase</button>
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={handledown} >Convert to lowercase</button>
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={copy} >Copy to clipboard</button>
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={cleartext} >Clear text</button>
        <button type="button" className="btn btn-primary my-3 mx-3" onClick={removespace} >Remove Extra Spaces</button>
        </div>
    </div>
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
      <h3>Text Summary</h3>
      <p>
        {text.split(/\s/).filter((element)=>{return element.length!==0}).length} words {text.length} characters
      </p>
      <h5>
        Preview
      </h5>
      <p>
        {text}
      </p>
    </div>
    </div>
    
  )
}
