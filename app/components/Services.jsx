import {
  HeartPulse,
  UsersRound,
  House,
  Utensils,
  Pill,
  Accessibility,
} from "lucide-react";

const services = [
  {
    title: "Personalized Care",
    description:
      "Support tailored to each resident's physical, emotional, and daily care needs.",
    icon: HeartPulse,
  },
  {
    title: "Companionship & Activities",
    description:
      "Meaningful social interaction and activities that encourage connection and engagement.",
    icon: UsersRound,
  },
  {
    title: "Comfortable Living",
    description:
      "A warm, welcoming home environment where residents feel safe and valued.",
    icon: House,
  },
  {
    title: "Nutritious Meals",
    description:
      "Fresh, balanced meals prepared with residents' preferences and dietary needs in mind.",
    icon: Utensils,
  },
  {
    title: "Medication Support",
    description:
      "Assistance with medication routines while promoting health and wellness.",
    icon: Pill,
  },
  {
    title: "Daily Living Assistance",
    description:
      "Support with daily activities while encouraging independence and dignity.",
    icon: Accessibility,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 bg-white"
      //  className="relative overflow-hidden py-20"
    >
      {/* <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: "url('/lobby.jpeg')" }}
// /> */}
// <div className="absolute inset-0 bg-black/10" />

      <div className="max-w-6xl mx-auto px-6">
      {/* <div className="relative z-10 max-w-6xl mx-auto px-6"> */}

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-12">

          <p className="
            uppercase
            tracking-[3px]
            text-[#4F6F52]
            font-semibold
            text-sm
          ">
            Our Services
          </p>


          <h2 className="
            mt-3
            text-3xl
            md:text-4xl
            font-bold
            text-[#252525]
          ">
            Compassionate Support
            <span className="block text-[#4F6F52]">
              Designed Around You
            </span>
          </h2>


          <p className="
            mt-4
            text-gray-600
            leading-7
          ">
            We provide personalized care and daily support in a
            comfortable home environment where every resident is
            treated with dignity and respect.
          </p>

        </div>


        {/* Services Grid */}

        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="
                  group
                  bg-[#F5F1E8]
                  rounded-3xl
                  p-6
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:shadow-xl
                  hover:-translate-y-2
                "
              >

                <div
                  className="
                    w-12
                    h-12
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    group-hover:bg-[#F5F1E8]
                    transition
                  "
                >
                  <Icon
                    size={24}
                    className="text-[#4F6F52]"
                  />
                </div>


                <h3
                  className="
                    mt-5
                    text-xl
                    font-semibold
                    text-[#252525]
                  "
                >
                  {service.title}
                </h3>


                <p
                  className="
                    mt-3
                    text-gray-600
                    leading-7
                    text-sm
                  "
                >
                  {service.description}
                </p>


              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}