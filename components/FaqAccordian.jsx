"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer: "We design modern websites, branding, and creative digital experiences."
  },
  {
    question: "How long does a project take?",
    answer: "Most projects take between 1-3 weeks depending on complexity."
  },
  {
    question: "Do you provide support after delivery?",
    answer: "Yes, we provide support and maintenance after project completion."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border rounded-xl p-4 cursor-pointer transition-all"
          onClick={() => toggleAccordion(index)}
        >
          {/* Question */}
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{faq.question}</h3>

            <ChevronDown
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Answer */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-40 mt-3" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}