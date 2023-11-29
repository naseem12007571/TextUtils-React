import React,{useState} from 'react'



export default function Textform(props) {
    const [text, setText]=useState('');
    const handleUpClick=()=>{
       // console.log("handleUpClick button clicked"+ text);
        const newtext=text.toUpperCase();
        setText(newtext);
       props.showAlert("Converted to UpperCase","success");
    }
    const handleClear=()=>{
      // console.log("handleUpClick button clicked"+ text);
       const newtext="";
       setText(newtext);
       props.showAlert("Text clear","success");
   }
    const handleLoClick=()=>{
      // console.log("handleUpClick button clicked"+ text);
       const newtext=text.toLowerCase();
       setText(newtext);
       props.showAlert("Converted to Lowercase","success");
   }
    const handleOnClick=(event)=>{
        setText(event.target.value);
    }
    const handleCopy = () => {
      navigator.clipboard.writeText(text); 
      props.showAlert("Copied to Clipboard!", "success");
  }

  // Credits: Coding Wala
  const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed!", "success");
  }

  return (
    <>
    <div className='container' style={{color: props.mode==='light'?'#042743':'grey'}}>
        <h3 className='mb-4'><strong>{props.heading}</strong></h3>
  <div className="container mb-3">
  <textarea className="form-control" value={text} onChange={handleOnClick} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  </div>
   <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick} >Convert to Uppercase</button>
   <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick} >Convert to Lowercase</button>
   <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClear} >Clear text</button>
   <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
     <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container" style={{color: props.mode==='light'?'#042743':'grey'}}>
      <h3>Your text summry</h3>
      <p>total words:{text.split(" ").filter((element)=>{return element.length!==0}).length} and character:{text.length}</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing To Preview"}</p>
    </div>
    </>
  )
}
