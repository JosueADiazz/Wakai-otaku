import React, { useEffect } from "react";
import { Slider } from "./Slider/Slider";
import { MasVistos } from "./Animes/MasVistos";
import { MasPopulares } from "./Animes/MasPopulares";

export const Home = () => {
  return (
    <>
      <Slider title="ANTENKIU ANIME - El Rincon del Otaku"></Slider>
      <MasPopulares></MasPopulares>
      <df-messenger
        intent="WELCOME"
        chat-title="anteiku"
        agent-id="06177e9b-3670-4c9d-8c68-6988a7004e25"
        language-code="es"
      ></df-messenger>
    </>
  );
};
