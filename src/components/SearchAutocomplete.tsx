import * as React from "react";
import clsx from "clsx";
import { IResult, SearchAutocompleteProps } from "@/types/index";
import SearchInput from "@/components/SearchInput";
import SVGSearchIcon from "@/components/icons/SVGSearchIcon";
import Results from "@/components/Results";

const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({ results }) => {
  const [activeSuggestion, setActiveSuggestion] = React.useState(0);
  const searchBarRef = React.useRef<HTMLInputElement>(null);
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
      if (e.key === "ArrowDown" || e.key === "ArrowUp") e.preventDefault();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchString = e.currentTarget.value;

    const filteredSuggestions = results?.filter((suggestion) =>
      suggestion.name.first.toLowerCase().startsWith(searchString.toLowerCase())
    );
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions || []);
    setShowSuggestions(true);
    setSearchString(e.currentTarget.value);
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
          searchString={searchString}
          showSuggestions={showSuggestions}
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
      </div>
      <Results
        activeSuggestion={activeSuggestion}
        showSuggestions={showSuggestions}
        results={filteredSuggestions}
        searchString={searchString}
      />
    </div>
  );
};
export default SearchAutocomplete;
