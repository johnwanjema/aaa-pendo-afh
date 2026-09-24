import {
  HeartHandshake,
  House,
  ShieldCheck,
  Users,
} from "lucide-react";

const reasons = [
  {
    title: "Personalized Care",
    description:
      "Every resident receives an individualized care plan designed around their unique needs, routines, and preferences.",
    icon: HeartHandshake,
  },
  {
    title: "Home-Like Environment",
    description:
      "Our welcoming home provides comfort, familiarity, and a peaceful atmosphere where residents can truly feel at ease.",
    icon: House,
  },
  {
    title: "Family Partnership",
    description:
      "We value open communication and work closely with families to ensure confidence and peace of mind.",
    icon: Users,
  },
  {
    title: "Safe & Secure Living",
    description:
      "Residents enjoy compassionate care in a safe environment where dignity, respect, and well-being come first.",
    icon: ShieldCheck,
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-12 bg-[#F5F1E8]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="uppercase tracking-[3px] text-[#4F6F52] font-semibold text-sm">
            Why Choose AAAPendo AFH
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#252525]">
            Exceptional Care Begins
            <span className="block text-[#4F6F52]">
              With Genuine Compassion
            </span>
          </h2>
        </div>


        {/* Cards */}
        <div className="space-y-4">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              const left = index % 2 === 0;

              return (
                <div key={reason.title} className={`flex ${left ? "md:justify-start" : "md:justify-end"}`}>
                  <div className="md:w-[48%]">
                    <div className="rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F1E8]">
                          <Icon className="text-[#4F6F52]" size={20} />
                        </div>

                        <h3 className="text-lg font-semibold text-[#252525]">
                          {reason.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
       </div>
   </section>
  );
}