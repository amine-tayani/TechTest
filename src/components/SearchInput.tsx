import clsx from "clsx";
import * as React from "react";

interface SearchInputProps {
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  showSuggestions: boolean;
  className: string;
  placeholder: string;
  searchString: string;
  type: string;
  style: React.CSSProperties;
  dataCy: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onKeyDown,
  onChange,
  showSuggestions,
  className,
  placeholder,
  type,
  style,
  dataCy,
  searchString,
}) => {
  const [focused, setFocused] = React.useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  return (
    <div className="flex flex-col">
      <input
        data-cy={dataCy}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        ref={ref}
        onChange={onChange}
        className={className}
        placeholder={placeholder}
        type={type}
        style={style}
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
  );
};

export default SearchInput;
