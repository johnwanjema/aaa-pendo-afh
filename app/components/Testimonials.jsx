
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
    <section id="testimonials" className="py-12 bg-[#F8F5EF]">
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
          <button onClick={() => emblaApi?.scrollPrev()}
            className="absolute -left-8 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[#4F6F52] hover:text-white md:flex">
            <ChevronLeft size={22} />
          </button>

          {/* Carousel */}

          <div ref={emblaRef} className="overflow-hidden w-full">
            <div className="flex">
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%]" >
                  <div className="relative mx-auto max-w-4xl rounded-[32px] bg-white px-8 py-10 shadow-md">
                    {/* Quote */}
                    <Quote size={50} className=" absolute top-5 left-6  text-[#4F6F52]/10 "/>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star  key={i} size={18} fill="#C89B3C" color="#C89B3C"/>
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg md:text-xl text-center leading-9 italic text-gray-700 relative z-10">
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
          <button onClick={() => emblaApi?.scrollNext()}
            className="absolute -right-8 z-20 hidden h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-[#4F6F52] hover:text-white md:flex">
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}