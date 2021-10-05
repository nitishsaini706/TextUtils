import React, { useState } from "react";

export default function TestForm(props) {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");

  const handlechange = (event) => {
    setText(event.target.value);
  };
  const handlechange2 = (event) => {
    setText2(event.target.value);
  };

  const clickupchange = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const clicklochange = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clear = () => {
    let newText = "";
    setText(newText);
  };

  const copy = (event) =>{

    navigator.clipboard.writeText(event.target.value);
  }

  const search = () => {
    
    
    if (text === "" || text2 === "") {
      alert("Your text is empty");
    } 

    for(let i=0;i<text.length;i++)
    {
      if ( text.split(" ").[i] === text2) {
        alert("word is present");
      }
    }
    
  };

  return (
    <>
      <div className={`container text-${props.mode ==="light" ? "dark" : "light"}`}>
        <div className="mb-3">
          <h1>Enter the Text</h1>
          <textarea
            className="form-control"
            value={text}
            style={{backgroundColor:props.mode ==="dark" ? "gray" : "white", color:props.mode ==="light" ? "black" : "white"}}
            onChange={handlechange}
            rows="8"
          ></textarea>

          {/* ---------------------------------------------buttons start here --------------------------- */}
          <button
            type="button"
            onClick={clickupchange}
            className="btn btn-primary my-2 mx-2"
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            onClick={clicklochange}
            className="btn btn-primary my-2 mx-2"
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            onClick={clear}
            className="btn btn-primary my-2 mx-2 "
          >
            Clear text
          </button>

          <button
            type="button"
            value={text}
            onClick={copy}
            className="btn btn-primary my-2 mx-2"
          >
            copy
          </button>

          <nav className="navbar">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                value={text2}
                onChange={handlechange2}
                aria-label="Search"
              />
              <button
                className="btn btn-success my-2 my-sm-2"
                type="submit"
                onClick={search}
              >
                Search
              </button>
            </form>
          </nav>
        </div>
      </div>

      {/* ------------------------------- buttons end here-------------------------------------------------------------- */}

      {/* <div class="input-group">
        <div class="form-outline">
          <input type="search" id="form1" class="form-control" />
          <label class="form-label" for="form1">
            Search
          </label>
          <button type="button" class="btn btn-primary">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div> */}

      {/* -----------------------------------search ends here-------------------------------------------------------------- */}

      <div className={`container my-0 text-${props.mode ==="light" ? "dark" : "light"}`}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters
          
        </p>
        <p>Time to read : {0.8 * text.split(" ").length} minutes</p>

        <h2>Preview</h2>
        <p>{text.length>0 ? text : "enter your text on textbox to preview"}</p>
      </div>
    </>
  );
}
