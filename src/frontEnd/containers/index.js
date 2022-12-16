import React from "react";
import { CardsFood, Category, Food, Header } from "../components";

export const Container = () => {
  return (
    <div>
      <Header />
      <CardsFood />
      <Food />
      <Category />
    </div>
  );
};
