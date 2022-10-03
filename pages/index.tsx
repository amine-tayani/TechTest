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
    <div className="font-[inter] flex flex-col items-center min-h-screen bg-[#1a1b1d]">
      <div className="my-12">
        <p className="flex text-neutral-100 font-bold text-3xl items-center">
          Use
          <div className="mx-2 shadow-lg font-semibold text-[#a0a4aa] text-lg bg-[#393a3c] py-1.5 px-4 rounded-md ">
            ⌘ +<span className="ml-2">X</span>
          </div>
          to search for users{" "}
        </p>
      </div>
      <AutoComplete items={items} />
    </div>
  );
};

export default Home;
