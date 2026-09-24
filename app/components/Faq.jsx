"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does AAAPendo AFH provide?",
    answer:
      "We provide personalized adult family home care including assistance with daily living activities, medication support, nutritious meals, companionship, and 24-hour supervision in a safe home environment.",
  },
  {
    question: "Can families visit their loved ones?",
    answer:
      "Yes. We encourage family involvement and welcome scheduled visits to help residents maintain strong relationships with their loved ones.",
  },
  {
    question: "Do you accommodate special dietary needs?",
    answer:
      "Absolutely. Meals are prepared according to each resident's dietary requirements, preferences, and physician recommendations.",
  },
  {
    question: "How do I schedule a tour?",
    answer:
      "Simply complete the contact form on this website or call us directly. We'd be happy to arrange a personal tour of either of our homes.",
  },
  {
    question: "What makes AAAPendo AFH different?",
    answer:
      "We focus on compassionate, individualized care in a warm, family-like setting where every resident is treated with dignity, respect, and kindness.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className=" relative py-24 bg-gradient-to-b from-gray-50 via-[#FCFAF4] to-[#F5F1E8]">
      {/* Top divider */}
      {/* <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" /> */}

      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-[#4F6F52]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#252525] md:text-5xl">
            We're Here to Help
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
            Find answers to some of the questions families ask most often when
            considering care for their loved ones.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                open === index
                  ? "border-[#C89B3C] bg-white shadow-lg"
                  : "border-gray-200 bg-white shadow-sm hover:border-[#C89B3C]/40 hover:shadow-md"
              }`}
            >
              <button
                suppressHydrationWarning
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >
                <span
                  className={`text-lg font-semibold transition-colors ${
                    open === index
                      ? "text-[#4F6F52]"
                      : "text-[#252525]"
                  }`}
                >
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-all duration-300 ${
                    open === index
                      ? "rotate-180 text-[#C89B3C]"
                      : "text-[#4F6F52]"
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-6 leading-7 text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}