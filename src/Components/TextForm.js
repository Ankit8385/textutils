import React, { useState } from "react";

export default function TextForm(props) {
  // button
  const handleUpCLick = () => {
    // to convert the texts into uppercase
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoCLick = () => {
    // to convert the texts into lowercase
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleClearCLick = () => {
    // to clear the text in the box
    let newText = "";
    setText(newText);
    props.showAlert("All text is cleared", "success");
  };

  // textArea
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  // hook is used here
  const [text, setText] = useState("");
  // setText = "Enter text"; --> Correct way to change text
  // text = "Enter text"; --> Wrong way to change text
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCLick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoCLick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearCLick}>
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>

        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the above text box to preview"}
        </p>
      </div>
    </>
  );
}
