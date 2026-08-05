import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const homes = [
  {
    title: "Pendo AFH - Home One",
    description:
      "A warm and welcoming home offering personalized care in a peaceful environment.",
    image: "/home1.jpeg",
    href: "/gallery?home=1",
  },
  {
    title: "Pendo AFH - Home Two",
    description:
      "Comfortable living spaces designed to promote independence, dignity, and connection.",
    image: "/home2.jpeg",
    href: "/gallery?home=2",
  },
];

export default function OurHomes() {
  return (
    <section className="py-20 bg-[#F5F1E8]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="uppercase tracking-[3px] text-[#4F6F52] font-semibold text-sm">
            Our Homes
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-[#252525]">
            Two Beautiful Homes,
            <span className="block text-[#4F6F52]">
              One Compassionate Mission
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            Each Pendo AFH home offers a warm, comfortable setting with the same
            commitment to personalized care and resident well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {homes.map((home) => (
            <div
              key={home.title}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group"
            >
              <div className="relative h-80 overflow-hidden">

                <Image
                  src={home.image}
                  alt={home.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-[#252525]">
                  {home.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {home.description}
                </p>

                <Link
                  href={home.href}
                  className="inline-flex items-center gap-2 mt-6 text-[#4F6F52] font-semibold hover:gap-3 transition-all"
                >
                  Explore Home
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}