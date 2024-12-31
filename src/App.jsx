import { useState } from "react";

function App() {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  // helper functions
  function formatDate(date) {
    return date.toDateString();
  }

  function addDaysToDate(steps, date) {
    const newDate = date;
    newDate.setDate(newDate.getDate() + steps);
    return newDate;
  }

  function subtractDaysToDate(steps, date) {
    const newDate = date;
    newDate.setDate(newDate.getDate() - steps);
    return newDate;
  }

  // handle functions
  function handleStepDecrease() {
    if (steps > 1) {
      setSteps((prev) => prev - 1);
      setCount(0);
      setDate(new Date());
    }
  }

  function handleStepIncrease() {
    setSteps((prev) => prev + 1);
    setCount(0);
    setDate(new Date());
  }

  function handleCountDecrease() {
    setCount((prev) => prev - 1);
    let newDate = subtractDaysToDate(steps, date);
    setDate(newDate);
  }

  function handleCountIncrease() {
    setCount((prev) => prev + 1);
    let newDate = addDaysToDate(steps, date);
    setDate(newDate);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-200">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-slate-900 uppercase">What day is it 🙄!</h1>
        <div className="counter-container w-4/12 grid grid-cols-2 divide-x mx-auto my-6">
          <Counter label="Steps" steps={steps} decrease={handleStepDecrease} increase={handleStepIncrease} />
          <Counter label="Count" count={count} steps={steps} decrease={handleCountDecrease} increase={handleCountIncrease} />
        </div>
        <Result count={count * steps} date={formatDate(date)} />
      </div>
    </div>
  );
}

function Counter({ label, count, steps, decrease, increase }) {
  return (
    <div className="counter flex items-center justify-center gap-3 bg-slate-50 p-2">
      <p className="font-semibold">{label}:</p>
      <button
        onClick={decrease}
        className="bg-red-500 text-white w-6 h-6 flex justify-center items-center rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        -
      </button>
      <span className="counter-value">{label === "Steps" ? steps : count * steps}</span>
      <button
        onClick={increase}
        className="bg-green-500 text-white w-6 h-6 flex justify-center items-center rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        +
      </button>
    </div>
  );
}

function Result({ count, date }) {
  return (
    <h3 className="result">
      {count > 0
        ? `${count} day${count === 1 ? "" : "s"} from today is`
        : count < 0
        ? `${count * -1} day${count === -1 ? "" : "s"} ago was`
        : "Today is"}{" "}
      <strong>{date}</strong>
    </h3>
  );
}

export default App;
