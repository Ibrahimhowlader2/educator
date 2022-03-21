import React from "react";
import { coursesData } from '../Data/Data';

const FamousCourses = () => {
  return (
    <>
      <section className="container py-20" id="courses">
        <h1 className="title"> our famous courses </h1>

        <div className="box-container-grid courses-container-grid-cols">
          {coursesData.map((course) => {
            return (
                <div key={course.id} className="group">
                  <div className="image overflow-hidden h-64 relative">
                    <img
                      src={course.img}
                      alt=""
                      className=" h-full w-full object-cover group-hover:scale-110 ease-in duration-300"
                    />
                    <h3 className="text-lg capitalize text-primaryGray absolute top-2 left-2 py-1 px-2 bg-white">
                      {course.courseName}
                    </h3>
                  </div>
                  <div className="content p-3 text-center border border-primary">
                    <h3 className="text-lg capitalize text-primaryGray">
                      choose what's best for you!
                    </h3>
                    <p className="py-2 text-base leading-loose text-[#777]">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eaque, odit!
                    </p>
                    <a href="#/" className="btn">
                      read more
                    </a>
                    <div className="icons flex items-center justify-between mt-3 pt-3 border-t border-primary">
                      <span className="text-lg capitalize text-primaryGray">
                        {" "}
                        <i className="fas fa-book text-primary pr-1"></i> 12 modules{" "}
                      </span>
                      <span className="text-lg capitalize text-primaryGray">
                        {" "}
                        <i className="fas fa-clock text-primary pr-1"></i> 6 hours{" "}
                      </span>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default FamousCourses;
