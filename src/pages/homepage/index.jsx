import React from "react";
import HomeHero from "../../component/homepageComponent/homehero";
import HomeStudio from "../../component/homepageComponent/HomeStudio";
import {
  AiOutlineCluster,
  AiOutlineCodepenCircle,
  AiOutlineCodeSandbox,
  AiFillContainer,
  AiFillDropboxCircle,
  AiFillSketchCircle,
} from "react-icons/ai";

const cards = [
  {
    icon: <AiOutlineCluster />,
    title: "Digital Design",
    subtitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    icon: <AiOutlineCodepenCircle />,
    title: "Unlimited Colors",
    subtitle:
      "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet..",
  },
  {
    icon: <AiOutlineCodeSandbox />,
    title: "Strategy Solutions",
    subtitle:
      "Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia..",
  },
  {
    icon: <AiFillContainer />,
    title: "Easy to customize ",
    subtitle:
      "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia..",
  },

  {
    icon: <AiFillDropboxCircle />,
    title: "Awesome Support",
    subtitle:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
  },
  {
    icon: <AiFillSketchCircle />,
    title: "Truly Multipurpose ",
    subtitle:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  },
];

function Homepage() {
  return (
    <div className="w-full">
      <HomeHero />
      <HomeStudio />
      <div className="grid grid-cols-3 gap-[40px] px-[80px]">
        {cards.map((item, i) => (
          <div key={i}>
            <div className="flex justify-center">
              <p className="p-4 bg-red-500 text-white text-[40px] rounded-full">
                {item.icon}
              </p>
            </div>
            <p className="mt-[15px] font-bold text-[24px] text-center">
              {item.title}
            </p>
            <p className="mt-[15px] text-[15px] leading-[24px] text-center">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
