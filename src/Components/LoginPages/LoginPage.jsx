import React from 'react';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';
import Divider from './Divider';

function LoginPage() {
  return (
    <main className="flex flex-wrap justify-between items-center p-10 mt-5 max-w-full text-lg bg-black rounded-3xl w-[1080px] max-md:px-5">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d70cbe17618aacb4d12a2742bafe8d65053caa1c41b760f5582ce9f2d9e80a49?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c" alt="" className="object-contain self-stretch my-auto rounded-none aspect-[1.05] min-w-[240px] w-[584px] max-md:max-w-full" />
      <section className="flex flex-col flex-1 shrink items-center self-stretch px-7 py-6 my-auto bg-black rounded-2xl basis-0 max-w-[420px] min-w-[240px] max-md:px-5">
        <h1 className="self-stretch text-4xl font-bold text-center text-white">Login</h1>
        <SocialLogin />
        <Divider />
        <LoginForm />
      </section>
    </main>
  );
}

export default LoginPage;
