import React from 'react';

const HomeBanner = () => {
    return (
        <>
            <div className="h-[40rem]"
                style={{
                    backgroundImage: `url(${require('../images/home.jpg')})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="container">
                    <div className="sm:w-[30rem] w-full h-[40rem] flex items-center">
                        <div>
                            <h3 className="sm:text-5xl capitalize text-[#eee] leading-normal font-semibold text-3xl">the best courses you will find find here!</h3>
                            <p className="text-lg leading-normal text-[#eee] py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas impedit labore dolore unde, quidem corrupti?</p>
                            <a href="#/" className="btn">get started</a>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HomeBanner;