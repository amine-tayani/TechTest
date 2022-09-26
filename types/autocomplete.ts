export interface UProps {
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

export interface UserListProps {
  users: UProps[];
}
