import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowRight, HeartHandshake,  ShieldCheck, Utensils,  BedDouble,  Home,  Trees, MapPin,} from "lucide-react";

export default function HomeTwo() {
  const highlights = [
    {
      icon: HeartHandshake,
      title: "Family-Centered Care",
      text: "Residents receive individualized support from compassionate caregivers in a welcoming family environment.",
    },
    {
      icon: ShieldCheck,
      title: "Comfort & Security",
      text: "Designed with resident safety in mind while maintaining the warmth and comfort of home.",
    },
    {
      icon: Utensils,
      title: "Healthy Living",
      text: "Freshly prepared meals, daily routines, and engaging activities help residents enjoy every day.",
    },
  ];

  const amenities = [
    {
      icon: BedDouble,
      title: "Bright Private Bedrooms",
    },
    {
      icon: Home,
      title: "Open Living & Dining Areas",
    },
    {
      icon: Trees,
      title: "Peaceful Outdoor Patio",
    },
    {
      icon: ShieldCheck,
      title: "Accessible Home Design",
    },
  ];

  const services = [
    "24-Hour Personalized Care",
    "Medication Assistance",
    "Help with Activities of Daily Living",
    "Memory & Dementia Care",
    "Hospice & Respite Care",
    "Laundry & Housekeeping",
    "Daily Social Activities",
    "Coordination with Medical Providers",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-[#FFFBF5]">

        {/* HERO */}

        <section className="relative flex min-h-[70vh] items-center pt-32 pb-16">

          <Image
            src="/overview2.1.jpeg"
            alt="Pendo AFH Home Two"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="relative z-10 w-full">

            <div className="mx-auto max-w-7xl px-6 text-white">

              <span className="rounded-full bg-[#C89B3C] px-5 py-2 font-medium text-black">
                Pendo AFH
              </span>

              <h1 className="mt-6 text-5xl font-bold md:text-7xl">
                Home Two
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
                A comfortable Adult Family Home offering compassionate care,
                meaningful companionship, and a peaceful environment where
                residents can truly feel at home.
              </p>

              <Link
                href="/#contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#4F6F52] px-8 py-4 font-semibold transition hover:bg-[#3D5B43]"
              >
                Schedule a Tour
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </section>

        {/* ABOUT */}

        <section className="py-24">

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

            <div>

              <p className="font-semibold uppercase tracking-[4px] text-[#4F6F52]">
                About Our Home
              </p>

              <h2 className="mt-4 text-4xl font-bold text-[#252525]">
                Exceptional Care with the Comfort of Home
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Pendo AFH Home Two offers personalized care in a peaceful,
                welcoming environment where every resident is treated like
                family. We focus on promoting dignity, independence, and
                quality of life through compassionate support.
              </p>

              <p className="mt-5 leading-8 text-gray-600">
                Our experienced caregivers build lasting relationships with
                residents while providing the assistance needed to help them
                live comfortably and confidently.
              </p>

            </div>

            <div className="relative h-[450px] overflow-hidden rounded-3xl shadow-lg">

              <Image
                src="/home2.jpeg"
                alt="Home Two Living Room"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </section>

        {/* WHY CHOOSE */}

        <section className="pb-24">

          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-center text-4xl font-bold text-[#252525]">
              Why Families Choose Home Two
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-8 shadow-md transition hover:-translate-y-2"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF4EF]">
                    <item.icon className="text-[#4F6F52]" />
                  </div>

                  <h3 className="text-xl text-gray-800 font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* AMENITIES */}

        <section className="bg-white py-24">

          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-center text-gray-600 text-4xl font-bold">
              Living Spaces & Amenities
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              {amenities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-gray-100 p-8 text-center shadow-sm"
                >
                  <item.icon className="mx-auto h-10 w-10 text-[#4F6F52]" />

                  <h3 className="mt-5 text-[#252525] font-semibold">
                    {item.title}
                  </h3>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* SERVICES */}

        <section className="py-24">

          <div className="mx-auto max-w-7xl px-6">

            <h2 className="text-center text-gray-600 text-4xl font-bold">
              Care Services
            </h2>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">

              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-sm"
                >
                  <div className="h-3 w-3 rounded-full bg-[#C89B3C]" />

                  <span className="text-gray-700">
                    {service}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>

        {/* LOCATION */}

        <section className="pb-24">

          <div className="mx-auto max-w-5xl rounded-[36px] bg-[#4F6F52] px-10 py-16 text-center text-white">

            <MapPin className="mx-auto h-10 w-10 text-[#C89B3C]" />

            <h2 className="mt-6 text-4xl font-bold">
              A Place You'll Be Proud to Call Home
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-200">
              Located in a peaceful neighborhood with convenient access to
              healthcare providers, parks, shopping centers, and community
              amenities, making it easy for families to stay connected.
            </p>

            <Link
              href="/#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#C89B3C] px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              Schedule a Tour
              <ArrowRight size={18} />
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}