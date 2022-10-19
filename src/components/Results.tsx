import * as React from "react";
import clsx from "clsx";
import { IResult } from "@/types";

interface ResultsProps {
  searchString: string;
  showSuggestions: boolean;
  results: IResult[];
  activeSuggestion: number;
}

const Results: React.FC<ResultsProps> = ({
  searchString,
  showSuggestions,
  activeSuggestion,
  results,
}) => {
  const highlightText = (text: string) => {
    const chars = text.split(new RegExp(`(${searchString})`, "gi"));
    return (
      <span>
        {chars.map((letter, i) =>
          letter.toLowerCase() === searchString.toLowerCase() ? (
            <span key={i} className="font-bold text-white">
              {letter}
            </span>
          ) : (
            letter
          )
        )}
      </span>
    );
  };
  return (
    <div
      style={{
        marginTop: showSuggestions && searchString ? "2rem" : "0rem",
        marginBottom: showSuggestions && searchString ? "2rem" : "0rem",
      }}
      className="mx-4"
    >
      <ul data-cy="autocomplete-results" className={clsx("max-w-md mx-4 px-1")}>
        {showSuggestions && searchString ? (
          results.length ? (
            results.map((user, id) => (
              <li
                className="py-2 px-6 rounded-lg mb-3"
                key={id}
                style={{
                  transition: "all 0.135s ease-in-out",
                  backgroundColor:
                    activeSuggestion === id ? "#0284c7" : "#3c3d41",
                  color: activeSuggestion === id ? "#eee" : "#c1c2c6",
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-lg bg-neutral-200"
                      src={user.picture.thumbnail}
                      alt={user.name.first}
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-sm tracking-wide">
                    {highlightText(user.name.first)} {user.name.last}
                  </div>
                </div>
              </li>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <p className="text-sm font-[500] text-gray-500">
                No options are suggested
              </p>
            </div>
          )
        ) : null}
      </ul>
      <div
        className={clsx("flex items-center justify-between mx-4 mt-8", {
          hidden: !showSuggestions || !searchString || results.length === 0,
        })}
      >
        <p className="text-sm font-medium text-neutral-500">
          {results.length} results
        </p>
        <div className="text-sm font-medium text-neutral-500">
          Use
          <span
            className={clsx(
              "bg-[#393a3c] ml-2 text-xs text-[#8e9299] font-semibold",
              "py-1 px-1.5 rounded-md shadow-lg"
            )}
          >
            ↑
          </span>
          <span
            className={clsx(
              "bg-[#393a3c] mx-2 text-xs text-[#8e9299] font-semibold",
              "py-1 px-1.5 rounded-md shadow-lg"
            )}
          >
            ↓
          </span>
          to navigate
        </div>
      </div>
    </div>
  );
};

export default Results;
