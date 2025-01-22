import "./App.css";
import { useState, useEffect } from "react";

const messageArr = [
  "Hello Anh Yêu",
  "Happy Birthday 🧡🧡🧡",
  "Hôm nay sinh nhật anh",
  "Không thể ở bên anh rồi",
  "Vậy em tặng anh món quà tinh thần nhé",
  "Cùng em mở hộp quà bên dưới nha",
];

function App() {
  const [message, setMessage] = useState(messageArr[0]);
  const [index, setIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [openGift1, setOpenGift1] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showGift2, setShowGift2] = useState(false);

  useEffect(() => {
    if (index < messageArr.length - 1 && isRunning) {
      const timer = setTimeout(() => {
        setIndex((prevIndex) => prevIndex + 1);
      }, 1600);

      return () => clearTimeout(timer);
    } else {
      setIsRunning(false);
    }
  }, [index, isRunning]);

  function handleClickGift1() {
    setShowConfetti(true);

    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  }

  function handleClickGift2() {
    setShowGift2(true);

    setTimeout(() => {
      setShowGift2(false);
    }, 6000);
  }

  return (
    <div className="App m-8">
      <div className="sm:text-3xl  flex justify-center">
        <div className="sm:w-1/2 w-3/4 bg-orange-200 rounded-full p-2">
          {messageArr[index]}
        </div>
      </div>
      <img
        className={`absolute left-0 -z-50 ${!isRunning && "hidden sm:block"}`}
        src="birthday1.png"
      />
      {!isRunning && (
        <div>
          <div className="flex w-full justify-center space-x-16">
            <button onClick={handleClickGift1}>
              <img className="w-48 h-48" src="gift1.png" />
            </button>

            <button onClick={handleClickGift2}>
              <img className="w-48 h-48" src="gift2.png" />
            </button>
          </div>
          <div>
            {showConfetti && (
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <img className="sm:w-3/4 w-full" src="confetti.gif" />
              </div>
            )}
            {showGift2 && (
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <img className="sm:w-1/2 w-full" src="kiss.gif" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
