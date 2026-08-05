import Image from "next/image";
import { HeartHandshake, House } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="uppercase tracking-[3px] text-[#4F6F52] font-semibold">
            About Pendo AFH
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#252525]">
            More Than a Place to Live,
            <span className="block text-[#4F6F52]">A Place to Belong.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}

          <div className="rounded-[32px] overflow-hidden shadow-xl">
            <Image
              src="/entry.jpeg"
              alt="Pendo AFH"
              width={1400}
              height={850}
              className="w-full h-[600px] object-cover"
            />
          </div>

          {/* Card 1 */}

          <div
            className="
            absolute
            -bottom-10
            left-8
            bg-white
            rounded-3xl
            shadow-xl
            p-6
            max-w-sm
            "
          >
            <div className="w-14 h-14 rounded-full bg-[#F5F1E8] flex items-center justify-center">
              <HeartHandshake size={28} className="text-[#4F6F52]" />
            </div>

            <h3 className="mt-5 text-xl text-gray-800 font-semibold">Personalized Care</h3>

            <p className="mt-3 text-gray-600 leading-7">
              Every resident receives compassionate, individualized support
              tailored to their unique needs and daily routine.
            </p>
          </div>

          {/* Card 2 */}

          <div
            className="
            absolute
            top-12
            -right-8
            bg-white
            rounded-3xl
            shadow-xl
            p-6
            max-w-sm
            "
          >
            <div className="w-14 h-14 rounded-full bg-[#F5F1E8] flex items-center justify-center">
              <House size={28} className="text-[#4F6F52]" />
            </div>

            <h3 className="mt-5 text-xl text-gray-800 font-semibold">A True Home</h3>

            <p className="mt-3 text-gray-600 leading-7">
              We create a warm, welcoming environment where residents enjoy
              comfort, companionship, and peace of mind.
            </p>
          </div>
        </div>

        {/* Bottom Text */}

        <div className="max-w-3xl mx-auto text-center mt-24">
          <p className="text-lg leading-8 text-gray-600">
            At Pendo Adult Family Home, we believe quality care begins with
            genuine relationships. Our goal is to provide a safe, respectful,
            and comfortable home where every resident is treated with dignity,
            compassion, and kindness every day.
          </p>
        </div>
      </div>
    </section>
  );
}
