import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';

const GetStartedSection = () => {
  return (
    <section className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
      {/* Frist div */}
      <div className="flex overflow-hidden flex-col justify-center w-full max-md:max-w-full">
        <h2 className="text-4xl font-bold text-center text-emerald-500 max-md:max-w-full">
          How to get started?
        </h2>
        <div className="flex flex-col items-center mt-9 w-full h-[450px] max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-center items-center p-9 bg-pink-800 rounded-3xl max-w-[840px] shadow-[0px_4px_4px_rgba(0,0,0,0.36)] w-[840px] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col self-stretch my-auto text-white max-w-[340px] min-w-[240px] w-[340px]">
              <h3 className="text-3xl font-bold">
                Sign Up and create your own store hassle-free.
              </h3>
              <p className="mt-6 text-base font-medium">
                Join us via google signin and verify your influencer status by entering you social media Id and unlock your store{" "}
                <span className="text-white">@ zero cost.</span>
              </p>
            </div>
            <SignUpForm />
          </div>
          {/* Second Div */}
          <div className="flex gap-10 mt-9 bg-green-400 rounded-3xl max-w-[840px] min-h-[392px] rotate-[0.01745329158704388rad] shadow-[0px_4px_4px_rgba(0,0,0,0.36)] w-[846px] max-md:max-w-full" />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;