import * as React from "react";
import clsx from "clsx";
import { IResult, SearchAutocompleteProps } from "@/types/index";
import SearchInput from "@/components/SearchInput";
import SVGSearchIcon from "@/components/icons/SVGSearchIcon";

const AutoComplete: React.FC<SearchAutocompleteProps> = ({ items }) => {
  const [activeSuggestion, setActiveSuggestion] = React.useState(0);
  const searchBarRef = React.useRef<HTMLInputElement>(null);
  const [focused, setFocused] = React.useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<
    IResult[]
  >([]);
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "x") {
        searchBarRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchString = e.currentTarget.value;

    const filteredSuggestions = items?.filter((suggestion) =>
      suggestion.name.first.toLowerCase().startsWith(searchString.toLowerCase())
    );
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions || []);
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
          setActiveSuggestion(filteredSuggestions.length - 1);
        } else setActiveSuggestion(activeSuggestion - 1);
        break;
      case "ArrowDown":
        if (activeSuggestion === filteredSuggestions.length) {
          return;
        } else if (activeSuggestion === filteredSuggestions.length - 1) {
          setActiveSuggestion(0);
        } else setActiveSuggestion(activeSuggestion + 1);
        break;
      case "Escape":
        clearSearchInput();
      default:
        break;
    }
  };

  const clearSearchInput = () => {
    setShowSuggestions(false);
    if (searchBarRef.current !== null) {
      searchBarRef.current.value = "";
    }
  };

  return (
    <div className=" w-1/3 max-w-lg bg-[#28292b] rounded-xl mt-20 shadow-lg">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SVGSearchIcon />
        </div>

        <SearchInput
          dataCy="search-input"
          onKeyDown={onKeyDown}
          onChange={onChange}
          type="text"
          className={clsx(
            "w-full pl-10 p-4 caret-blue-600 rounded-lg text-lg font-medium",
            "text-slate-200 shadow bg-[#2b2c2e]",
            " placeholder:font-medium placeholder:text-[#747980] focus:outline-none"
          )}
          placeholder="Search for keyword"
          style={{
            borderBottom:
              showSuggestions && searchString ? "1px solid #3c3d41" : "none",
            borderRadius:
              showSuggestions && searchString
                ? "0.375rem 0.375rem 0 0"
                : "0.375rem",
          }}
        />

        {showSuggestions && searchString && (
          <span
            className={clsx(
              "absolute right-0 inset-y-4 flex items-center",
              "bg-[#393a3c] text-xs text-[#8e9299] font-semibold",
              "mr-6 py-1 px-1.5 rounded-md shadow-lg"
            )}
          >
            ESC
          </span>
        )}
      </div>
      <div
        style={{
          marginTop: showSuggestions && searchString ? "2rem" : "0rem",
          marginBottom: showSuggestions && searchString ? "2rem" : "0rem",
        }}
        className="mx-4"
      >
        <ul
          data-cy="autocomplete-results"
          className={clsx("max-w-md mx-4 px-1")}
        >
          {showSuggestions && searchString ? (
            filteredSuggestions.length ? (
              filteredSuggestions.map((user, id) => (
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
            hidden:
              !showSuggestions ||
              !searchString ||
              filteredSuggestions.length === 0,
          })}
        >
          <p className="text-sm font-medium text-neutral-500">
            {filteredSuggestions.length} results
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
    </div>
  );
};
export default AutoComplete;