import React from 'react';

const Footer = () => {
    return (
        <>

            <section class="py-20 bg-red-50">

                <div className="container">
                <div class="box-container-grid footer-container-grid-cols">
                    <div class="">
                        <h3 className="text-xl capitalize text-primaryGray font-semibold py-2"> <i class="fas fa-lightbulb text-primary"></i> educa </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>
                        <div class="mt-2">
                            <a href="#/" class="fab fa-facebook-f h-12 w-12 leading-[3rem] text-xl text-white bg-primary mr-5 text-center hover:bg-primaryGray ease-in duration-300"> </a>
                            <a href="#/" class="fab fa-twitter h-12 w-12 leading-[3rem] text-xl text-white bg-primary mr-5 text-center hover:bg-primaryGray ease-in duration-300"> </a>
                            <a href="#/" class="fab fa-instagram h-12 w-12 leading-[3rem] text-xl text-white bg-primary mr-5 text-center hover:bg-primaryGray ease-in duration-300"> </a>
                            <a href="#/" class="fab fa-linkedin h-12 w-12 leading-[3rem] text-xl text-white bg-primary mr-5 text-center hover:bg-primaryGray ease-in duration-300"> </a>
                        </div>
                    </div>
                    <div class="">
                        <h3 className="text-xl capitalize text-primaryGray font-semibold py-2">quick links</h3>
                        <a href="home.html" class="link text-lg leading-loose text-[#777]  block hover:text-primary hover:underline ease-in duration-300">home</a>
                        <a href="about.html" class="link text-lg leading-loose text-[#777]  block hover:text-primary hover:underline ease-in duration-300">about</a>
                        <a href="courses.html" class="link text-lg leading-loose text-[#777]  block hover:text-primary hover:underline ease-in duration-300">courses</a>
                        <a href="contact.html" class="link text-lg leading-loose text-[#777]  block hover:text-primary hover:underline ease-in duration-300">contact</a>
                    </div>

                    <div class="">
                        <h3 className="text-xl capitalize text-primaryGray font-semibold py-2">useful links</h3>
                        <a href="#/" class="link text-lg leading-loose text-[#777]  block hover:text-primary hover:underline ease-in duration-300">help center</a>
                        <a href="#/" class="link text-lg leading-loose text-[#777]  block hover:text-primary hover:underline ease-in duration-300">ask questions</a>
                        <a href="#/" class="link text-lg leading-loose text-[#777]  block hover:text-primary hover:underline ease-in duration-300">send feedback</a>
                        <a href="#/" class="link text-lg leading-loose text-[#777]  block hover:text-primary hover:underline ease-in duration-300">private policy</a>
                        <a href="#/" class="link text-lg leading-loose text-[#777]  block hover:text-primary hover:underline ease-in duration-300">terms of use</a>
                    </div>
                    <div class="">
                        <h3 className="text-xl capitalize text-primaryGray font-semibold py-2">newsletter</h3>
                        <p className="text-xl leading-loose text-[#777]">subscribe for latest upadates</p>
                        <form action="">
                            <input type="email" name="" placeholder="enter your email" id="" class="email w-full py-2 px-2 text-large border border-primary mb-2" />
                            <input type="submit" value="subscribe" class="btn" />
                        </form>
                    </div>

                </div>

                <div class="credit text-center mt-5 pt-5 text-xl capitalize border-t border-primary"> created by <span class="text-primary">Ibrahim Howlader</span> | all rights reserved! </div>
                </div>

            </section>
        </>
    );
};

export default Footer;