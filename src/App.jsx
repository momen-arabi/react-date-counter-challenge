import { useState } from "react";

function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-200">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-slate-900 uppercase">What day is it 🙄!</h1>
        <div className="counter-container w-3/12 grid grid-cols-2 divide-x mx-auto my-6">
          <Counter label="Steps" />
          <Counter label="Count" />
        </div>
        <Result />
      </div>
    </div>
  );
}

function Counter({ label }) {
  const [count, setCount] = useState(1);

  function handleDecrease() {
    setCount((prev) => prev - 1);
  }

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  return (
    <div className="counter flex items-center justify-center gap-2 bg-slate-50 p-2">
      <p className="font-semibold">{label}:</p>
      <button
        onClick={handleDecrease}
        className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        -
      </button>
      <span className="counter-value">{count}</span>
      <button
        onClick={handleIncrease}
        className="bg-green-500 text-white w-5 h-5 flex justify-center items-center rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        +
      </button>
    </div>
  );
}

function Result() {
  const today = new Date();
  const [date, setDate] = useState(today);

  function formatDate(date) {
    return date.toDateString();
  }

  return (
    <h3 className="result">
      Today is <strong>{formatDate(date)}</strong>
    </h3>
  );
}

export default App;
