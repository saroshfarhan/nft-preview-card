import React from "react";
import equilibrium from "../assets/image-equilibrium.jpg";
import ethereum from "../assets/icon-ethereum.svg";
import clock from "../assets/icon-clock.svg";
import avatar from "../assets/image-avatar.png";
import view from "../assets/icon-view.svg";

function NftCard() {
  return (
    <div className="mt-[20%] w-[325px] rounded-xl bg-cardBg lg:mt-[8%]">
      <div
        id="nft-image"
        className="relative mx-auto my-6 h-[276px] w-[276px] overflow-hidden"
      >
        <img src={equilibrium} alt="" className="rounded-xl" />
        <a href="#!">
          <div className="absolute top-0 right-0 bottom-0 left-0 flex h-full w-full items-center overflow-hidden rounded-xl bg-cyan_hover bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
            <img
              src={view}
              alt="view icon"
              className="mx-auto h-[54px] w-[54px]"
            />
          </div>
        </a>
      </div>
      <div id="contents" className="mx-auto mb-6 h-[200px] w-[276px] ">
        <h1 className="font-sans text-2xl font-semibold hover:cursor-pointer hover:text-cyan">
          Equilibrium #3429
        </h1>
        <p className="mt-4 pr-1 font-sans text-base font-normal text-soft_blue">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div id="info" className=" mt-4 flex justify-between">
          <p className="inline-flex items-center gap-2 text-base font-semibold text-cyan">
            <span>
              <img src={ethereum} alt="ethereum icon" />
            </span>
            0.041 ETH
          </p>
          <p className="inline-flex items-center gap-2 text-base text-soft_blue">
            <span>
              <img src={clock} alt="clock icon" />
            </span>
            3 days left
          </p>
        </div>
        <hr className="mt-4 border border-y-[0.1px] border-soft_blue opacity-80" />
        <div id="creator-details" className="my-4 flex items-center gap-4">
          <img
            src={avatar}
            alt="creator"
            className="h-[34px] w-[34px] rounded-full border border-white"
          />
          <p className="text-base text-soft_blue">
            Creation of
            <span className="text-white hover:cursor-pointer hover:text-cyan">
              {" "}
              Jules Wyvern
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NftCard;
