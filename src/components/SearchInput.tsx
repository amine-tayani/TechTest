import * as React from "react";

interface SearchInputProps {
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  setShowKeys: React.Dispatch<React.SetStateAction<boolean>>;
  showSuggestions: boolean;
  className: string;
  placeholder: string;
  searchString: string;
  style: React.CSSProperties;
  dataCy: string;
  inputVal: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onKeyDown,
  onChange,
  setShowKeys,
  className,
  placeholder,
  style,
  dataCy,
  inputVal,
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        e.stopPropagation();
        inputRef.current?.focus();
        setShowKeys(true);
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
        setShowKeys(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <input
        ref={inputRef}
        value={inputVal}
        data-cy={dataCy}
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        type="text"
        style={style}
      />
    </div>
  );
};

export default SearchInput;
