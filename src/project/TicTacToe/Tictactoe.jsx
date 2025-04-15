import React, { useState, useEffect } from "react";

export default function Tictactoe() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [turnO, setTurnO] = useState(true); // true for O, false for X
  const [count, setCount] = useState(0);
  const [msgVisible, setMsgVisible] = useState(false);
  const [msgText, setMsgText] = useState("");
  const [winningCells, setWinningCells] = useState([]);
  const [gameStats, setGameStats] = useState({
    playerX: 0,
    playerO: 0,
    draws: 0,
  });
  const [showStats, setShowStats] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("classic");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [animationDirection, setAnimationDirection] = useState("in");
  const [selectedFirstPlayer, setSelectedFirstPlayer] = useState("O");

  // Themes configuration
  const themes = {
    classic: {
      background: "bg-teal-800",
      title: "text-orange-200",
      boxBg: "bg-teal-700",
      boxHover: "hover:bg-teal-600",
      boxBorder: "border-teal-500",
      buttonBg: "bg-orange-500",
      buttonHover: "hover:bg-orange-600",
      messageBox: "bg-teal-700",
      playerO: "text-blue-300",
      playerX: "text-red-400",
    },
    dark: {
      background: "bg-gray-900",
      title: "text-purple-300",
      boxBg: "bg-gray-800",
      boxHover: "hover:bg-gray-700",
      boxBorder: "border-gray-600",
      buttonBg: "bg-purple-600",
      buttonHover: "hover:bg-purple-700",
      messageBox: "bg-gray-800",
      playerO: "text-purple-400",
      playerX: "text-cyan-400",
    },
    light: {
      background: "bg-white",
      title: "text-rose-600",
      boxBg: "bg-gray-100",
      boxHover: "hover:bg-gray-200",
      boxBorder: "border-gray-300",
      buttonBg: "bg-rose-500",
      buttonHover: "hover:bg-rose-600",
      messageBox: "bg-white",
      playerO: "text-blue-600",
      playerX: "text-rose-600",
    },
  };

  const theme = themes[currentTheme];

  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  useEffect(() => {
    // Load game stats from localStorage
    const savedStats = localStorage.getItem("tictactoeStats");
    if (savedStats) {
      setGameStats(JSON.parse(savedStats));
    }
  }, []);

  useEffect(() => {
    // Save game stats to localStorage whenever they change
    localStorage.setItem("tictactoeStats", JSON.stringify(gameStats));
  }, [gameStats]);

  const resetGame = () => {
    setAnimationDirection("out");

    setTimeout(() => {
      setBoxes(Array(9).fill(""));
      setTurnO(selectedFirstPlayer === "O");
      setCount(0);
      setMsgVisible(false);
      setWinningCells([]);
      setGameStarted(false);
      setAnimationDirection("in");
    }, 300);
  };

  const startNewGame = () => {
    setAnimationDirection("out");

    setTimeout(() => {
      setBoxes(Array(9).fill(""));
      setTurnO(selectedFirstPlayer === "O");
      setCount(0);
      setMsgVisible(false);
      setWinningCells([]);
      setGameStarted(true);
      setAnimationDirection("in");
    }, 300);
  };

  const handleBoxClick = (index) => {
    if (!gameStarted) {
      setGameStarted(true);
    }

    if (boxes[index] === "" && !msgVisible) {
      let newBoxes = [...boxes];
      newBoxes[index] = turnO ? "O" : "X";
      setBoxes(newBoxes);
      setTurnO(!turnO);
      setCount(count + 1);

      checkWinner(newBoxes);
    }
  };

  const checkWinner = (currentBoxes) => {
    // Check for winner
    for (let pattern of winPatterns) {
      let [pos1, pos2, pos3] = pattern;
      if (
        currentBoxes[pos1] !== "" &&
        currentBoxes[pos1] === currentBoxes[pos2] &&
        currentBoxes[pos2] === currentBoxes[pos3]
      ) {
        const winner = currentBoxes[pos1];
        setWinningCells([pos1, pos2, pos3]);

        // Update stats
        if (winner === "X") {
          setGameStats({ ...gameStats, playerX: gameStats.playerX + 1 });
        } else {
          setGameStats({ ...gameStats, playerO: gameStats.playerO + 1 });
        }

        showWinner(winner);
        return;
      }
    }

    // Check for draw
    if (count === 8) {
      setGameStats({ ...gameStats, draws: gameStats.draws + 1 });
      gameDraw();
    }
  };

  const gameDraw = () => {
    setMsgText("Game was a Draw!");
    setMsgVisible(true);
  };

  const showWinner = (winner) => {
    setMsgText(`Player ${winner} Wins!`);
    setMsgVisible(true);
  };

  const toggleStats = () => {
    setShowStats(!showStats);
    setIsSettingsOpen(false);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
    setShowStats(false);
  };

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  const changeFirstPlayer = (player) => {
    setSelectedFirstPlayer(player);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center py-8 ${theme.background} transition-all duration-300`}
    >
      {/* Header */}
      <header className="w-full max-w-md flex justify-between items-center mb-6 px-4">
        <button
          onClick={toggleSettings}
          className={`p-2 rounded-full ${theme.buttonBg} ${theme.buttonHover} transition-all text-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>

        <h1
          className={`text-4xl font-bold ${theme.title} text-center transition-all duration-300`}
        >
          Tic Tac Toe
        </h1>

        <button
          onClick={toggleStats}
          className={`p-2 rounded-full ${theme.buttonBg} ${theme.buttonHover} transition-all text-white`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        </button>
      </header>

      {/* Settings Panel */}
      {isSettingsOpen && (
        <div
          className={`w-full max-w-md mb-6 p-4 rounded-lg shadow-lg ${theme.messageBox} text-white transition-all duration-300`}
        >
          <h2 className="text-xl font-bold mb-4">Settings</h2>

          <div className="mb-4">
            <h3 className="font-medium mb-2">Theme</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => changeTheme("classic")}
                className={`px-3 py-1 rounded ${
                  currentTheme === "classic"
                    ? "bg-teal-600 ring-2 ring-white"
                    : "bg-teal-800"
                }`}
              >
                Classic
              </button>
              <button
                onClick={() => changeTheme("dark")}
                className={`px-3 py-1 rounded ${
                  currentTheme === "dark"
                    ? "bg-purple-600 ring-2 ring-white"
                    : "bg-gray-800"
                }`}
              >
                Dark
              </button>
              <button
                onClick={() => changeTheme("light")}
                className={`px-3 py-1 rounded ${
                  currentTheme === "light"
                    ? "bg-rose-500 ring-2 ring-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Light
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-2">First Player</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => changeFirstPlayer("O")}
                className={`px-3 py-1 rounded ${
                  selectedFirstPlayer === "O"
                    ? "bg-blue-600 ring-2 ring-white"
                    : "bg-gray-700"
                }`}
              >
                Player O
              </button>
              <button
                onClick={() => changeFirstPlayer("X")}
                className={`px-3 py-1 rounded ${
                  selectedFirstPlayer === "X"
                    ? "bg-red-600 ring-2 ring-white"
                    : "bg-gray-700"
                }`}
              >
                Player X
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats Panel */}
      {showStats && (
        <div
          className={`w-full max-w-md mb-6 p-4 rounded-lg shadow-lg ${theme.messageBox} text-white transition-all duration-300`}
        >
          <h2 className="text-xl font-bold mb-4">Game Stats</h2>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className={`p-2 rounded ${theme.boxBg}`}>
              <p className={`text-2xl font-bold ${theme.playerO}`}>
                {gameStats.playerO}
              </p>
              <p className="text-sm">Player O</p>
            </div>
            <div className={`p-2 rounded ${theme.boxBg}`}>
              <p className="text-2xl font-bold text-gray-300">
                {gameStats.draws}
              </p>
              <p className="text-sm">Draws</p>
            </div>
            <div className={`p-2 rounded ${theme.boxBg}`}>
              <p className={`text-2xl font-bold ${theme.playerX}`}>
                {gameStats.playerX}
              </p>
              <p className="text-sm">Player X</p>
            </div>
          </div>
        </div>
      )}

      {/* Game Result Message */}
      {msgVisible && (
        <div
          className={`w-full max-w-md mb-6 p-4 rounded-lg shadow-lg ${theme.messageBox} text-white text-center transition-all duration-300`}
        >
          <p className="text-2xl font-bold mb-4">{msgText}</p>
          <button
            className={`px-6 py-2.5 rounded-md font-medium ${theme.buttonBg} ${theme.buttonHover} transition-colors duration-300 text-white`}
            onClick={startNewGame}
          >
            Play Again
          </button>
        </div>
      )}

      {/* Turn Indicator */}
      {gameStarted && !msgVisible && (
        <div
          className={`mb-6 py-2 px-4 rounded-lg ${theme.messageBox} transition-all duration-300`}
        >
          <p className="text-lg font-medium text-white">
            Current Turn:
            <span
              className={`ml-2 font-bold ${
                turnO ? theme.playerO : theme.playerX
              }`}
            >
              Player {turnO ? "O" : "X"}
            </span>
          </p>
        </div>
      )}

      {/* Game Board */}
      <div
        className={`relative mb-8 transition-all duration-300 transform ${
          animationDirection === "in"
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0"
        }`}
      >
        <div className="grid grid-cols-3 gap-2 bg-opacity-50 rounded-lg p-3">
          {boxes.map((value, index) => (
            <button
              key={index}
              className={`
                w-24 h-24 sm:w-28 sm:h-28 
                ${theme.boxBg} 
                ${theme.boxHover} 
                border-2 ${theme.boxBorder} 
                rounded-lg
                flex items-center justify-center
                text-4xl sm:text-5xl font-bold
                transition-all duration-150
                ${
                  winningCells.includes(index)
                    ? "animate-pulse ring-4 ring-yellow-400"
                    : ""
                }
              `}
              onClick={() => handleBoxClick(index)}
            >
              {value && (
                <span
                  className={`
                    transform transition-all duration-200 
                    ${animationDirection === "in" ? "scale-100" : "scale-0"}
                    ${value === "O" ? theme.playerO : theme.playerX}
                  `}
                >
                  {value}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex space-x-4">
        <button
          className={`px-6 py-2.5 rounded-md font-medium ${theme.buttonBg} ${theme.buttonHover} transition-colors duration-300 text-white shadow-lg`}
          onClick={resetGame}
        >
          Reset Game
        </button>

        {!gameStarted && (
          <button
            className={`px-6 py-2.5 rounded-md font-medium ${theme.buttonBg} ${theme.buttonHover} transition-colors duration-300 text-white shadow-lg`}
            onClick={startNewGame}
          >
            Start Game
          </button>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-auto pt-6 text-center text-gray-300 text-sm">
        <p>&copy; 2025 Modern Tic Tac Toe</p>
      </footer>
    </div>
  );
}
