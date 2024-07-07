import React,{useState} from 'react'


export default function TextForm(prop) {
    const handleupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handleclick=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    const handleChange1=(event)=>{
        setText(event.target.value);
    }
    const handlelowclick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }

    const handle=()=>
    {
        navigator.clipboard.writeText(text);

    }
    const handleundo=()=>
        {
            <a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
    
        }
    const [text,setText] = useState('');
    
    
    
  return (
    <>
    <div className='container'>

        <h1>{prop.heading}</h1>
        <div className="container my-1">
            <textarea className="form-control" value={text} onChange={handleChange1} style={{backgroundColor:prop.mode==='light'?'white':'grey' , color:prop.mode==='light'?'black':'white'}} id="text" rows="10"></textarea>
            </div><div className="my-3">
            <button className="btn btn-info mx-2 my-2" onClick={handleupclick}>Convert to UpperCase</button>
            <button className="btn btn-warning mx-2 my-2" onClick={handlelowclick}>Convert to LowerCase</button>
            <button className="btn btn-success mx-2 my-2" onClick={handleclick}>Remove Extra Spaces</button>
            <button className="btn btn-danger mx-2 my-2" onClick={handle}>Copy</button>
            <button className="btn btn-dark btn-circle btn-xll mx-2 my-2" onClick={handleundo}> Undo  </button>
            <button className="btn btn-dark btn-circle btn-xS my-2 mx-2"> Redo  </button> 

            
            </div>
    </div>
    <div className='container my-2'>
        <h1>Your Text Summary</h1>
        <p>In your Text Number of words are - {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
            <br/>
            In your Text Number of Characters are - {text.length===0?"0":text.length}
            <br/>
            Minutes for Read - {0.08 * text.split(" ").length} minutes
        </p>
        <div className="preview">
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text For preview" }</p>
        </div>
    </div>
    </>
    
  )
}
