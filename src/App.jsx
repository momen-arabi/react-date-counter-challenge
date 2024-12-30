import { useState } from "react";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-200/75">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-slate-900 uppercase">What day is it 🙄!</h1>
        <div className="counter-container w-4/12 grid grid-cols-2 divide-x mx-auto my-6">
          <StepCounter />
          <DayCounter />
        </div>
        <h2 className="result">Today is 30</h2>
      </div>
    </div>
  );
}

function StepCounter() {
  const [steps, setSteps] = useState(1);

  function handleStepDecrease() {
    setSteps((prev) => prev - 1);
  }

  function handleStepIncrease() {
    setSteps((prev) => prev + 1);
  }
  return (
    <div className="counter rounded-md flex items-center justify-center gap-2 bg-slate-100 p-2">
      <p className="font-semibold">Steps:</p>
      <button
        onClick={handleStepDecrease}
        className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        -
      </button>
      <span className="counter-value">{steps}</span>
      <button
        onClick={handleStepIncrease}
        className="bg-green-500 text-white w-5 h-5 flex justify-center items-center rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        +
      </button>
    </div>
  );
}

function DayCounter() {
  const [counts, setCounts] = useState(1);

  function handleCountDecrease() {
    setCounts((prev) => prev - 1);
  }

  function handleCountIncrease() {
    setCounts((prev) => prev + 1);
  }
  return (
    <div className="counter rounded-md flex items-center justify-center gap-2 bg-slate-100 p-2 ">
      <p className="font-semibold">Count:</p>
      <button
        onClick={handleCountDecrease}
        className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        -
      </button>
      <span className="counter-value">{counts}</span>
      <button
        onClick={handleCountIncrease}
        className="bg-green-500 text-white w-5 h-5 flex justify-center items-center rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        +
      </button>
    </div>
  );
}

export default App;
