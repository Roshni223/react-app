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
  const getWordCharCount=(text)=>{
    if(!text || text.trim().length==0){
      return {wordCount:0,charCount:0}
    }
    const wordsArray = text.trim().split(/\s+/);
    const wordCount = wordsArray.length;
    const charCount = text.length;
  
    return { wordCount, charCount };

  };
  return (
    <div>
        {/* <div className="mb-3" style={{backgroundColor: props.mode==="light"?"white":"grey"}}> */}
        <div className="mb-3">

        <h2>{props.heading}</h2>
        {/* <textarea type="text" className="form-control" onChange={handleOnChange} id="formGroupExampleInput2" value={text} style={{backgroundColor: props.mode==="light"?"white":"grey", color:props.mode=="light"?"black":"white"}} rows="8"></textarea> */}
        <textarea type="text" className="form-control" onChange={handleOnChange} id="formGroupExampleInput2" value={text} rows="8"></textarea>

        </div>
        <button className="btn mx-2" onClick={handleOnUpClick} style={{backgroundColor:props.mode==="#ffffff"?"black":"white",color:props.mode==="#ffffff"?"white":"black"}}>Change to Uppercase</button>
        <button className="btn mx-2" onClick={handleOnLowClick} style={{backgroundColor:props.mode==="#ffffff"?"black":"white",color:props.mode==="#ffffff"?"white":"black"}}>Change to Lowercase</button>
        <button className="btn mx-2" onClick={handleClearText} style={{backgroundColor:props.mode==="#ffffff"?"black":"white",color:props.mode==="#ffffff"?"white":"black"}}>Clear text</button>
        <button className="btn mx-2" onClick={handleCopyText} style={{backgroundColor:props.mode==="#ffffff"?"black":"white",color:props.mode==="#ffffff"?"white":"black"}}>Copy to clipboard</button>
        {/* <div className='container' style={{backgroundColor: props.mode==="light"?"white":"grey"}}> */}
        <div className='container'>

          <h2>Your text summary</h2>
          <p>No of Words {getWordCharCount(text).wordCount} No of Chars {getWordCharCount(text).charCount}</p>
          <p>Time to read {0.08*getWordCharCount(text).wordCount  } minutes</p>
        </div>
        
    </div>
  )
}
