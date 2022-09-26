import * as React from "react";
import type { NextPage } from "next";
import { UProps } from "../types/autocomplete";
import AutoComplete from "../components/AutoComplete";

const Home: NextPage = () => {
  const [users, setUsers] = React.useState<UProps[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://randomuser.me/api/?inc=name,picture&results=30"
      );
      const data = await response.json();
      setUsers(data.results);
    };
    fetchUsers();
  }, []);

  return (
    <div className="font-[inter] justify-center flex flex-col items-center min-h-screen bg-slate-900">
      <AutoComplete users={users} />
    </div>
  );
};

export default Home;
