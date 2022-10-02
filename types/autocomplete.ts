export interface IResult {
  name: {
    first: string;
    last: string;
    title: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

export interface SearchAutocompleteProps {
  items?: IResult[];
}
