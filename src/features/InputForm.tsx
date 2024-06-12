import React from "react";

export const InputForm = () => {
  return (
    <div className="flex justify-center">
      <form
        action=""
        className="flex w-full flex-col justify-center"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="peer relative flex w-full items-start justify-between rounded-[3em] bg-white text-black ring-1 ring-inset ring-col-light-gray duration-300 ease-out placeholder:text-transparent focus-within:outline-0 focus-within:ring-col-violet hover:ring-col-silver hover:focus-within:ring-col-violet">
          <input
            placeholder="Enter your email address"
            type="email"
            className="input:bg-transparent peer ml-2 w-full bg-transparent px-4 pb-2 pt-6 placeholder:text-transparent focus-visible:outline-none"
            id="email-form-:R6ldp:"
            name="email-form-:R6ldp:"
          />
          <label className="text-shade-60 peer-focus:text-shade-60 peer pointer-events-none absolute left-6 top-4 z-10 origin-[0] -translate-y-3 scale-75 text-base duration-300 ease-out peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-black peer-focus:-translate-y-3 peer-focus:scale-75">
            Enter your email address
          </label>
          <div className="hidden md:block">
            <button
              type="submit"
              className="button button-dark my-1 mr-1 px-5 py-3"
            >
              Start free trial
            </button>
          </div>
        </div>
        <div className="block w-full pt-2 md:hidden">
          <button
            type="submit"
            className="button button-dark my-1 mr-1 w-full max-w-full py-4"
          >
            Start free trial
          </button>
        </div>
      </form>
    </div>
  );
};
