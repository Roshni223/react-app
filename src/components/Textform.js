import React, {useState} from 'react'

export default function Textform(props) {
  const[text,setText] = useState("enter your text here")

  const handleOnUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to uppercase","success")
    
  }

  const handleOnLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to lowercase","success")

  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  const handleClearText = ()=>{
    setText('');
    props.showAlert("Text is cleared","success")

  }

  const handleCopyText =()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied succesfully","success")

  }
  return (
    <div>
        <div className="mb-3" style={{backgroundColor: props.mode==="light"?"white":"grey"}}>
        <h2>{props.heading}</h2>
        <textarea type="text" className="form-control" onChange={handleOnChange} id="formGroupExampleInput2" value={text} style={{backgroundColor: props.mode==="light"?"white":"grey", color:props.mode=="light"?"black":"white"}} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnUpClick}>Change to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnLowClick}>Change to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy to clipboard</button>
        <div className='container' style={{backgroundColor: props.mode==="light"?"white":"grey"}}>
          <h2>Your text summary</h2>
          <p>No of Words {text.split(" ").length} No of Chars {text.length}</p>
          <p>Time to read {0.08*text.split(" ").length} minutes</p>
        </div>
        
    </div>
  )
}
