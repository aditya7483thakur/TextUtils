import React ,{useState} from 'react'

export default function About() {
  const [style,setStyle] = useState({
      color: 'black',
      backgroundColor: 'white'
    }
  )
  const [btntext,setBtnText] = useState("Disable Dark Mode")
  const ontoggle = () => {
    if(style.color === "white"){
      setStyle({
        color : 'black',
        backgroundColor : 'white'
      })
      setBtnText("Enable Dark Mode")
    }else{
      setStyle({
        color : "white",
        backgroundColor : "black"
      })
      setBtnText("Disable Dark Mode")
    }
  }
  return (
    <div className='container my-3' style={style}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={style}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Analyze Your text
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" style={style} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or converting to upper or lower case.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Free to Use
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" style={style} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word / character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Browser Compatible
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" style={style} data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This word counter software works in any web browsers such Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <div className='container my-3'>
        <button type="button" onClick={ontoggle} className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  )
}
