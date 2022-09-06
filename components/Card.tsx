import * as React from "react";
import { House } from "../types/house";

const Card: React.FunctionComponent<House> = ({
  id,
  location,
  price,
  thumbnail,
}) => {
  return (
    <article className="overflow-hidden ">
      <a href="#" className="relative">
        <img
          alt="Placeholder"
          className="block h-auto w-full"
          src={thumbnail}
        />
        <svg
          className="absolute top-0 right-0 m-4"
          width="24"
          height="24"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.45032 15.4581L8.45009 15.4579C7.72986 14.8208 7.03573 14.2223 6.42499 13.6959L6.42467 13.6956L6.42468 13.6955L6.42188 13.6931C4.62245 12.1419 3.10435 10.8315 2.05331 9.54864C0.891303 8.1302 0.375 6.81925 0.375 5.40473C0.375 4.0109 0.847159 2.7405 1.68747 1.81841C2.5363 0.887099 3.69825 0.375 4.96636 0.375C5.9067 0.375 6.76558 0.673842 7.52853 1.27075C7.85212 1.52398 8.15261 1.82631 8.42608 2.17553C8.66076 2.4752 9.11697 2.47527 9.35171 2.17557L9.05648 1.94434L9.35171 2.17557C9.62527 1.82629 9.92569 1.52397 10.2494 1.27077L10.2494 1.27075C11.0123 0.673842 11.8712 0.375 12.8115 0.375C14.0795 0.375 15.2416 0.887088 16.0904 1.8184C16.9307 2.74047 17.4028 4.01086 17.4028 5.40473C17.4028 6.81927 16.8866 8.13022 15.7246 9.5485L15.7246 9.54852C14.6736 10.8315 13.1557 12.1416 11.3567 13.6926L11.3565 13.6928C10.7446 14.2201 10.0494 14.8196 9.32754 15.4582L9.32745 15.4582C9.20571 15.566 9.04989 15.625 8.88889 15.625C8.72782 15.625 8.57219 15.5661 8.45032 15.4581Z"
            stroke="#F7F7F7"
            stroke-width="0.75"
            stroke-linecap="round"
          />
        </svg>
      </a>

      <header className="flex items-center justify-between leading-tight p-2 mt-2 md:p-4">
        <h1 className="font-bold">{price}</h1>
        <p className="text-grey-darker text-sm font-semibold">{location}</p>
      </header>

      <footer className="flex items-center justify-center  p-2 md:p-4 mb-6">
        <a
          href="#"
          className="inline-flex mt-2 items-center justify-center px-4 py-2 font-semibold font-poppins text-center text-white bg-[#0A0A0A] hover:text-[#0A0A0A] hover:bg-white hover:border hover:border-[#0A0A0A] focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          <span>View Details</span>
          <span className="ml-2">+</span>
        </a>
      </footer>
    </article>
  );
};

export default Card;
