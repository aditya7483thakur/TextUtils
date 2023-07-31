import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        setText(text.toUpperCase());
    }
    const handleLowClick = () =>{
        setText(text.toLowerCase());
    }
    const replaceAll = () =>{
        const o = new RegExp(oldWord,'g');
        setText(text.replace(o,newWord));
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);       // Due to this statement, I can write in the text box
    }
    const handleOnChange1 = (event) =>{
        ooldWord(event.target.value);
    }
    const handleOnChange2 = (event) =>{
        nnewWord(event.target.value);
    }
    const [text,setText] = useState("");
    const [oldWord,ooldWord] = useState("");
    const [newWord,nnewWord] = useState("");
    return (
        <>
        <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'grey':'white', color : props.mode ==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <br />
            <input type="text" value={oldWord} onChange={handleOnChange1} placeholder='Old Word'/>
            <input type="text" value={newWord} onChange={handleOnChange2} placeholder='New Word'/>
            <button className="btn btn-primary mx-2 my-1" onClick={replaceAll}>Replace All</button>
        </div>
        <div className="container my-2" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words , {text.length} characters</p>
        </div>
        </>
    )
}
