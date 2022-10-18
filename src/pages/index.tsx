import * as React from "react";
import type { NextPage } from "next";
import { useGetUsersQuery } from "@/redux/usersApi";
import AutoComplete from "@/components/AutoComplete";

const Home: NextPage = () => {
  const [items, setItems] = React.useState([]);
  const { data: users } = useGetUsersQuery();

  React.useEffect(() => {
    if (users) {
      // @ts-ignore
      setItems(users?.results);
    }
  }, [users]);

  return (
    <div className="font-[inter] flex flex-col items-center min-h-screen bg-[#1a1b1d]">
      <AutoComplete items={items} />
    </div>
  );
};

export default Home;
