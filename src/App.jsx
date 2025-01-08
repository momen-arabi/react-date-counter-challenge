import { useState } from "react";

function App() {
  const [isReset, setIsReset] = useState(false);

  function handleReset() {
    setIsReset(true);
  }

  function removeReset() {
    setIsReset(false);
  }
  return (
    <div className="h-screen flex items-center justify-center bg-slate-200">
      <div className="w-full text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-slate-600 from-slate-500">What day</span> is it 🙄!
        </h1>
        <div className="counter-container w-8/12 mx-auto">
          <form className="mx-auto flex items-stretch justify-center gap-5 my-9">
            <Counter label="Steps" reset={isReset} resetChanger={removeReset} />
            <Counter label="Count" reset={isReset} resetChanger={removeReset} />
            <button
              type="button"
              onClick={handleReset}
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 h-11"
            >
              Reset
            </button>
          </form>
          {/* <Result count={count} date={formatDate(date)} /> */}
        </div>
      </div>
    </div>
  );
}

function Counter({ label, reset, resetChanger }) {
  // const today = new Date();
  // const [date, setDate] = useState(today);

  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);

  // helper functions
  // function formatDate(date) {
  //   return date.toDateString();
  // }

  // function addDaysToDate(steps, date) {
  //   const newDate = date;
  //   newDate.setDate(newDate.getDate() + steps);
  //   return newDate;
  // }

  // function subtractDaysToDate(steps, date) {
  //   const newDate = date;
  //   newDate.setDate(newDate.getDate() - steps);
  //   return newDate;
  // }

  // handle functions
  function handleStepDecrease() {
    resetChanger();
    if (steps > 1) {
      setSteps((prev) => prev - 1);
    }
  }

  function handleStepIncrease() {
    resetChanger();
    setSteps((prev) => prev + 1);
  }

  function handleCountDecrease() {
    resetChanger();
    setCount((prev) => prev - steps);
    // let newDate = subtractDaysToDate(steps, date);
    // setDate(newDate);
  }

  function handleCountIncrease() {
    resetChanger();
    setCount((prev) => prev + steps);
    console.log();
    // let newDate = addDaysToDate(steps, date);
    // setDate(newDate);
  }

  function handleChange(e) {
    resetChanger();
    const { name, value } = e.target;
    if (name === "Steps") setSteps(value);
    else if (name === "Count") setCount(value);
  }

  return (
    <div className="relative flex items-center max-w-[15rem]">
      <button
        onClick={label === "Steps" ? handleStepDecrease : handleCountDecrease}
        type="button"
        id="decrement-button"
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16" />
        </svg>
      </button>
      <input
        type="text"
        id="steps-input"
        data-input-counter
        name={label}
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={reset && label === "Steps" ? 1 : reset && label === "Count" ? 0 : !reset && label === "Steps" ? steps : count}
        onChange={(e) => {
          handleChange(e);
        }}
        required
      />
      <div className="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
        <span>{label}</span>
      </div>
      <button
        onClick={label === "Steps" ? handleStepIncrease : handleCountIncrease}
        type="button"
        id="increment-button"
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
      >
        <svg className="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
        </svg>
      </button>
    </div>
  );
}

// function Result({ count, date }) {
//   return (
//     <p id="result" className="mt-5 text-sm text-gray-500 dark:text-gray-400">
//       {count > 0
//         ? `${count} day${count === 1 ? "" : "s"} from today is`
//         : count < 0
//         ? `${count * -1} day${count === -1 ? "" : "s"} ago was`
//         : "Today is"}{" "}
//       <strong>{date}</strong>
//     </p>
//   );
// }

export default App;
