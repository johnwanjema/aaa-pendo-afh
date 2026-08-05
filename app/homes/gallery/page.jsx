"use client";

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

  const galleries = {
    "1": {
      title: "Pendo AFH - Home One",
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
      title: "Pendo AFH - Home Two",
      description:
        "Explore the comfortable spaces and caring environment of Home Two.",
      images: [
        "/home2.jpeg",

        "/overview2.1.jpeg",
        "/lounge2.1.jpeg",
        "/living2.jpeg",
        "/dining2.jpeg",
      ],
    },
  };

  const gallery = galleries[home] || galleries["1"];

  return (
    <>
      <Navbar />

      <main className="bg-[#FFFBF5] min-h-screen">

        {/* Page Header */}
        <section className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[4px] text-[#4F6F52] font-semibold text-sm">
              Gallery
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#252525]">
              {gallery.title}
            </h1>

            <p className="mt-6 text-gray-600 leading-8 max-w-2xl mx-auto">
              {gallery.description}
            </p>

          </div>
        </section>

        {/* Gallery Grid */}
        <section className="pb-24">
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