import React from "react";
import { faqs } from "../data/pagesData";
import { BtnExpand } from "../features/BtnExpand";

const FaqItem = (props: {
  question: string;
  answer: Array<{ type: string; content?: string; items?: string[] }>;
}) => (
  <div className="grid grid-rows-[max-content_0fr] border-b pb-8 transition-all duration-[400ms] ease-[cubic-bezier(0.40,0.00,0.20,1.00)] md:pb-10">
    <button
      type="button"
      className="justify-space-between flex place-items-center gap-x-2 text-left md:gap-x-4"
    >
      <h3 className="regular-heading max-w-xl pb-2 md:max-w-2xl md:pb-4 lg:max-w-3xl">
        {props.question}
      </h3>
      <div className="ml-auto">
        <BtnExpand />
      </div>
    </button>

    <div className="md:mr-sm max-w-xl overflow-hidden pr-8 opacity-100 transition-opacity delay-200 duration-[400ms] ease-[cubic-bezier(0.40,0.00,0.20,1.00)] md:max-w-2xl md:pr-11 lg:max-w-3xl">
      <div className="regular-paragraph group pt-2 md:pt-4">
        {props.answer.map((part, index) =>
          part.type === "paragraph" ? (
            <p key={index}>{part.content}</p>
          ) : part.type === "list" ? (
            <ul key={index}>
              {part.items?.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
              <br />
            </ul>
          ) : null,
        )}
      </div>
    </div>
  </div>
);

export const FaqSection = (): JSX.Element => (
  <section className="grid gap-y-10 bg-col-mint-cream pb-10 pt-20 md:gap-y-16 md:pb-16 md:pt-32">
    <div className="container grid grid-cols-4 gap-x-4 gap-y-10 sm:grid-cols-8 md:grid-cols-12 md:gap-y-16 lg:gap-x-6">
      <h2 className="big-heading md:leading-[3.5rem]">FAQ</h2>
    </div>
    <div className="container grid grid-cols-4 gap-x-4 gap-y-10 sm:grid-cols-8 md:grid-cols-12 md:gap-y-16 lg:gap-x-6">
      <div className="col-span-4 col-start-1 grid gap-y-8 xs:col-span-4 xs:col-start-1 sm:col-span-7 sm:col-start-2 md:col-span-10 md:col-start-3 md:gap-y-10 lg:col-span-9 lg:col-start-3 xl:col-span-8 xl:col-start-4">
        {faqs.map((faqItem, index) => (
          <FaqItem
            key={index}
            question={faqItem.question}
            answer={faqItem.answer}
          />
        ))}
      </div>
    </div>
  </section>
);
