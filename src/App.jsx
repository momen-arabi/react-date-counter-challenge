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
      // setCount(0);
      setDate(new Date());
    }
  }

  function handleStepIncrease() {
    setSteps((prev) => prev + 1);
    // setCount(0);
    setDate(new Date());
  }

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

  return (
    <div className="h-screen flex items-center justify-center bg-slate-200">
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold text-slate-900 uppercase">What day is it 🙄!</h1>

        <form class="max-w-xs mx-auto">
          <label for="bedrooms-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Choose quantity:
          </label>
          <div class="relative flex items-center max-w-[11rem]">
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="bedrooms-input"
              class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
              </svg>
            </button>
            <input
              type="text"
              id="bedrooms-input"
              data-input-counter
              data-input-counter-min="1"
              data-input-counter-max="5"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border-x-0 border-gray-300 h-11 font-medium text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value="3"
              required
            />
            <div class="absolute bottom-1 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 flex items-center text-xs text-gray-400 space-x-1 rtl:space-x-reverse">
              <svg class="w-2.5 h-2.5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"
                />
              </svg>
              <span>Bedrooms</span>
            </div>
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="bedrooms-input"
              class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
            >
              <svg
                class="w-3 h-3 text-gray-900 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
          <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Please select the number of bedrooms.
          </p>
        </form>

        {/* <div className="counter-container w-4/12 grid grid-cols-2 divide-x mx-auto my-6">
          <Counter label="Steps" steps={steps} decrease={handleStepDecrease} increase={handleStepIncrease} />
          <Counter label="Count" count={count} steps={steps} decrease={handleCountDecrease} increase={handleCountIncrease} />
        </div>
        <Result count={count * steps} date={formatDate(date)} /> */}
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
