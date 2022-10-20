import * as React from "react";
import type { NextPage } from "next";
import { useGetUsersQuery } from "@/redux/usersApi";
import SearchAutocomplete from "@/components/SearchAutocomplete";
import { IResult } from "@/types";

const Home: NextPage = () => {
  const [items, setItems] = React.useState<IResult[]>([]);
  const { data: users } = useGetUsersQuery();

  React.useEffect(() => {
    if (users) {
      setItems(users.results);
    }
  }, [users]);

  return (
    <div className="font-[inter] flex flex-col items-center min-h-screen bg-[#1a1b1d]">
      <SearchAutocomplete results={items} />
    </div>
  );
};

export default Home;
