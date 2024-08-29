import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Example(props: any) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <div className="w-[500px] m-auto">
      <Carousel
        // indicators={false}
        navButtonsAlwaysVisible
        PrevIcon={<ChevronLeftIcon />}
        NextIcon={<KeyboardArrowRightIcon />}
        navButtonsAlwaysInvisible={false}
        animation="slide"
      >
        {[1, 1, 1, 1, 1, 1, 1].map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
}

function Item(props: any) {
  return (
    <div className="w-[250px] h-[250px] m-auto">
      <div className="p-5 bg-white h-[240px] text-center rounded-md">
        <p className="text-base font-sansSemibold animate-pulse">Hello world</p>
      </div>
    </div>
  );
}

export default Example;
