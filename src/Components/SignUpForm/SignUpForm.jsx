import React from 'react';

const SignUpForm = () => {
  return (
    <form className="flex flex-col self-stretch p-4 my-auto text-xs rounded-2xl bg-neutral-900 w-[212px]">
      <button type="button" className="flex gap-2.5 justify-center items-center px-3 py-2 w-full text-sm font-bold text-white rounded-lg border border-solid border-zinc-300">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f9b2bbd895e40a47f3d147dc5c804e5f1f8906fe163a89d4e52e191f4795054?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c" alt="Google logo" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[15px]" />
        <span className="self-stretch my-auto">Login with google</span>
      </button>
      <div className="flex justify-between items-center mt-4 w-full font-medium text-neutral-400">
        <div className="shrink-0 self-stretch my-auto h-0 border border-solid bg-neutral-400 border-neutral-400 w-[85px]" />
        <div className="self-stretch my-auto border border-solid border-neutral-400">OR</div>
        <div className="shrink-0 self-stretch my-auto h-0 border border-solid bg-neutral-400 border-neutral-400 w-[85px]" />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="flex gap-2 items-center px-2 py-3 mt-4 w-full text-lg font-bold text-white whitespace-nowrap border-b border-neutral-400 bg-transparent"
      />
      <input
        type="password"
        placeholder="Password"
        className="flex gap-2 items-center px-2 py-3 mt-4 w-full text-lg font-bold text-white whitespace-nowrap border-b border-neutral-400 bg-transparent"
      />
      <button type="submit" className="flex overflow-hidden justify-center items-center self-center px-4 py-3 mt-4 w-20 font-semibold whitespace-nowrap rounded-xl bg-emerald-500 text-white">
        Login
      </button>
      <div className="flex gap-1 justify-center items-center mt-4 w-full">
        <p className="self-stretch my-auto font-medium text-neutral-400">Don't have an account?</p>
        <a href="#signup" className="flex overflow-hidden flex-col justify-center self-stretch my-auto w-16 font-semibold text-emerald-500">
          <span className="self-center">Get Started</span>
          <div className="w-full border border-emerald-500 border-solid min-h-[1px]" />
        </a>
      </div>
    </form>
  );
};

export default SignUpForm;