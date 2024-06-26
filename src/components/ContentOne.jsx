import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import banner1 from "../assets/img/banner1.png";
import { Link } from "react-router-dom";

export const ContentOne = () => {
  const [showCards, setShowCards] = useState(false);

  const cards = [banner1];

  const cardProps = useSpring({
    opacity: showCards ? 1 : 0,
    transform: showCards ? "translateX(0%)" : "translateX(100%)",
    width: "500px",
  });

  // Mostrar las tarjetas una a una
  const handleShowCards = () => {
    setShowCards(true);
  };

  return (
    <div>
      <div className="flex justify-center pt-56 items-center flex-wrap">
        <div className="pr-[70px]">
          <h1
            className="text-left text-white font-bold sm:text-6xl text-4xl"
          >
            The new way to{" "}
          </h1>
          <h1

            className="text-left text-white font-bold sm:text-7xl text-4xl"
          >
            present yourself{" "}
          </h1>
          <br/>
          <br/>
          <div className="flex justify-end">
          <Link to="/pricing">
          <button
            type="button"
            class=" mr-24 mb-4 w-[150px] text-white bg-[#4ab45b] hover:bg-[#1b341b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#112314]  dark:hover:bg-[#1b341b] dark:focus:ring-[#1b341b]"
            >
            Get Your PidCard
          </button>
              </Link>
            </div>
        </div>
        <div className="flex">
          <animated.img
            style={{ ...cardProps }}
            onLoad={handleShowCards}
            src={cards[0]}
            alt="banner"
          />
        </div>
      </div>
              </div>
  );
};
