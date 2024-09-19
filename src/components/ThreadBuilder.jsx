import React, { useState } from "react";
import icon from "../assets/icon.svg";
import miniicons from "../assets/miniicons.svg";

const ThreadBuilder = () => {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center space-x-2 text-start bg-[#FEFFC0] pl-10 mb-3"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 transform  duration-300 ${
            open ? "rotate-0" : "rotate-180"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
        <p>Thread A</p>
      </button>
      {open && (
        <>
          <div className="flex items-stretch mx-6 space-x-3">
            <div className="flex-1 flex flex-col border rounded-xl">
              <p className="p-1">Sub thread 1</p>
              <textarea
                className="resize-none w-full border rounded-lg h-20"
                placeholder="Enter Text here"
              />
            </div>
            <div className="flex-1 flex flex-col border rounded-xl">
              <p className="p-1">Sub Interpretation 1</p>
              <textarea
                className="resize-none w-full border rounded-lg h-20"
                placeholder="Enter Text here"
              />
            </div>
          </div>
          <div className="flex justify-end mx-6 my-3 text-sm">
            <img src={miniicons} alt="mini" className="mx-2" />
            <div className="flex items-center border  shadow-lg rounded-md mr-1 p-1">
              <p>Select Categ</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="flex items-center border  shadow-lg rounded-md ml-1 p-1">
              <p>Select Process</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div>
            <button className="bg-[#0029FF] rounded-xl text-white p-2 ml-6 my-2">
              + Sub-thread
            </button>
          </div>

          <div className="flex-1 flex flex-col border rounded-xl mx-6 mt-2">
            <p className="p-1">Summary for Thread A</p>
            <textarea
              className="resize-none w-full border rounded-lg h-20"
              placeholder="Enter Text here"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ThreadBuilder;
