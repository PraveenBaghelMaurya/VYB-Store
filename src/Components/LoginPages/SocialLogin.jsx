import React from 'react';

function SocialLogin() {
  return (
    <button className="flex gap-2.5 justify-center items-center self-stretch px-4 py-3 mt-9 w-full font-medium text-white rounded-lg border border-solid border-zinc-300">
      <div className="flex gap-3.5 justify-center items-center self-stretch my-auto w-[215px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/254086b08aee64e963c5348c0a2d267740237d31952bf3f4ba7ba21943e40cd7?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.05] w-[21px]" />
        <span className="self-stretch my-auto">Login with google</span>
      </div>
    </button>
  );
}

export default SocialLogin;