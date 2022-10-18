import * as React from "react";

interface SearchInputProps {
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  className: string;
  placeholder: string;
  type: string;
  style: React.CSSProperties;
  dataCy: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onKeyDown,
  onChange,
  className,
  placeholder,
  type,
  style,
  dataCy,
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
    </div>
  );
};

export default SearchInput;
