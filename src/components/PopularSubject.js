import React from "react";
import { popularSubData } from '../Data/Data';
const PopularSubject = () => {
  return (
    <>
      <section className="container my-20" id="subject">
        <h1 className="title">our popular subjects</h1>

        <div className="box-container-grid popular-container-grid-cols">
          {popularSubData.map((popular) => {
            return (
              <div
                key={popular.id}
                className="box group">
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
            );
          })}
        </div>
      </section>
    </>
  );
};

export default PopularSubject;
