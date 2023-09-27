"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true,
        cursor: "_",
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(1500)
          .typeString("Supercharged Productivity")
          .changeDeleteSpeed(0.5)
          .pauseFor(1000)
          .deleteAll()
          .typeString("Powered by OpenAI")
          .pauseFor(2000)
          .changeDeleteSpeed(0.5)
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
