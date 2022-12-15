import React from "react";
import Slider from "react-slick";

//style
import {
  Box,
  DateDisplay,
  Info,
  Location,
  SlideContainer,
  Temperature,
  Weathercon,
} from "./Cards.styles";

const Cards = (weatherData) => {
  // slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: -1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <SlideContainer>
      <Slider {...settings}>
        {weatherData.weatherData.map((card) => (
          <Box key={card[0]}>
            <Weathercon>
              <img src={card[5]} alt={card[3]} />
            </Weathercon>
            <Info>
              <Location>
                {card[3]}{" "}
                <p>
                  {card[4]} in {card[7]}
                </p>
              </Location>
              <DateDisplay>{card[1]}</DateDisplay>

              <Temperature>
                {card[8]}°{card[6]}
              </Temperature>
            </Info>
          </Box>
        ))}
      </Slider>
    </SlideContainer>
  );
};

export default Cards;
