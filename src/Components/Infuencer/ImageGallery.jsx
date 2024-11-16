import React from 'react';
import ImageSet from './ImageSet';

const imageData = [
  [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/430f7e12a4d7c400bfb6f06fb97135324fc37cd99d02ff5930558f8dc142bad2?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Image 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e757872a9949219ad1de258967280265f109b20c4bec272a8e305afd1dbd69ee?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Image 2" }
  ],
  [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/641b06cd05c25022348eb2704b55d676fc19235bfc30fcf1f21eaeaffbd768f9?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Image 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e886d6abc14fb7d3916a450f0c2f0cf22f13ddef55f05dd29ddda32d9e244a8?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Image 4" }
  ],
  [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cbcba519ec59f93d54a1f39c099b922d0798593ba6e668114ed2a706f038d43b?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Image 5" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/138bb103c8716f81e57d065238408237dfc8064022c05517ef9266179487743a?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Image 6" }
  ],
  [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/22595b2e4df9e0a88dba3a1eb70e0d0b4dddafc0e88e37217dac779f67d45c8c?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Image 7" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5d7feb7db2e7ea5cd6d204921bb4c6bfb2b079b9408b5797bb27d95b94580f2c?placeholderIfAbsent=true&apiKey=81cb913614704511878cada97e5eac5c", alt: "Image 8" }
  ]
];

function ImageGallery() {
  return (
    <main className="flex overflow-hidden flex-col px-20 py-24 rounded-sm border border-solid bg-stone-400 border-white border-opacity-10 max-md:px-5 max-md:pt-24">
      <section className="w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {imageData.slice(0, 2).map((set, index) => (
            <ImageSet key={index} images={set} />
          ))}
        </div>
      </section>
      <section className="mt-40 w-full max-w-[1424px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {imageData.slice(2, 4).map((set, index) => (
            <ImageSet key={index} images={set} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default ImageGallery;