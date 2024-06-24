import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import card1 from "../assets/img/BlackCard.png";
import card2 from "../assets/img/LightBlueCard.png";
import card3 from "../assets/img/blueCard.png";
import card4 from "../assets/img/OrangeCard.png";
import card5 from "../assets/img/YellowCard.png";
import card6 from "../assets/img/green_Card.png";
import banner1 from "../assets/img/banner1.png";

export const ContentThree = () => {
  const [showCards, setShowCards] = useState(false);

  const cards = [card1, card2, card3, card4, card5, card6];

  const cardProps = useSpring({
    opacity: showCards ? 1 : 0,
    transform: showCards ? "translateX(0%)" : "translateX(100%)",
  });

  // Mostrar las tarjetas una a una
  const handleShowCards = () => {
    setShowCards(true);
  };

  return (
    <div className="pb-[100px]  ">
      <div className="pt-20">
        <h1 className=" text-white text-center text-6xl font-bold">
          Choose your PidCard{" "}
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center pt-36 items-center flex-wrap pl-42 pr-42 w-[1500px]">
          <img className="max-h-[300px] w-[500px] " src={card1} />
          <img className="max-h-[300px] w-[500px]" src={card2} />
          <img className="max-h-[300px] w-[500px]" src={card3} />
          <img className="max-h-[300px] w-[500px]" src={card4} />
          <img className="max-h-[300px] w-[500px]" src={card5} />
          <img className="max-h-[300px] w-[500px]" src={card6} />
        </div>
      </div>
    </div>
  );
};
