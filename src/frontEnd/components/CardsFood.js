import React from "react";

const CardComponent = ({ title, subTitle, btn, images }) => {
  return (
    <div className="rounded-xl relative">
      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-2 pt-4">{title}</p>
        <p className="px-2">{subTitle}</p>
        <button className="border-gray-500 bg-gray-500 mx-2 absolute bottom-4">
          {btn}
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src={images}
        alt="/"
      />
    </div>
  );
};

export const CardsFood = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <CardComponent
        title={"Sun's Out, BOGO's Out"}
        subTitle={"Through 8/26"}
        btn={"Order Now"}
        images={
          "https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
        }
      />

      <CardComponent
        title={"New Restaurants"}
        subTitle={"Through 8/26"}
        btn={"Order Now"}
        images={
          "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
        }
      />

      <CardComponent
        title={"We Deliver Desserts Too"}
        subTitle={"Tasty Treats"}
        btn={"Order Now"}
        images={
          "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        }
      />
    </div>
  );
};
