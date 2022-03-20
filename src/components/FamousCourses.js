import React from "react";
import courses from "../coursesData";

const FamousCourses = () => {
  return (
    <>
      <section class="container py-20" id="courses">
        <h1 class="title"> our famous courses </h1>

        <div class="box-container-grid courses-container-grid-cols">
          {courses.map((course) => {
            return (
              <>
                <div class="group">
                  <div class="image overflow-hidden h-64 relative">
                    <img
                      src={course.img}
                      alt=""
                      className=" h-full w-full object-cover group-hover:scale-110 ease-in duration-300"
                    />
                    <h3 className="text-lg capitalize text-primaryGray absolute top-2 left-2 py-1 px-2 bg-white">
                      {course.courseName}
                    </h3>
                  </div>
                  <div class="content p-3 text-center border border-primary">
                    <h3 className="text-lg capitalize text-primaryGray">
                      choose what's best for you!
                    </h3>
                    <p className="py-2 text-base leading-loose text-[#777]">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Eaque, odit!
                    </p>
                    <a href="#/" class="btn">
                      read more
                    </a>
                    <div class="icons flex items-center justify-between mt-3 pt-3 border-t border-primary">
                      <span className="text-lg capitalize text-primaryGray">
                        {" "}
                        <i class="fas fa-book text-primary pr-1"></i> 12 modules{" "}
                      </span>
                      <span className="text-lg capitalize text-primaryGray">
                        {" "}
                        <i class="fas fa-clock text-primary pr-1"></i> 6 hours{" "}
                      </span>
                    </div>
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

export default FamousCourses;
