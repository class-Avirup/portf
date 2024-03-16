import React from "react";

const Section = () => {
  return (
    <div>
      <section className="flex flex-col mx-16 items-center lg:flex-row-reverse">
        <img
          src="https://img.freepik.com/free-vector/starting-career-concept-illustration_114360-16694.jpg?w=740&t=st=1710578545~exp=1710579145~hmac=574f3fb7c2ba3679025b9720c1a9af881f71b7b3490f3bd151b294c18fa2c7c2"
          alt="tab image"
          className=" w-96 mt-14 lg:w-1/2"
        />
        <div className="maincontainer items-center">
          <div className="items-center">
            <h2 className="  text-center text-3xl font-bold uppercase ">
              Passion-driven, purposeful career exploration
            </h2>
          </div>

          <p className=" my-10  md:ml-0 text-lg text-center text-gray-400 lg:text-xl lg:px-10 font-semibold ">
            A Clean And Simple Interface To Keep Your Favorite Websites
            Organized. Open A New Tab And See Your Sites Load Insatantly. Try It
            For Free
          </p>
          <div className="flex justify-center">
            <div className="buttons flex  justify-center gap-5 w-2/3">
              <button
                id="loginbtn"
                className=" h-14 w-44 bg-blue-500 drop-shadow-lg text-slate-200 cursor-pointer hover:bg-sky-600 px-5 rounded-md  "
              >
                On chrome
              </button>
              <button
                id="loginbtn"
                className="border-blue-500 border-2 drop-shadow-lg w-44 h-14 text-blue-500 hover:bg-slate-200 px-5 rounded-md  "
              >
                On firefox
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
