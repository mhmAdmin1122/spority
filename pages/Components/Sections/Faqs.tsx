import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faqs = () => {
  const [open, setOpen] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What forms of payment do you accept?",
      answer: "We accept Visa, MasterCard, American Express, and PayPal.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team at support@example.com.",
    },{
        question: "What forms of payment do you accept?",
        answer: "We accept Visa, MasterCard, American Express, and PayPal.",
      },{
      question: "What forms of payment do you accept?",
      answer: "We accept Visa, MasterCard, American Express, and PayPal.",
    },
    // Add more FAQ items as needed
  ];

  const toggleAnswer = (index: number) => {
    setOpen((prevOpen) => (prevOpen === index ? null : index));
  };

  return (
    <div className="py-[60px]">
      <div className="faq-section-spority">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="faq-section-box"
          >
            <div
              className="answer-question"
              onClick={() => toggleAnswer(index)}
            >
              <span className="ml-2 text-lg font-semibold ">
                {item.question}
              </span>

              {open === index ? (
                <IoIosArrowUp className="w-5 h-5 mx-1" />
              ) : (
                <IoIosArrowDown className="w-5 h-5 mx-1" />
              )}
            </div>
            {open === index && <p className="mt-2 ml-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
