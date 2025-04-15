import { useCallback, useEffect, useRef, useState } from "react";

function Passgenerator() {
  const [password, setPassword] = useState();
  const [length, setLength] = useState(8);
  const [addnumber, setNumber] = useState(false);
  const [char, setChar] = useState(false);

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
      let val = Math.floor(Math.random() * str.length);
      pass += str.charAt(val);
    }
    setPassword(pass);
  }, [char, length, addnumber]);

  const passwordRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const myFunction = () => {
    document.getElementById("btn").innerText = "Text Copied";
    document.getElementById("btn").style.backgroundColor = "green";
    setTimeout(() => {
      document.getElementById("btn").innerText = "Copy";
      document.getElementById("btn").style.backgroundColor = "#007BFF";
    }, 2000);
  };

  useEffect(() => {
    passgenerator();
  }, [char, length, addnumber, passgenerator]);

  return (
    <div className="w-full max-w-lg mx-auto shadow-lg rounded-xl px-6 py-6 my-8 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <h1 className="text-center text-3xl font-semibold mb-6">
        Password Generator
      </h1>

      <div className="flex items-center mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-2 px-4 rounded-lg text-gray-800"
          placeholder="Generated Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={() => {
            copyPasswordToClipboard(), myFunction();
          }}
          className="ml-3 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition-all duration-300"
          id="btn"
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-4 mb-6">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer w-full"
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-white">Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={addnumber}
            id="numberInput"
            onChange={() => setNumber((prev) => !prev)}
            className="text-blue-600"
          />
          <label htmlFor="numberInput" className="text-white">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            checked={char}
            id="characterInput"
            onChange={() => setChar((prev) => !prev)}
            className="text-blue-600"
          />
          <label htmlFor="characterInput" className="text-white">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
}

export default Passgenerator;
