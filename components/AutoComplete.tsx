import * as React from "react";
import { UProps, UserListProps } from "../types/autocomplete";

const AutoComplete: React.FunctionComponent<UserListProps> = ({ users }) => {
  const [activeSuggestion, setActiveSuggestion] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<
    UProps[]
  >([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchString = e.currentTarget.value;

    const filteredSuggestions = users.filter((suggestion) =>
      suggestion.name.first.toLowerCase().startsWith(searchString.toLowerCase())
    );
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setSearchString(e.currentTarget.value);
  };

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

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Enter":
        setActiveSuggestion(0);
        setShowSuggestions(false);
        setSearchString(filteredSuggestions[activeSuggestion].name.first);
        break;
      case "ArrowUp":
        if (activeSuggestion === 0) {
          return;
        }
        setActiveSuggestion(activeSuggestion - 1);
        break;
      case "ArrowDown":
        if (activeSuggestion - 1 === filteredSuggestions.length) {
          return;
        }
        setActiveSuggestion(activeSuggestion + 1);
        break;
      default:
        break;
    }
  };

  const clearSearchInput = () => {
    setShowSuggestions(false);
    if (inputRef.current !== null) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className=" w-1/3 max-w-lg bg-[#1e293b] rounded-xl shadow-lg">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            className="h-6 w-6 text-gray-500"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 15.5L19 19M5 11a6 6 0 1012 0 6 6 0 00-12 0z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          onKeyDown={onKeyDown}
          ref={inputRef}
          onChange={onChange}
          type="text"
          className={`w-full pl-10 p-4 rounded-lg placeholder:font-medium text-lg font-medium placeholder:text-slate-300 focus:outline-none text-slate-200  shadow-sm bg-[#1e293b]`}
          placeholder="Search for keyword"
          style={{
            borderBottom:
              showSuggestions && searchString ? "1px solid #4b5563" : "none",
            borderRadius:
              showSuggestions && searchString
                ? "0.375rem 0.375rem 0 0"
                : "0.375rem",
          }}
        />

        {showSuggestions && searchString && (
          <button
            onClick={clearSearchInput}
            className="absolute right-0 w-7 h-6 inset-y-4 mr-6 text-[0.5em] font-semibold rounded-md bg-gray-600 text-gray-300 border-gray-500"
          >
            CLR
          </button>
        )}
      </div>
      <div
        style={{
          marginTop: showSuggestions && searchString ? "2rem" : "0rem",
          marginBottom: showSuggestions && searchString ? "2rem" : "0rem",
        }}
        className="mx-4"
      >
        <ul className="max-w-md mx-4 px-1">
          {showSuggestions && searchString ? (
            filteredSuggestions.length ? (
              filteredSuggestions.map((user, id) => (
                <li
                  className="py-1 px-6 rounded-lg mb-3"
                  key={id}
                  style={{
                    backgroundColor:
                      activeSuggestion === id ? "#0284c7" : "#3341554d",
                    color: activeSuggestion === id ? "#eee" : "#94a3b8",
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-10 h-10 rounded-full bg-neutral-200"
                        src={user.picture.thumbnail}
                        alt={user.name.first}
                      />
                    </div>
                    <div className="flex-1 min-w-0 text-sm tracking-wide">
                      {highlightText(user.name.first)}
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
      </div>
    </div>
  );
};
export default AutoComplete;
