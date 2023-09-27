"use client";
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {};

const Title = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: false,
        cursor: "",
      }}
      onInit={(typewriter) => {
        typewriter.typeString("ThinkSync").start();
      }}
    />
  );
};

export default Title;
