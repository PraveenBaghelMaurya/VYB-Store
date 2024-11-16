import React from 'react';

function ImageSet({ images }) {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="overflow-hidden grow p-5 rounded-md border border-purple-500 border-dashed max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img 
              loading="lazy" 
              src={images[0].src} 
              alt={images[0].alt}
              className="object-contain mt-3 w-full aspect-square rounded-[368px] max-md:mt-10" 
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img 
              loading="lazy" 
              src={images[1].src} 
              alt={images[1].alt}
              className="object-contain grow w-full aspect-[0.98] max-md:mt-10" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSet;