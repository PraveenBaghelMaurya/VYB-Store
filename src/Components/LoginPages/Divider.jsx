import React from 'react';

function Divider() {
  return (
    <div className="flex gap-1.5 justify-between items-center mt-9 max-w-full text-base font-medium text-neutral-400 w-[202px]">
      <div className="shrink-0 self-stretch my-auto h-0 border border-solid bg-neutral-400 border-neutral-400 w-[85px]" />
      <div className="self-stretch my-auto border border-solid border-neutral-400">OR</div>
      <div className="shrink-0 self-stretch my-auto h-0 border border-solid bg-neutral-400 border-neutral-400 w-[85px]" />
    </div>
  );
}

export default Divider;