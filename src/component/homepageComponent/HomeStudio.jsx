import React from "react";
import phonepix from "../../assets/phonepix.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

function HomeStudio() {
  return (
    <div className="flex justify-between mt-5 px-[100px] items-center py-[50px] md:flex-col md:gap-[40px] md:px-[20px]">
      <div className="">
        <div className="w-[450px] sm:w-full">
          <h3 className="text-[25px] leading-[35px] font-[500] mb-[25px]">
            A digital web design studio creating modern & engaging online
            experiences
          </h3>
          <p className="text-[15px] leading-[24px] mb-[25px]">
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics, a large language ocean. A small river named Duden flows
            by their place and supplies it with the necessary regelialia.
          </p>
          <ul className="list-disc text-[15px] leading-[24px] mb-[25px] px-[20px]">
            <li>We put a lot of effort in design.</li>
            <li>The most important ingredient of successful website.</li>
            <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
            <li>Submit Your Orgnization.</li>
          </ul>
          <button className="px-4 py-2 bg-black text-white rounded-md flex gap-[5px] items-center">
            Learn More <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="">
        <img src={phonepix} alt className="h-[350px]" />
      </div>
    </div>
  );
}

export default HomeStudio;
