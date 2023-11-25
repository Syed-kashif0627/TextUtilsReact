import React ,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log('upper case was clicked');
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to Upper case!!','success')
    }
    const handleLoClick=()=>{       
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to Lower case!!','success')
    }
    const Clear=()=>{       
        let newText='';
        setText(newText)
        props.showAlert('Text cleared!!','success')
    }
    const Speak= ()=>{
        let msg= new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }

    const copyText= ()=>{
        navigator.clipboard.writeText(text)
        props.showAlert('Text copied to clip board!!','success')
    }
    const handleOnChange=(event)=>{
        // console.log('On Change');
        setText(event.target.value)
    }
    const handleSpaces= ()=>{
        let newtext=text.split(/[  ]+/);// Regular Expression to check one or more spaces
        setText(newtext.join(" "))
        props.showAlert('Extra spaces removed!!','success')
    }
  const [text,setText]=useState("")
//   text='new text'//wrong way to update the text
//   setText('new text')//correct way to update the text
  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='light'?'white':'black',color:props.mode ==='light'?'#042743':'white'}}id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to upper case</button> 
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lower case</button> 
        <button className="btn btn-primary mx-1" onClick={Clear}>Clear Text</button> 
        <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button> 
        <button className="btn btn-primary mx-1" onClick={handleSpaces}>Remove Spaces</button> 
        <button className="btn btn-primary mx-1" onClick={Speak}>Text to Speak</button> 
    </div>
    <div className="container my-3" style={{color: props.mode ==='light'?'#042743':'white'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview it here"}</p>
    </div>
    </>
  )
}
