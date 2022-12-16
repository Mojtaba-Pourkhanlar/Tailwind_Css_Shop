import React from "react";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

export const Header = () => {
  return (
    <div className="text-orange-600">
      <BsFillCartFill />
      <TbTruckDelivery />
      <FaUserFriends />
      <MdFavorite />
      Hader
    </div>
  );
};
