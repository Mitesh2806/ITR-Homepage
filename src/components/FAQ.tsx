import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the new tax regime in India and how does it affect defence procurement?",
    answer: "India’s new tax regime simplifies the overall tax structure by offering lower rates and fewer exemptions, which boosts disposable income and encourages investment. In the context of defence, these reforms free up fiscal resources that can be redirected toward enhancing domestic manufacturing under initiatives like 'Make in India' and 'Atmanirbhar Bharat', thereby reducing reliance on imports.",
    value: "item-1"
  },
  {
    question: "Are there any tax incentives for domestic defence manufacturing in India?",
    answer: "Yes. The government has introduced several measures—including reduced corporate tax rates, tax credits for research and development, and streamlined compliance procedures—to incentivize domestic production. These incentives are designed to promote indigenous defence manufacturing, encouraging companies to invest in technology and production capabilities.",
    value: "item-2"
  },
  {
    question: "How does the tax regime impact the cost of defence equipment in India?",
    answer: "By lowering tax rates and simplifying tax procedures, the new regime helps reduce the overall production costs. This reduction can make domestically manufactured defence equipment more competitive compared to imported alternatives. In addition, adjustments in import duties on key components may further help in lowering procurement costs.",
    value: "item-3"
  },
  {
    question: "What tax reforms have been introduced to support India’s indigenous defence industry?",
    answer: "Recent reforms include streamlined tax slabs, lower corporate taxes, and enhanced incentives for R&D and capital investments in the defence sector. These measures aim to attract both domestic and foreign investments, improve ease of doing business, and accelerate the shift towards self-reliance in defence manufacturing.",
    value: "item-4"
  },
  {
    question: "How does the current tax policy affect foreign investment in India’s defence sector?",
    answer: "The current tax policy, combined with liberalized FDI norms and targeted tax incentives, creates a more attractive environment for foreign investors in the defence sector. However, challenges such as meeting indigenous content requirements and navigating complex regulatory frameworks for technology transfer still remain.",
    value: "item-5"
  }
]


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
