import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/entry.jpeg",
    alt: "Living room",
  },
  {
    src: "/living.jpeg",
    alt: "Dining area",
  },
  {
    src: "/entry.jpeg",
    alt: "Bedroom",
  },
//   {
//     src: "/entry.jpeg",
//     alt: "Outdoor space",
//   },
//   {
//     src: "/entry.jpeg",
//     alt: "Kitchen",
//   },
//   {
//     src: "/entry.jpeg",
//     alt: "Resident activities",
//   },
];

export default function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="py-16 bg-[#F5F1E8]"
    >

      <div className="max-w-6xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center max-w-2xl mx-auto mb-10">

          <p className="
            uppercase
            tracking-[3px]
            text-[#4F6F52]
            font-semibold
            text-sm
          ">
            Our Home
          </p>


          <h2 className="
            mt-3
            text-3xl
            md:text-4xl
            font-bold
            text-[#252525]
          ">
            A Place Designed
            <span className="block text-[#4F6F52]">
              For Comfort & Care
            </span>
          </h2>


          <p className="mt-4 text-gray-600">
            Explore some of the spaces that make Pendo AFH
            feel like home.
          </p>

        </div>



        {/* Images */}

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-5
          "
        >

          {images.map((image) => (

            <div
              key={image.src}
              className="
              relative
              h-56
              rounded-3xl
              overflow-hidden
              group
              "
            >

              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="
                object-cover
                transition
                duration-500
                group-hover:scale-110
                "
              />

            </div>

          ))}

        </div>



        {/* Button */}
{/* View More Button */}

<div className="flex justify-center mt-10">

  <Link
    href="/gallery"
    className="
      bg-[#4F6F52]
      text-white
      px-8
      py-3
      rounded-full
      font-semibold
      hover:bg-[#3d583f]
      transition
    "
  >
    View More Photos
  </Link>

</div>


      </div>

    </section>
  );
}