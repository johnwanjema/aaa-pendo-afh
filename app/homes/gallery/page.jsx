"use client";

import { useState, useEffect } from "react";
import { Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Navbar from "@/app/components/Navbar";

export default function GalleryPage() {
  return (
    <Suspense fallback={null}>
      <GalleryContent />
    </Suspense>
  );
}

function GalleryContent() {
  const searchParams = useSearchParams();
  const home = searchParams.get("home");
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 80);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const galleries = {
    "1": {
      title: "AAAPendo AFH - Home One",
      description:
        "Take a closer look at our warm and welcoming Home One.",
      images: [
        "/entry.jpeg",
        "/home1.jpeg",
        "/living.jpeg",
        "/dining1.jpeg",
        "/bed1.jpeg",
        "/bed1.1.jpeg",
        "/bathroom1.jpeg",
         "/hoyer.jpeg",
        "/bathroom1.1.jpeg",
        "/closet1.jpeg",
        "/driveway.jpeg",
        "/washroom1.jpeg",
        "/drivethru.jpeg",
        "/entry.jpeg",
        "/lobby.jpeg",
        "/lounge.jpeg",
        "/parking.jpeg",
        "/parking1.1.jpeg",
        "/sideview.jpeg",
      ],
    },

    "2": {
      title: "AAAPendo AFH - Home Two",
      description:
        "Explore the comfortable spaces and caring environment of Home Two.",
      images: [
        "/home2.jpeg",
        "/overview2.1.jpeg",
        "/lounge2.1.jpeg",
        "/living2.jpeg",
        "/dining2.jpeg",
        "/bookshelf.jpeg",
        "/bathroom2.jpeg",
        "/bathroom2.1.jpeg",
        "/bed2.jpeg",
        "/driveway2.jpeg",
        "/lobby2.jpeg",
        "/lounge2.1.jpeg",
        "/washroom2.1.jpeg",
        "/washroom2.jpeg",
      ],
    },
  };

  const gallery = galleries[home] || galleries["1"];

  return (
    <>
      <Navbar />

      <main className="bg-[#FFFBF5] min-h-screen">

       
        {/* Sticky Page Header */}
          <section
            className={`sticky top-20 z-40 border-b border-[#C89B3C]/20 bg-[#FFFBF5]/95 backdrop-blur-md transition-all duration-300 ${scrolled ? "py-3" : "py-8"}`}
          >
            <div className="mx-auto max-w-4xl px-6 text-center">
              <p className={`uppercase font-semibold tracking-[4px] text-[#4F6F52] transition-all duration-300 ${
                  scrolled ? "text-xs" : "text-sm"}`}>
                Gallery
              </p>

              <h1 className={`font-bold text-[#252525] transition-all duration-300 ${
                scrolled ? "mt-2 text-2xl md:text-3xl" : "mt-4 text-4xl md:text-6xl" }`} >
                {gallery.title}
              </h1>
              {!scrolled && (
                <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
                  {gallery.description}
                </p>
              )}
            </div>
          </section>

        {/* Gallery Grid */}
        <section className="pt-10 pb-24">
          <div className="max-w-7xl mx-auto px-6">

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {gallery.images.map((image, index) => (
                <div
                  key={index}
                  className="relative h-80 rounded-3xl overflow-hidden group shadow-md"
                >
                  <Image
                    src={image}
                    alt={`${gallery.title} ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
                </div>
              ))}

            </div>

          </div>
        </section>

      </main>
    </>
  );
}