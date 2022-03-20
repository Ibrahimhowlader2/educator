import React from 'react';
import about from "../images/about-img.svg"

const AboutUs = () => {
    return (
        <>
            <section class="bg-red-50" id="about">
                <div class="about container pb-10">
                    <div className="md:flex md:items-center md:justify-center">
                        <div class="image md:w-2/4">
                            <img src={about} alt="" className="w-full"/>
                        </div>
                        <div class="content md:w-[40%] w-full">
                            <span className="text-2xl text-primary">about us</span>
                            <h3 className=" py-2 text-4xl capitalize text-primaryGray">best online platform for e-learning.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi beatae aperiam iusto officia illo porro. Magni, impedit quam saepe iste, vel perspiciatis eum libero magnam doloribus quisquam sint voluptatibus rem.</p>
                            <a href="#/" class="btn">read more</a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default AboutUs;
