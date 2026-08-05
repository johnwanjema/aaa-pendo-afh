import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      min-h-screen
      bg-[#FFFBF5]
      overflow-hidden
      pt-32
      "
    >

      {/* Decorative Shape */}
      <div
        className="
        absolute
        right-0
        top-0
        w-[450px]
        h-[450px]
        bg-[#F5F1E8]
        rounded-bl-full
        "
      />


      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        lg:grid-cols-12
        gap-10
        items-center
        relative
        z-10
        "
      >


        {/* LEFT CONTENT */}

        <div
          className="
          lg:col-span-5
          "
        >

          <p
            className="
            text-[#4F6F52]
            uppercase
            tracking-[3px]
            font-semibold
            text-sm
            mb-6
            "
          >
            Pendo Adult Family Home
          </p>


          <h1
            className="
            text-5xl
            lg:text-6xl
            font-bold
            leading-tight
            text-[#252525]
            "
          >
            Compassionate Care
            <span className="block text-[#4F6F52]">
              Feels Like Home
            </span>
          </h1>


          <p
            className="
            mt-6
            text-lg
            text-gray-600
            leading-relaxed
            max-w-lg
            "
          >
            We provide a warm, safe, and supportive environment
            where residents receive personalized care while
            maintaining dignity, independence, and comfort.
          </p>


          <div
            className="
            flex
            gap-4
            mt-8
            "
          >

            <a
              href="#contact"
              className="
              bg-[#C89B3C]
              text-white
              px-7
              py-3.5
              rounded-full
              font-semibold
              hover:bg-[#A67C2E]
              transition
              "
            >
              Schedule a Tour
            </a>


            <a
              href="#about"
              className="
              border
              border-[#4F6F52]
              text-[#4F6F52]
              px-7
              py-3.5
              rounded-full
              font-semibold
              hover:bg-[#4F6F52]
              hover:text-white
              transition
              "
            >
              Learn More
            </a>

          </div>


          {/* Small Trust Row */}

          <div
            className="
            flex
            gap-8
            mt-12
            "
          >

            <div>
              <p className="text-2xl font-bold text-[#4F6F52]">
                24/7
              </p>
              <p className="text-sm text-gray-500">
                Support
              </p>
            </div>


            <div>
              <p className="text-2xl font-bold text-[#4F6F52]">
                Safe
              </p>
              <p className="text-sm text-gray-500">
                Environment
              </p>
            </div>


            <div>
              <p className="text-2xl font-bold text-[#4F6F52]">
                Care
              </p>
              <p className="text-sm text-gray-500">
                Personalized
              </p>
            </div>


          </div>


        </div>



        {/* RIGHT IMAGE */}

        <div
          className="
          lg:col-span-7
          relative
          "
        >

          <div
            className="
            absolute
            -top-8
            -right-8
            w-full
            h-full
            border-2
            border-[#C89B3C]
            rounded-[40px]
            "
          />


          <div
            className="
            relative
            rounded-[40px]
            overflow-hidden
            shadow-2xl
            "
          >

            <Image
              src="/entry.jpeg"
              alt="Pendo AFH"
              width={900}
              height={900}
              className="
              w-full
              h-[650px]
              object-cover
              "
            />

          </div>


          {/* Floating badge */}

          <div
            className="
            absolute
            bottom-8
            -left-8
            bg-white
            rounded-2xl
            shadow-xl
            px-6
            py-5
            "
          >

            <p className="text-sm text-gray-500">
              A place filled with
            </p>

            <p
              className="
              font-bold
              text-[#4F6F52]
              "
            >
              Care & Compassion
            </p>

          </div>


        </div>


      </div>

    </section>
  );
}