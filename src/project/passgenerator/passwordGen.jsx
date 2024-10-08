import { useCallback, useEffect, useRef, useState } from "react";

function Passgenerator() {
  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  const [addnumber, setNumber] = useState("false");
  const [char, setChar] = useState("false");

  const passgenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (char) {
      str += "!@#$%^&*(){}?><";
    }
    if (addnumber) {
      str += "1234567890";
    }
    for (let i = 1; i <= length; i++) {
      let val = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(val);
    }
    setPassword(pass);
  }, [char, length, addnumber, setPassword]);

  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  const myFunction = () => {
    document.getElementById("btn").innerText = "Text Copied";
    document.getElementById("btn").style.backgroundColor = "green";
  };
  useEffect(() => {
    passgenerator();
  }, [char, length, addnumber, passgenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={() => {
              copyPasswordToClipboard(), myFunction();
            }}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            id="btn">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
                console.log(e);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={addnumber}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Passgenerator;
