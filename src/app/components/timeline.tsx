import { list } from "postcss";
import React from "react";
import "../globals.css";

const TimeLine = ({ list, keys }: { list: Array<any>; keys: String }) => {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {list.map((key, idx) => {
          return (
            <li key={keys+String(idx)} className="ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {list[idx].time}
              </time>
              <h3 className="text-lg font-semibold mb-2">{list[idx].title}</h3>
              <p className="text-sm text-gray-800 whitespace-pre-wrap mb-8">
                {list[idx].description}
              </p>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default TimeLine;
