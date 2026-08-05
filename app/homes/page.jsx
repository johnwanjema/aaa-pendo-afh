import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

import { ArrowRight, Home, Trees, BedDouble } from "lucide-react";
import Footer from "../components/Footer";

const homes = [
  {
    title: "Pendo AFH - Home One",
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
    title: "Pendo AFH - Home Two",
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

        <section className="pt-36 pb-20">

          <div className="max-w-4xl mx-auto px-6 text-center">

            <p className="uppercase tracking-[4px] text-[#4F6F52] font-semibold text-sm">
              Our Homes
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-[#252525]">
              Two Beautiful Homes,
              <span className="block text-[#4F6F52]">
                One Commitment to Exceptional Care
              </span>
            </h1>

            <p className="mt-6 text-gray-600 leading-8 max-w-2xl mx-auto">
              Every Pendo AFH home provides compassionate care in a warm,
              welcoming environment. Explore each location to discover the
              spaces, amenities, and atmosphere that make our homes special.
            </p>

          </div>

        </section>

        {/* Homes */}

        <section className="pb-24">

          <div className="max-w-7xl mx-auto px-6 space-y-20">

            {homes.map((home, index) => (
              <div
                key={home.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}

                <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-lg">

                  <Image
                    src={home.image}
                    alt={home.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-700"
                  />

                </div>

                {/* Content */}

                <div>

                  <h2 className="text-3xl md:text-4xl font-bold text-[#252525]">
                    {home.title}
                  </h2>

                  <p className="mt-6 text-gray-600 leading-8">
                    {home.description}
                  </p>

                  <div className="mt-8 space-y-4">

                    {home.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-3"
                      >
                        <div className="w-10 h-10 rounded-full bg-[#F5F1E8] flex items-center justify-center">

                          {feature.includes("bed") ? (
                            <BedDouble
                              size={18}
                              className="text-[#4F6F52]"
                            />
                          ) : feature.includes("outdoor") ? (
                            <Trees
                              size={18}
                              className="text-[#4F6F52]"
                            />
                          ) : (
                            <Home
                              size={18}
                              className="text-[#4F6F52]"
                            />
                          )}

                        </div>

                        <span className="text-gray-700">
                          {feature}
                        </span>

                      </div>
                    ))}

                  </div>
<div className="flex flex-wrap gap-4 mt-10">

  <Link
    href={`/homes/home-${home.homeId}`}
    className="
      inline-flex
      items-center
      gap-2
      bg-[#4F6F52]
      text-white
      px-7
      py-3
      rounded-full
      font-semibold
      hover:bg-[#3D5B43]
      transition
    "
  >
    Learn More
    <ArrowRight size={18} />
  </Link>

  <Link
    href={`/homes/gallery?home=${home.homeId}`}
    className="
      inline-flex
      items-center
      px-7
      py-3
      rounded-full
      border-2
      border-[#4F6F52]
      text-[#4F6F52]
      font-semibold
      hover:bg-[#4F6F52]
      hover:text-white
      transition
    "
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