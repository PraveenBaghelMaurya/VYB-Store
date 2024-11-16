import React from 'react';

function LoginForm() {
  return (
    <form>
      <div className="flex gap-2 items-center px-2 py-3 mt-9 w-full text-2xl font-bold text-white whitespace-nowrap border-b border-neutral-400 max-w-[364px]">
        <label htmlFor="email" className="sr-only">Email</label>
        <input id="email" type="email" className="flex-1 shrink gap-10 self-stretch my-auto w-full min-w-[240px] bg-transparent" placeholder="Email" required />
      </div>
      <div className="flex gap-2 items-center px-2 py-3 mt-9 w-full text-2xl font-bold text-white whitespace-nowrap border-b border-neutral-400 max-w-[364px]">
        <label htmlFor="password" className="sr-only">Password</label>
        <input id="password" type="password" className="flex-1 shrink gap-10 self-stretch my-auto w-full min-w-[240px] bg-transparent" placeholder="Password" required />
      </div>
      <button type="submit" className="flex overflow-hidden justify-center items-center px-6 py-4 mt-9 font-semibold whitespace-nowrap rounded-2xl max-w-[142px] w-[142px] max-md:px-5 bg-emerald-500 text-white">
        Login
      </button>
      <div className="flex gap-1 justify-center items-center mt-9 max-w-full w-[284px]">
        <p className="self-stretch my-auto font-medium text-neutral-400">Don't have an account?</p>
        <a href="#" className="flex overflow-hidden flex-col justify-center self-stretch my-auto w-24 font-semibold text-emerald-500">
          <span className="self-center">Get Started</span>
          <span className="w-full border border-emerald-500 border-solid min-h-[1px]"></span>
        </a>
      </div>
    </form>
  );
}

export default LoginForm;