import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className=" relative min-h-screen bg-[#FFFBF5] overflow-hidden pt-32"
    >
      {/* Decorative Shape */}
      <div className="absolute right-0 top-0 w-[450px] h-[450px] bg-[#F5F1E8] rounded-bl-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* LEFT CONTENT */}

        <div className=" lg:col-span-6">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-[#4F6F52]">
            Pendo Adult Family Home
          </p>

          <h1 className="text-[2rem] font-bold leading-[1.1] tracking-tight text-[#252525] sm:text-5xl xl:text-6xl">
            <span className="block sm:whitespace-nowrap">Compassionate Care</span>
            <span className="block text-[#4F6F52] sm:whitespace-nowrap">Feels Like Home</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-600">
            We provide a warm, safe, and supportive environment where residents receive personalized care while maintaining dignity, independence, and comfort.
          </p>


            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="whitespace-nowrap rounded-full bg-[#C89B3C] px-6 sm:px-7 py-3.5 font-semibold text-white transition hover:bg-[#A67C2E]">
                Schedule a Tour
              </a>

              <a href="#about" className="whitespace-nowrap rounded-full border border-[#4F6F52] px-6 sm:px-7 py-3.5 font-semibold text-[#4F6F52] transition hover:bg-[#4F6F52] hover:text-white">
                Learn More
              </a>
            </div>

          {/* Small Trust Row */}

          <div className="flex gap-8 mt-12">
            <div>
              <p className="text-2xl font-bold text-[#4F6F52]">24/7</p>
              <p className="text-sm text-gray-500">Support</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#4F6F52]">Safe</p>
              <p className="text-sm text-gray-500">Environment</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#4F6F52]">Care</p>
              <p className="text-sm text-gray-500">Personalized</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}

        <div className="lg:col-span-6 relative">
          <div className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-full h-full border-2 border-[#C89B3C] rounded-[40px]" />

            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/entry.jpeg"
                alt="Pendo AFH"
                width={900}
                height={900}
                className="w-full h-[650px] object-cover"
              />
            </div>


          {/* Floating badge */}

            <div className="absolute bottom-6 left-4 lg:bottom-8 lg:-left-8 bg-white rounded-2xl shadow-xl px-6 py-5">
              <p className="text-sm text-gray-500">A place filled with</p>

              <p className="font-bold text-[#4F6F52]">
                Care & Compassion
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
