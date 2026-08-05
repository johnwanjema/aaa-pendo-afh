// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "Sarah M.",
//     relation: "Family Member",
//     text:
//       "The caregivers have treated our mother with incredible kindness and respect. We couldn't have asked for a better home.",
//   },
//   {
//     name: "David K.",
//     relation: "Family Member",
//     text:
//       "From the moment we visited, we knew this was the right place. The staff truly care about every resident.",
//   },
//   {
//     name: "Emily R.",
//     relation: "Family Member",
//     text:
//       "Communication is excellent, and we always feel informed. It gives our family complete peace of mind.",
//   },
// ];

// export default function Testimonials() {
//   return (
//     <section
//       id="testimonials"
//       className="py-24 bg-[#F9F7F3]"
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <div className="text-center max-w-3xl mx-auto mb-16">

//           <p className="uppercase tracking-[4px] text-[#4F6F52] font-semibold">
//             Testimonials
//           </p>

//           <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#252525]">
//             Trusted by Families,
//             <span className="block text-[#4F6F52]">
//               Loved by Residents
//             </span>
//           </h2>

//         </div>

//         {/* Cards */}

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {testimonials.map((item) => (
//             <div
//               key={item.name}
//               className="
//                 bg-white
//                 rounded-3xl
//                 p-8
//                 shadow-sm
//                 hover:shadow-xl
//                 transition
//                 duration-300
//                 hover:-translate-y-2
//               "
//             >
//               <div className="flex gap-1 mb-6">

//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     size={18}
//                     fill="#C89B3C"
//                     color="#C89B3C"
//                   />
//                 ))}

//               </div>

//               <p className="text-gray-600 leading-8 italic">
//                 "{item.text}"
//               </p>

//               <div className="mt-8">

//                 <h3 className="font-semibold text-lg text-[#252525]">
//                   {item.name}
//                 </h3>

//                 <p className="text-sm text-[#4F6F52]">
//                   {item.relation}
//                 </p>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

"use client";

import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    relation: "Daughter of Resident",
    quote:
      "The compassion and kindness shown to our mother have given our family complete peace of mind. We always know she is safe, respected, and genuinely cared for.",
  },
  {
    name: "David K.",
    relation: "Son of Resident",
    quote:
      "From our first visit, we knew Pendo AFH was different. The caregivers treat every resident with dignity and make the home feel welcoming every day.",
  },
  {
    name: "Emily R.",
    relation: "Family Member",
    quote:
      "Communication has always been outstanding. We appreciate the updates, the professionalism, and the genuine care shown to our loved one.",
  },
];

export default function Testimonials() {
const [emblaRef, emblaApi] = useEmblaCarousel({
  loop: true,
  align: "center",
});

useEffect(() => {
  if (!emblaApi) return;

  const interval = setInterval(() => {
    emblaApi.scrollNext();
  }, 5000);

  return () => clearInterval(interval);
}, [emblaApi]);
  return (
    <section
      id="testimonials"
      className="py-12 bg-[#F8F5EF]"
             >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto mb-10">

          <p className="uppercase tracking-[4px] text-[#4F6F52] font-semibold text-sm">
            Testimonials
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#252525]">
            What Families
            <span className="block text-[#4F6F52]">
              Are Saying
            </span>
          </h2>

        </div>

        <div className="relative flex items-center">

          {/* Left Arrow */}

          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="
              hidden md:flex
              absolute
              -left-8
              z-20
              w-12
              h-12
              rounded-full
              bg-white
              shadow-lg
              items-center
              justify-center
              hover:bg-[#4F6F52]
              hover:text-white
              transition
            "
          >
            <ChevronLeft size={22} />
          </button>

          {/* Carousel */}

          <div
            ref={emblaRef}
            className="overflow-hidden w-full"
          >
            <div className="flex">

              {testimonials.map((item, index) => (

                <div
                  key={index}
                  className="flex-[0_0_100%]"
                >

                  <div
                    className="
                      bg-white
                      rounded-[32px]
                      shadow-md
                      px-8
                      py-10
                      max-w-4xl
                      mx-auto
                      relative
                    "
                  >

                    {/* Quote */}

                    <Quote
                      size={50}
                      className="
                        absolute
                        top-5
                        left-6
                        text-[#4F6F52]/10
                      "
                    />

                    {/* Stars */}

                    <div className="flex justify-center gap-1 mb-5">

                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          fill="#C89B3C"
                          color="#C89B3C"
                        />
                      ))}

                    </div>

                    {/* Quote */}

                    <p
                      className="
                        text-lg
                        md:text-xl
                        text-center
                        leading-9
                        italic
                        text-gray-700
                        relative
                        z-10
                      "
                    >
                      "{item.quote}"
                    </p>

                    {/* Author */}

                    <div className="mt-8 text-center">

                      <h3 className="text-xl font-bold text-[#252525]">
                        {item.name}
                      </h3>

                      <p className="text-[#4F6F52] text-sm mt-1">
                        {item.relation}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          </div>

          {/* Right Arrow */}

          <button
            onClick={() => emblaApi?.scrollNext()}
            className="
              hidden md:flex
              absolute
              -right-8
              z-20
              w-12
              h-12
              rounded-full
              bg-white
              shadow-lg
              items-center
              justify-center
              hover:bg-[#4F6F52]
              hover:text-white
              transition
            "
          >
            <ChevronRight size={22} />
          </button>

        </div>

      </div>
    </section>
  );
}