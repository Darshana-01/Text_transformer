import React, {useState} from 'react'

function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () =>{
        // console.log("Lowercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleCapClick = () =>{
        // console.log("Capitalize was clicked " + text);
        let words = text.split(" ")
        let uppercaseword = ''
        words.forEach(element=>{
            uppercaseword+= element.charAt(0).toUpperCase()+element.slice(1)+" "
        }
            );
            setText(uppercaseword)
    }

    const handleClearClick = () =>{
        // console.log("Clear was clicked " + text);
        let newText = "";
        setText(newText)
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    // text = "new text"; // Wrong way to change the state
    // setText("New Text"); // Correct way to change the state
    return (
        <>
        <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode=== 'dark'?'white':'#042743'}} id="textBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary m-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="btn btn-primary m-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary m-2" onClick={handleCapClick}>Capitalize The Text</button>
            <button className="btn btn-primary m-2" onClick={handleClearClick}>Clear the text</button>
        </div>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
        <p>Time takes to read: <b>{0.008 * text.split(" ").length}</b> wpm</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}

export default TextForm