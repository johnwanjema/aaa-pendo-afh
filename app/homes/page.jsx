import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

import { ArrowRight, Home, Trees, BedDouble } from "lucide-react";
import Footer from "../components/Footer";
import { pageMetadata } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Our Homes",
  description:
    "Explore AAAPendo AFH's two adult family homes in Federal Way, WA. Compare bedrooms, living spaces, and amenities, and schedule a tour.",
  path: "/homes",
});

const homes = [
  {
    title: "AAAPendo AFH - Home One",
    image: "/home1.jpeg",
    description:
      "A warm and welcoming home offering personalized care in a peaceful residential setting.",
    features: [
      "Private & shared bedrooms",
      "Spacious living room",
      "Beautiful outdoor space",
    ],
    homeId: 1,
  },
  {
    title: "AAAPendo AFH - Home Two",
    image: "/home2.jpeg",
    description:
      "A comfortable home focused on safety, dignity, and compassionate daily support.",
    features: [
      "Comfortable common areas",
      "Home-cooked meals",
      "Accessible bathrooms",
    ],
    homeId: 2,
  },
];

export default function HomesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-[#FFFBF5]">
      {/* Hero */}
      <section className="pb-20 pt-36">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#4F6F52]">
            Our Homes
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#252525] md:text-6xl">
            Two Beautiful Homes,
            <span className="block text-[#4F6F52]">
              One Commitment to Exceptional Care
        </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600">
            Every AAAPendo AFH home provides compassionate care in a warm, welcoming
            environment. Explore each location to discover the spaces, amenities,
            and atmosphere that make our homes special.
          </p>
          </div>
        </section>

        {/* Homes */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl space-y-20 px-6">
            {homes.map((home, index) => (
              <div
              key={home.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={home.image}
                  alt={home.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold text-[#252525] md:text-4xl">
                  {home.title}
                </h2>
                <p className="mt-6 leading-8 text-gray-600">
                  {home.description}
                </p>
                <div className="mt-8 space-y-4">
                  {home.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F1E8]">
                        {feature.includes("bed") ? (
                          <BedDouble size={18} className="text-[#4F6F52]" />
                        ) : feature.includes("outdoor") ? (
                          <Trees size={18} className="text-[#4F6F52]" />
                        ) : (
                          <Home size={18} className="text-[#4F6F52]" />
                        )}
                      </div>

                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href={`/homes/home-${home.homeId}`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#4F6F52] px-7 py-3 font-semibold text-white transition hover:bg-[#3D5B43]"
                    >
                      Learn More
                      <ArrowRight size={18} />
                    </Link>

                    <Link
                      href={`/homes/gallery?home=${home.homeId}`}
                      className="inline-flex items-center rounded-full border-2 border-[#4F6F52] px-7 py-3 font-semibold text-[#4F6F52] transition hover:bg-[#4F6F52] hover:text-white"
                    >
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>
            ))}
              </div>
       </section>
    </main>

      <Footer />
    </>
  );
}