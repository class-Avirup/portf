import React from "react";

const Features = () => {
  return (
    <div className="mt-36">
      <div className="featuresbox flex justify-center flex-col mx-10 pt-11">
        <h2 className="text-center text-2xl font-bold">FEATURES</h2>
        <p className="pt-6 text-center text-lg text-gray-400 lg:text-xl lg:px-96 font-semibold  ">
          Our Aim Is To Make It Quick And Easy For You To Access Your Favorite
          Websites. Your Bookmarks Sync Between Your Devices So That You Can
          Access Them On The Go
        </p>
      </div>

      <div className="feature2box flex-col mt-10 justify-center items-center ">
        {" "}
        <h3 className="text-center text-xl font-medium mb-8  hover:text-red-500">
          Simple Bookmarking
        </h3>
        <h3 className="text-center text-xl font-medium mb-8 hover:text-red-500">
          Speedy Searching
        </h3>
        <h3 className="text-center text-xl font-medium mb-8  hover:text-red-500">
          Easy Sharing
        </h3>
      </div>
    </div>
  );
};

export default Features;
