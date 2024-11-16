import React from 'react';

const GetStarted = () => {
    return (
        <section className="flex flex-col mt-12 w-full max-md:mt-10 max-md:max-w-full">
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
                <div className="flex gap-10 mt-9 bg-green-400 rounded-3xl max-w-[840px] min-h-[392px] rotate-[0.01745329158704388rad] shadow-[0px_4px_4px_rgba(0,0,0,0.36)] w-[846px] max-md:max-w-full" />
            </div>
        </section>
    );
};

const SignUpForm = () => {
    return (
        <form className="flex flex-col self-stretch p-4 my-auto text-xs rounded-2xl bg-neutral-900 w-[212px]">
            <button type="button" className="flex gap-2.5 justify-center items-center px-3 py-2 w-full text-sm font-bold text-white rounded-lg border border-solid border-zinc-300">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f9b2bbd895e40a47f3d147dc5c804e5f1f8906fe163a89d4e52e191f4795054?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c" alt="Google logo" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]" />
                <span>Login with google</span>
            </button>
            <div className="flex justify-between items-center mt-4 w-full font-medium text-neutral-400">
                <div className="shrink-0 self-stretch my-auto h-0 border border-solid bg-neutral-400 border-neutral-400 w-[85px]" />
                <div className="self-stretch my-auto border border-solid border-neutral-400">OR</div>
                <div className="shrink-0 self-stretch my-auto h-0 border border-solid bg-neutral-400 border-neutral-400 w-[85px]" />
            </div>
            <input type="email" placeholder="Email" className="flex gap-2 items-center px-2 py-3 mt-4 w-full text-lg font-bold text-white whitespace-nowrap border-b border-neutral-400 bg-transparent" />
            <input type="password" placeholder="Password" className="flex gap-2 items-center px-2 py-3 mt-4 w-full text-lg font-bold text-white whitespace-nowrap border-b border-neutral-400 bg-transparent" />
            <button type="submit" className="flex overflow-hidden justify-center items-center self-center px-4 py-3 mt-4 w-20 font-semibold whitespace-nowrap rounded-xl text-emerald-500">Login</button>
            <p className="flex gap-1 justify-center items-center mt-4 w-full">
                <span className="self-stretch my-auto font-medium text-neutral-400">Don't have an account?</span>
                <a href="#signup" className="flex overflow-hidden flex-col justify-center self-stretch my-auto w-16 font-semibold text-emerald-500">
                    <span className="self-center">Get Started</span>
                    <div className="w-full border border-emerald-500 border-solid min-h-[1px]" />
                </a>
            </p>
        </form>
    );
};

export default GetStarted;
