import * as React from "react";
import clsx from "clsx";
import SearchInput from "@/components/SearchInput";
import Results from "@/components/Results";
import SVGSearchIcon from "@/components/icons/SVGSearchIcon";
import { IResult, SearchAutocompleteProps } from "@/types/index";

const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({ results }) => {
  const [activeSuggestion, setActiveSuggestion] = React.useState(0);
  const [showKeys, setShowKeys] = React.useState(false);
  const [searchString, setSearchString] = React.useState("");
  const [value, setValue] = React.useState("");
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = React.useState<
    IResult[]
  >([]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const searchString = e.currentTarget.value;
    setValue(searchString.toLowerCase());
    const filteredSuggestions = results?.filter((suggestion) =>
      suggestion.name.first
        .concat(suggestion.name.last)
        .toLowerCase()
        .startsWith(searchString.toLowerCase())
    );
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions || []);
    setShowSuggestions(true);
    setSearchString(e.currentTarget.value);
  };

  const clearSearchInput = () => {
    setValue("");
    setShowSuggestions(false);
  };

  const inputStyles = {
    borderBottom:
      showSuggestions && searchString ? "1px solid #3c3d41" : "none",
    borderRadius:
      showSuggestions && searchString ? "0.375rem 0.375rem 0 0" : "0.375rem",
  };

  const inputClassNames = clsx(
    "w-full pl-10 p-4 caret-blue-600 rounded-lg text-lg font-medium",
    "bg-[#2b2c2e] text-slate-200 shadow",
    " placeholder:font-medium placeholder:text-[#747980] focus:outline-none"
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        if (activeSuggestion === 0) {
          setActiveSuggestion(filteredSuggestions.length - 1);
        } else setActiveSuggestion(activeSuggestion - 1);
        break;
      case "ArrowDown":
        e.preventDefault();
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

  return (
    <div className=" w-1/3 max-w-lg bg-[#28292b] rounded-xl mt-20 shadow-lg">
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <SVGSearchIcon />
        </div>

        <SearchInput
          setShowKeys={setShowKeys}
          inputVal={value}
          searchString={searchString}
          showSuggestions={showSuggestions}
          dataCy="search-input"
          onKeyDown={onKeyDown}
          onChange={onChange}
          placeholder="Search for keyword"
          className={inputClassNames}
          style={inputStyles}
        />
      </div>
      <Results
        activeSuggestion={activeSuggestion}
        showSuggestions={showSuggestions}
        results={filteredSuggestions}
        searchString={searchString}
        showKeys={showKeys}
      />
    </div>
  );
};
export default SearchAutocomplete;
