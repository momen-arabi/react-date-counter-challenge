import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);
  const today = new Date();
  const [date, setDate] = useState(today);

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
  function handleCountDecrease() {
    setCount((prev) => prev - steps);
    let newDate = subtractDaysToDate(steps, date);
    setDate(newDate);
  }

  function handleCountIncrease() {
    setCount((prev) => prev + steps);
    let newDate = addDaysToDate(steps, date);
    setDate(newDate);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === "steps") setSteps(+value);
    else if (name === "count") {
      setCount(+value);
      let newDate = addDaysToDate(+value, today);
      setDate(newDate);
    }
  }

  function handleReset() {
    setSteps(1);
    setCount(0);
    setDate(today);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-200">
      <div className="w-full text-center">
        <h1 className="mb-9 text-3xl font-extrabold text-slate-900 dark:text-white md:text-4xl lg:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-slate-800 from-slate-500">What day is it</span> 🙄!
        </h1>
        <div className="counter-container w-full mx-auto">
          <form className="mx-auto flex items-center justify-center gap-10 my-5">
            <div className="flex flex-col gap-y-4 items-center justify-center w-full">
              {/**************** STEPS ****************/}
              <div className="steps-container relative flex flex-col items-center w-4/12">
                <div className="mb-2 flex items-center text-xs text-slate-400 space-x-2">
                  <span className="font-medium text-slate-900 dark:text-white">{steps}</span>
                </div>
                <input
                  type="range"
                  id="steps-slider"
                  name="steps"
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer dark:bg-slate-700"
                  min="1"
                  max="20"
                  value={steps}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <div className="mt-2 flex items-center text-xs text-slate-400 space-x-2">
                  <span>Steps </span>
                </div>
              </div>

              {/**************** COUNT ****************/}
              <div className="count-container relative flex items-center w-4/12">
                <button
                  onClick={handleCountDecrease}
                  type="button"
                  id="decrement-button"
                  className="bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 hover:bg-slate-200 border border-slate-300 rounded-s-lg p-3 h-11 focus:ring-slate-100 dark:focus:ring-slate-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-slate-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 2"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
                  </svg>
                </button>
                <input
                  type="text"
                  id="count-input"
                  data-input-counter
                  name="count"
                  aria-describedby="helper-text-explanation"
                  className="bg-slate-50 border-x-0 border-slate-300 h-11 font-medium text-center text-slate-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={count}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  required
                />
                <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-slate-400 space-x-1 rtl:space-x-reverse">
                  <span>Count</span>
                </div>
                <button
                  onClick={handleCountIncrease}
                  type="button"
                  id="increment-button"
                  className="bg-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600 hover:bg-slate-200 border border-slate-300 rounded-e-lg p-3 h-11 focus:ring-slate-100 dark:focus:ring-slate-700 focus:ring-2 focus:outline-none"
                >
                  <svg
                    className="w-3 h-3 text-slate-900 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 18"
                  >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
          <Result count={count} date={formatDate(date)} />
          <button
            type="button"
            onClick={handleReset}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 h-11"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function Result({ count, date }) {
  return (
    <p id="result" className="my-5 text-sm text-slate-500 dark:text-slate-400">
      {count > 0
        ? `${count} day${count === 1 ? "" : "s"} from today is`
        : count < 0
        ? `${count * -1} day${count === -1 ? "" : "s"} ago was`
        : "Today is"}{" "}
      <strong>{date}</strong>
    </p>
  );
}

export default Counter;
