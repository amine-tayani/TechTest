import * as React from "react";

const Hero: React.FunctionComponent = () => {
  return (
    <section>
      <div className="grid md:flex  max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto mr-3 place-self-center md:mr-4 lg:col-span-7">
          <h1 className="max-w-xs md:max-w-3xl md:leading-snug mb-4 text-[#0A0A0A] text-3xl font-poppins leading-10 font-bold md:text-5xl xl:text-6xl dark:text-white">
            We are an award winning interior design Agency
          </h1>

          <a
            href="#"
            className="inline-flex mt-6 items-center justify-center px-5 py-2 font-semibold font-poppins text-center text-gray-900 border border-[#0A0A0A]  hover:bg-[#0A0A0A] hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <span>View all propreties</span>
            <svg
              className="ml-3 text-[#0A0A0A] hover:text-white "
              width="23"
              height="12"
              viewBox="0 0 23 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 5.25L0.25 5.25L0.25 6.75L1 6.75L1 5.25ZM22.5303 6.53033C22.8232 6.23743 22.8232 5.76256 22.5303 5.46967L17.7574 0.696698C17.4645 0.403804 16.9896 0.403804 16.6967 0.696698C16.4038 0.989591 16.4038 1.46446 16.6967 1.75736L20.9393 6L16.6967 10.2426C16.4038 10.5355 16.4038 11.0104 16.6967 11.3033C16.9896 11.5962 17.4645 11.5962 17.7574 11.3033L22.5303 6.53033ZM1 6.75L22 6.75L22 5.25L1 5.25L1 6.75Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
