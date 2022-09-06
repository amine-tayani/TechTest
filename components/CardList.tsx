import * as React from "react";
import Card from "./Card";
import { Houses } from "../types/house";

const CardList: React.FunctionComponent<Houses> = ({ houses }) => {
  return (
    <div className="container my-8 mx-auto px-[20px] md:px-12">
      <div className="flex -mx-1 lg:-mx-4">
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          {houses.map((house) => (
            <Card
              key={house.id}
              id={house.id}
              location={house.location}
              price={house.price}
              thumbnail={house.thumbnail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardList;
