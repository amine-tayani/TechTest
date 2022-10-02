import * as React from "react";
import type { NextPage } from "next";
import AutoComplete from "../components/AutoComplete";
import { useGetUsersQuery } from "../redux/usersApi";

const Home: NextPage = () => {
  const [items, setItems] = React.useState([]);
  const { data: users } = useGetUsersQuery();

  //  check if the user press the S key

  React.useEffect(() => {
    if (users) {
      // @ts-ignore
      setItems(users?.results);
    }
  }, [users]);

  return (
    <div className="font-[inter] justify-center flex flex-col items-center min-h-screen bg-[#1a1b1d]">
      <AutoComplete items={items} />
    </div>
  );
};

export default Home;
