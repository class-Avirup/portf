import React from "react";

const Secondsection = () => {
  return (
    <div className="mt-36">
      <section class="flex flex-col mx-16 items-center justify-center lg:flex-row lg:justify-between">
        <img
          src="https://img.freepik.com/free-photo/brunette-young-woman-sitting-chair-holding-tablet_273609-10754.jpg?size=626&ext=jpg"
          alt="tab image"
          class=" w-80  lg:w-1/3"
        />
        <div class="maincontainer items-center">
          <div class="items-center">
            <h2 class="  text-center text-3xl font-bold mt-14">
              BOOKMARK IN ONE CLICK
            </h2>
          </div>

          <p class=" my-10  md:ml-0 text-lg text-center text-gray-400 lg:text-xl lg:px-64 font-semibold ">
            Organize Your Bookmarks However You Like. Our Simple Drag And Drop
            Interface Gives You Complete Control Over Hoe To Manage Your
            Favorite Sites.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Secondsection;
