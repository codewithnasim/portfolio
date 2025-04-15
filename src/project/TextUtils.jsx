import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function TextUtils(props) {
  const [text, setText] = useState("");

  const handleClickUppercase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };

  const handleClickLowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleClickClear = () => {
    setText("");
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const extraSpace = () => {
    let newtext = text.split(/[ ]+/).join(" ");
    setText(newtext);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const titleCase = () => {
    let newText = text
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
    setText(newText);
  };

  const countSentences = () => {
    let sentenceCount = text.split(/[.!?]/).filter((s) => s.length > 0).length;
    return sentenceCount;
  };

  const countVowelsAndConsonants = () => {
    let vowels = text.match(/[aeiouAEIOU]/g) || [];
    let consonants =
      text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || [];
    return { vowelsCount: vowels.length, consonantsCount: consonants.length };
  };

  const { vowelsCount, consonantsCount } = countVowelsAndConsonants();

  return (
    <>
      <div className="container">
        <h1 className="text-center p-4 text-3xl text-primary">TextiFy</h1>

        <div className="mb-3">
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "dark" ? "white" : "black"
            }`}
            id="txt"
            rows="7"
            value={text}
            onChange={handleChange}
            placeholder="Enter text here"
          ></textarea>
        </div>

        <div className="d-flex flex-wrap justify-content-center mb-3">
          <button
            className="btn btn-primary m-1"
            onClick={handleClickUppercase}
          >
            Uppercase
          </button>
          <button
            className="btn btn-primary m-1"
            onClick={handleClickLowercase}
          >
            Lowercase
          </button>
          <button className="btn btn-primary m-1" onClick={copyText}>
            Copy Text
          </button>
          <button className="btn btn-danger m-1" onClick={handleClickClear}>
            Clear
          </button>
          <button className="btn btn-warning m-1" onClick={extraSpace}>
            Remove Extra Space
          </button>
          <button className="btn btn-info m-1" onClick={titleCase}>
            Title Case
          </button>
        </div>

        <div className="my-4">
          <h3>Text Summary</h3>
          <p>
            <strong>Words:</strong>{" "}
            {text.split(" ").filter((word) => word.length !== 0).length}
          </p>
          <p>
            <strong>Characters:</strong> {text.length}
          </p>
          <p>
            <strong>Sentences:</strong> {countSentences()}
          </p>
          <p>
            <strong>Vowels:</strong> {vowelsCount}
          </p>
          <p>
            <strong>Consonants:</strong> {consonantsCount}
          </p>
          <p>
            <strong>Reading time:</strong> {0.008 * text.split(" ").length}{" "}
            minutes
          </p>
        </div>

        <div>
          <h3>Preview</h3>
          <p>{text.length > 0 ? text : "Enter some text to preview."}</p>
        </div>
      </div>
    </>
  );
}
