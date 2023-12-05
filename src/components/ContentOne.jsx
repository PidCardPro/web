import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import banner1 from "../assets/img/banner1.png";

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
            style={{ fontSize: "90px" }}
            className="text-left text-white font-bold"
          >
            The new way to{" "}
          </h1>
          <h1
            style={{ fontSize: "90px" }}
            className="text-left text-white font-bold"
          >
            present yourself{" "}
          </h1>
          <div className="flex justify-end">

          <button
            type="button"
            class=" mr-24 w-[150px] text-white bg-[#1A5D1A] hover:bg-[#1b341b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#1A5D1A] dark:hover:bg-[#1b341b] dark:focus:ring-[#1b341b]"
            >
            Get Your PidCard
          </button>
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
