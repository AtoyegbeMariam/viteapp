import React from "react";
import imgA from "../../assets/imgA.jpg";

function HomeHero() {
  return (
    <div className="relative h-[500px] w-full">
      <img className="w-full h-full" src={imgA} alt="" />
      <div className="w-full h-full absolute top-0 bg-black/50 "></div>
      <div className="absolute top-0 text-white w-[450px] mt-[80px] ml-[50px] sm:w-full sm:ml-2">
        <h1 className="text-[45px] font-semibold leading-[30px]">
          Introducing
        </h1>
        <h1 className="text-[50px] font-bold mb-[5px] ">Children Study</h1>
        <p className="leading-[30px] text-[20px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem.
        </p>
        <button className="px-4 py-2 bg-white text-black mt-[15px] rounded-md cursor-pointer hover:bg-slate-100">
          Get started
        </button>
      </div>
    </div>
  );
}

export default HomeHero;
