import React, { useState } from "react";
import "./FAQ.scss";

function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Function to toggle accordion visibility
  function toggleAccordion(id) {
    setActiveAccordion(activeAccordion === id ? null : id);
  }

  return (
    <div className="faq max-container padding-container mx-auto">
      <div className="container ">
        <div className="grid grid-cols-2">
          <div className="faq-left">
            <div className="faq-left-img"></div>
          </div>
          <div className="px-[40px] py-[40px] bg-[#F8F7F0]">
            <h4 className="text-[#2AAA8A] font-medium text-[26px]">FAQ</h4>
            <h3 className="font-semibold text-[32px]">Trouble Shooting Tips</h3>
            <p className="text-[#7A7A7A]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </p>
            <div className="dropdown mt-4">
              <div className="accordion">
                <div id="accordion-collapse" data-accordion="collapse">
                  <h2 id="accordion-collapse-heading-1">
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right text-gray-500 border-0 border-b-[1px] border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                      onClick={() =>
                        toggleAccordion("accordion-collapse-body-1")
                      }
                      aria-expanded={
                        activeAccordion === "accordion-collapse-body-1"
                      }
                      aria-controls="accordion-collapse-body-1"
                    >
                      <span className="text-[16px]">What is Flowbite?</span>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 rotate-180 shrink-0 ${
                          activeAccordion === "accordion-collapse-body-1"
                            ? "active"
                            : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-1"
                    className={`p-5 border-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
                      activeAccordion === "accordion-collapse-body-1"
                        ? "block"
                        : "hidden"
                    }`}
                    aria-labelledby="accordion-collapse-heading-1"
                  >
                    <div>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is an open
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out this guide to learn how to{" "}
                        <a
                          href="/docs/getting-started/introduction/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          get started
                        </a>{" "}
                        and start developing websites even faster with
                        components on top of Tailwind CSS.
                      </p>
                    </div>
                  </div>
                  <h2 id="accordion-collapse-heading-2">
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full px-5 py-2 font-medium rtl:text-right text-gray-500 border-0 border-b-[1px] border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3`}
                      onClick={() =>
                        toggleAccordion("accordion-collapse-body-2")
                      }
                      aria-expanded={
                        activeAccordion === "accordion-collapse-body-2"
                      }
                      aria-controls="accordion-collapse-body-2"
                    >
                      <span className="text-[16px]">
                        Is there a Figma file available?
                      </span>
                      <svg
                        data-accordion-icon
                        className={`w-3 h-3 rotate-180 shrink-0 ${
                          activeAccordion === "accordion-collapse-body-2"
                            ? "active"
                            : ""
                        }`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="accordion-collapse-body-2"
                    className={`p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
                      activeAccordion === "accordion-collapse-body-2"
                        ? "block"
                        : "hidden"
                    }`}
                    aria-labelledby="accordion-collapse-heading-2"
                  >
                    <div>
                      <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Flowbite is first conceptualized and designed using the
                        Figma software so everything you see in the library has
                        a design equivalent in our Figma file.
                      </p>
                      <p className="text-gray-500 dark:text-gray-400">
                        Check out the{" "}
                        <a
                          href="https://flowbite.com/figma/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Figma design system
                        </a>{" "}
                        based on the utility classes from Tailwind CSS and
                        components from Flowbite.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
