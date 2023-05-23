import React, { useState } from "react";
import PropTypes from "prop-types";

export default function NewForm(props) {

  // const showAlert = (message,type) =>{
  //   setAlert({
  //     msg : message,
  //     alertype : type
  //   })
  // }
  const LowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const UpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const ClearText = () => {
    let newText = "";
    setText(newText);
  };

  const CopyText = () => {
    navigator.clipboard.writeText(text);
    alert("You copied Text!");
    // showAlert("Message has been copied","sucess");
    
  };

  const HandleChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // const[alert,setAlert] = useState(null);

  
  return (
    <div>
      <form>
        <div class="form-group">
          <h3>
            <b>{props.heading}</b>
          </h3>
          <textarea
            class="form-control"
            value={text}
            onChange={HandleChange}
            id="alphabets"
            rows="5"
          ></textarea>
          <br></br>
          <button type="button" class="btn btn-dark mx-2" onClick={LowerCase}>
            Convert to Lower Case
          </button>
          <button type="button" class="btn btn-dark mx-2" onClick={UpperCase}>
            Convert to Upper Case
          </button>
          <button type="button" class="btn btn-dark mx-2" onClick={ClearText}>
            Clear
          </button>
          <button type="button" class="btn btn-dark mx-2" onClick={CopyText}>
            Copy to Clipboard
          </button>
        </div>
        <div className="container my-1">
          <h3>
            <b>Text Summary: </b>
          </h3>
          <p> Number of Words: {text.split(" ").length} </p>
          <p> Number of Characters : {text.length}</p>
        </div>
        <div className="container my-2 text-center">
          <h3>
            <b>Preview: </b>
          </h3>
          <p>{text}</p>
          {/* <textarea
            class="form-control"
            value={text}
            id="alphabets"
            rows="5"
          ></textarea> */}
        </div>
      </form>
    </div>
  );
}

NewForm.propTypes = {
  heading: PropTypes.string,
};
NewForm.defaultProps = {
  heading: "Add a Heading",
};
