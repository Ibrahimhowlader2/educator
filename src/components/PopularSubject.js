import React from "react";
import populars from "../popularSubData";

const PopularSubject = () => {
  return (
    <>
      <section class="container my-20">
        <h1 class="title">our popular subjects</h1>

        <div class="box-container-grid popular-container-grid-cols">
          {populars.map((popular) => {
            return (
              <>
                <div class="box group" key={popular.id}>
                  <img src={popular.img} className="h-32 mb-2" alt="" />
                  <div>
                    <h3 className="text-xl capitalize text-primaryGray py-2 font-semibold  group-hover:text-white ease-in duration-300 group">
                      {popular.title}
                    </h3>
                    <p className="text-base leading-normal text-[#777] group-hover:text-white ease-in duration-300 group">
                      {popular.modules}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PopularSubject;
