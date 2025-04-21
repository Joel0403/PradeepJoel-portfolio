
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How many players can I register in a team?",
    answer: "You can register up to 8 players per team for the 5-a-side tournament: 5 main players and 3 substitutes. All registered players must follow the tournament dress code."
  },
  {
    question: "What happens if we're late for a match?",
    answer: "Late arrivals result in automatic disqualification. Teams must arrive 15-20 minutes before their scheduled match. No refunds will be provided if a team is disqualified due to late arrival."
  },
  {
    question: "How does the penalty shootout work if matches are tied?",
    answer: "In case of a tie: Round 1 - 3 penalties per team. If still tied, Round 2 - two new players take penalties. If still tied, Round 3 - one remaining player takes a penalty. For Quarter-finals and earlier, Round 4 is a toss if still tied. Semi-finals & Finals will have extra time instead of a toss."
  },
  {
    question: "Is there any medical support available during the tournament?",
    answer: "Yes, basic first aid will be available at the venue. However, players compete at their own risk and should have their own medical insurance coverage."
  },
  {
    question: "Can I get a refund if my team withdraws from the tournament?",
    answer: "No, the registration fee and advance amount are non-refundable once your team is registered. This applies to all cases including disqualification or voluntary withdrawal."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gradient-green">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <HelpCircle className="text-football-dark mr-3" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold text-football-dark">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 football-card bg-white shadow-md overflow-hidden"
            >
              <button 
                className={`w-full flex justify-between items-center p-5 text-left font-semibold text-football-dark focus:outline-none ${openIndex === index ? 'bg-football-primary/10' : ''}`}
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? 
                  <ChevronUp className="text-football-primary flex-shrink-0" /> :
                  <ChevronDown className="text-football-primary flex-shrink-0" />
                }
              </button>
              <div 
                className={`px-5 transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-60 pb-5' : 'max-h-0'}`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
